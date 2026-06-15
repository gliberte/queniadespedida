import {
  AbsoluteFill,
  Audio,
  Img,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

function isVideo(url: string): boolean {
  if (!url) return false;
  const cleanUrl = url.split("?")[0].split("#")[0];
  const extension = cleanUrl.split(".").pop()?.toLowerCase();
  return ["mp4", "webm", "mov", "avi", "mkv", "3gp", "ogg"].includes(extension || "");
}

// Estructura de tipos
export interface PhotoItem {
  id?: number | string;
  title: string;
  desc_text?: string;
  url: string;
}

export interface MessageItem {
  name: string;
  dept: string;
  reaction: string;
  text: string;
  date: string;
}

interface HomenajeProps {
  photos: PhotoItem[];
  messages: MessageItem[];
}

const FRAME_RATE = 30;
const INTRO_DURATION = 150; // 5 segundos
const OUTRO_DURATION = 150; // 5 segundos
const PHOTO_DURATION = 150; // 5 segundos
const MESSAGE_DURATION = 180; // 6 segundos

// Estilos globales simulados basados en style.css (Tema Morado Profundo y Oro)
const theme = {
  bgDeep: "#0e0510",
  bgDark: "#190a1d",
  bgCard: "rgba(33, 15, 37, 0.85)",
  accentGold: "#d4af37",
  accentGoldLight: "#f3e5ab",
  textSilk: "#fdfbf7",
  textMuted: "#d5c8d8",
  borderGold: "rgba(212, 175, 55, 0.4)",
  fontSerif: "'Cormorant Garamond', Georgia, serif",
  fontSans: "'Montserrat', sans-serif",
};

export const HomenajeVideo: React.FC<HomenajeProps> = ({ photos = [], messages = [] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Filtrar fotos que tengan URL válida
  const validPhotos = photos.filter(p => p.url);
  // Si no hay fotos, agregar la foto de Quenia local
  const displayPhotos = validPhotos.length > 0 ? validPhotos : [
    { title: "Quenia Quintana de Broce", url: staticFile("quenia.jpg") }
  ];

  // Calcular offsets de inicio de cada sección
  const numPhotos = displayPhotos.length;
  const numMessages = messages.length;

  const getSectionRanges = () => {
    let currentFrameOffset = 0;
    const ranges: { type: "intro" | "photo" | "message" | "outro"; index: number; start: number; end: number }[] = [];

    // Intro
    ranges.push({ type: "intro", index: 0, start: currentFrameOffset, end: currentFrameOffset + INTRO_DURATION });
    currentFrameOffset += INTRO_DURATION;

    // Photos
    for (let i = 0; i < numPhotos; i++) {
      ranges.push({ type: "photo", index: i, start: currentFrameOffset, end: currentFrameOffset + PHOTO_DURATION });
      currentFrameOffset += PHOTO_DURATION;
    }

    // Messages
    for (let i = 0; i < numMessages; i++) {
      ranges.push({ type: "message", index: i, start: currentFrameOffset, end: currentFrameOffset + MESSAGE_DURATION });
      currentFrameOffset += MESSAGE_DURATION;
    }

    // Outro
    ranges.push({ type: "outro", index: 0, start: currentFrameOffset, end: currentFrameOffset + OUTRO_DURATION });

    return ranges;
  };

  const sections = getSectionRanges();
  const currentSection = sections.find(s => frame >= s.start && frame < s.end) || sections[sections.length - 1];

  // Opacidad global para transiciones (crossfade suave)
  const getSlideTransitionOpacity = (start: number, end: number) => {
    const transitionFrames = 15;
    if (frame < start + transitionFrames) {
      return interpolate(frame, [start, start + transitionFrames], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    }
    if (frame > end - transitionFrames) {
      return interpolate(frame, [end - transitionFrames, end], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    }
    return 1;
  };

  const slideOpacity = getSlideTransitionOpacity(currentSection.start, currentSection.end);
  const localFrame = frame - currentSection.start;

  // Renderizador de componentes por sección
  const renderContent = () => {
    if (currentSection.type === "intro") {
      // Intro Slide Animado
      const textSpring = spring({
        frame: localFrame,
        fps,
        config: { damping: 12 },
      });
      const translateY = interpolate(textSpring, [0, 1], [50, 0]);
      const opacity = interpolate(textSpring, [0, 1], [0, 1]);

      return (
        <AbsoluteFill
          style={{
            backgroundColor: theme.bgDeep,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Fondo decorativo con gradiente */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, rgba(45, 20, 50, 0.6) 0%, rgba(14, 5, 16, 1) 100%)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              zIndex: 2,
              textAlign: "center",
              transform: `translateY(${translateY}px)`,
              opacity,
            }}
          >
            <span
              style={{
                fontFamily: theme.fontSans,
                color: theme.accentGold,
                textTransform: "uppercase",
                letterSpacing: "4px",
                fontSize: "24px",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Homenaje de Trayectoria
            </span>
            <h1
              style={{
                fontFamily: theme.fontSerif,
                color: theme.textSilk,
                fontSize: "90px",
                margin: 0,
                fontWeight: 700,
                textShadow: "0 10px 20px rgba(0,0,0,0.6)",
              }}
            >
              Quenia Quintana de Broce
            </h1>
            <div
              style={{
                width: "120px",
                height: "2px",
                backgroundColor: theme.accentGold,
                margin: "30px auto",
              }}
            />
            <p
              style={{
                fontFamily: theme.fontSans,
                color: theme.textMuted,
                fontSize: "32px",
                fontWeight: 300,
                maxWidth: "1000px",
                lineHeight: 1.5,
              }}
            >
              Celebrando tu jubilación y el inmenso cariño de la familia de Barraza Y Cia
            </p>
          </div>
        </AbsoluteFill>
      );
    }

    if (currentSection.type === "photo") {
      const photo = displayPhotos[currentSection.index];
      // Ken Burns Effect (Zoom suave)
      const scale = interpolate(localFrame, [0, PHOTO_DURATION], [1.02, 1.15], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

      // Animación del texto descriptivo
      const captionSpring = spring({
        frame: localFrame - 15,
        fps,
        config: { damping: 15 },
      });
      const captionOpacity = interpolate(captionSpring, [0, 1], [0, 1]);
      const captionTranslateY = interpolate(captionSpring, [0, 1], [30, 0]);

      const isVid = isVideo(photo.url);

      return (
        <AbsoluteFill style={{ backgroundColor: theme.bgDeep }}>
          {/* Fondo blur detrás de la imagen principal */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: isVid ? "none" : `url(${photo.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20px) brightness(0.25)",
              transform: "scale(1.1)",
              zIndex: 1,
            }}
          />

          {/* Imagen o Video Principal */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "70%",
              height: "65%",
              borderRadius: "16px",
              border: `2px solid ${theme.borderGold}`,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
              zIndex: 2,
            }}
          >
            {isVid ? (
              <Video
                src={photo.url}
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Img
                src={photo.url}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${scale})`,
                }}
              />
            )}
          </div>

          {/* Texto de pie de foto */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "15%",
              width: "70%",
              zIndex: 3,
              textAlign: "center",
              opacity: captionOpacity,
              transform: `translateY(${captionTranslateY}px)`,
            }}
          >
            <h2
              style={{
                fontFamily: theme.fontSerif,
                color: theme.accentGold,
                fontSize: "48px",
                margin: "0 0 10px 0",
                fontWeight: 600,
                textShadow: "0 4px 10px rgba(0,0,0,0.8)",
              }}
            >
              {photo.title || "Recuerdo Especial"}
            </h2>
            {photo.desc_text && (
              <p
                style={{
                  fontFamily: theme.fontSans,
                  color: theme.textSilk,
                  fontSize: "24px",
                  fontWeight: 300,
                  margin: 0,
                  textShadow: "0 2px 5px rgba(0,0,0,0.8)",
                }}
              >
                {photo.desc_text}
              </p>
            )}
          </div>
        </AbsoluteFill>
      );
    }

    if (currentSection.type === "message") {
      const msg = messages[currentSection.index];

      // Animaciones de entrada del mensaje
      const entrySpring = spring({
        frame: localFrame,
        fps,
        config: { damping: 15 },
      });
      const cardScale = interpolate(entrySpring, [0, 1], [0.92, 1]);
      const cardOpacity = interpolate(entrySpring, [0, 1], [0, 1]);

      return (
        <AbsoluteFill
          style={{
            backgroundColor: theme.bgDeep,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Fondo animado sutil */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, rgba(30, 12, 35, 0.8) 0%, rgba(10, 3, 12, 1) 100%)",
              zIndex: 1,
            }}
          />

          {/* Tarjeta del Mensaje */}
          <div
            style={{
              zIndex: 2,
              width: "65%",
              backgroundColor: theme.bgCard,
              borderRadius: "24px",
              border: `2px solid ${theme.borderGold}`,
              padding: "60px 80px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.8)",
              transform: `scale(${cardScale})`,
              opacity: cardOpacity,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "450px",
            }}
          >
            {/* Cabecera de la Tarjeta */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid rgba(212, 175, 55, 0.2)`,
                paddingBottom: "25px",
                marginBottom: "30px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: theme.fontSerif,
                    color: theme.accentGoldLight,
                    fontSize: "42px",
                    margin: "0 0 5px 0",
                    fontWeight: 700,
                  }}
                >
                  {msg.name}
                </h3>
                <span
                  style={{
                    fontFamily: theme.fontSans,
                    color: theme.textMuted,
                    fontSize: "22px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  {msg.dept}
                </span>
              </div>
              <div
                style={{
                  fontSize: "80px",
                  filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.4))",
                }}
              >
                {msg.reaction}
              </div>
            </div>

            {/* Cuerpo del Mensaje */}
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <p
                style={{
                  fontFamily: theme.fontSans,
                  color: theme.textSilk,
                  fontSize: "30px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  fontStyle: "italic",
                  margin: 0,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                "{msg.text}"
              </p>
            </div>

            {/* Fecha del Mensaje */}
            <div
              style={{
                textAlign: "right",
                fontFamily: theme.fontSans,
                color: theme.textMuted,
                fontSize: "18px",
                marginTop: "30px",
                letterSpacing: "1px",
              }}
            >
              {msg.date}
            </div>
          </div>
        </AbsoluteFill>
      );
    }

    if (currentSection.type === "outro") {
      const outroSpring = spring({
        frame: localFrame,
        fps,
        config: { damping: 12 },
      });
      const outroOpacity = interpolate(outroSpring, [0, 1], [0, 1]);
      const outroScale = interpolate(outroSpring, [0, 1], [0.95, 1]);

      return (
        <AbsoluteFill
          style={{
            backgroundColor: theme.bgDeep,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, rgba(45, 20, 50, 0.7) 0%, rgba(14, 5, 16, 1) 100%)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              zIndex: 2,
              textAlign: "center",
              opacity: outroOpacity,
              transform: `scale(${outroScale})`,
            }}
          >
            <h1
              style={{
                fontFamily: theme.fontSerif,
                color: theme.accentGold,
                fontSize: "80px",
                fontWeight: 700,
                margin: "0 0 20px 0",
              }}
            >
              ¡Gracias por tanto, Quenia!
            </h1>
            <p
              style={{
                fontFamily: theme.fontSans,
                color: theme.textSilk,
                fontSize: "36px",
                fontWeight: 300,
                marginBottom: "40px",
              }}
            >
              Tu legado queda con nosotros en Barraza Y Cia.
            </p>
            <div
              style={{
                width: "80px",
                height: "1px",
                backgroundColor: theme.borderGold,
                margin: "0 auto 40px auto",
              }}
            />
            <span
              style={{
                fontFamily: theme.fontSans,
                color: theme.textMuted,
                fontSize: "20px",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              Feliz Jubilación • 2026
            </span>
          </div>
        </AbsoluteFill>
      );
    }

    return null;
  };

  return (
    <AbsoluteFill style={{ opacity: slideOpacity }}>
      {/* Música de fondo local si existe, o música en silencio/fallback */}
      <Audio src={staticFile("music.mp3")} volume={0.4} />
      {renderContent()}
    </AbsoluteFill>
  );
};
