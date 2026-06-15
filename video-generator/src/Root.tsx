import "./index.css";
import React, { useEffect, useState } from "react";
import { Composition, delayRender, continueRender } from "remotion";
import { HomenajeVideo, PhotoItem, MessageItem } from "./Homenaje";
import { supabase } from "./SupabaseClient";

// Duración en cuadros de cada tipo de escena
const INTRO_DURATION = 150;
const OUTRO_DURATION = 150;
const PHOTO_DURATION = 150;
const MESSAGE_DURATION = 180;

function checkAssetReachable(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    // Si es un archivo estático local (como staticFile("/quenia.jpg")), es accesible
    if (url.startsWith("/") || url.startsWith("file://") || url.startsWith("_static/")) {
      return resolve(true);
    }
    
    const isVid = ["mp4", "webm", "mov", "avi", "mkv", "3gp", "ogg"].some(ext =>
      url.toLowerCase().split("?")[0].endsWith("." + ext)
    );
    
    if (isVid) {
      const video = document.createElement("video");
      video.onloadedmetadata = () => resolve(true);
      video.onerror = () => resolve(false);
      video.src = url;
    } else {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    }
  });
}

export const RemotionRoot: React.FC = () => {
  const [data, setData] = useState<{ photos: PhotoItem[]; messages: MessageItem[] } | null>(null);
  const [handle] = useState(() => delayRender("fetching-supabase-assets"));

  useEffect(() => {
    async function loadAssets() {
      try {
        console.log("Iniciando descarga de datos de Supabase...");
        
        // 1. Obtener fotos de la galería de Supabase
        const { data: dbPhotos, error: photoError } = await supabase
          .from("quenia_photos")
          .select("*")
          .order("created_at", { ascending: true });

        if (photoError) {
          console.error("Error al obtener fotos de Supabase:", photoError);
        }

        // 2. Obtener mensajes del Libro de Firmas de Supabase
        const { data: dbMessages, error: msgError } = await supabase
          .from("quenia_messages")
          .select("*")
          .order("created_at", { ascending: true }); // Orden ascendente para verlos en orden cronológico

        if (msgError) {
          console.error("Error al obtener mensajes de Supabase:", msgError);
        }

        const photosList = dbPhotos || [];
        const messagesList = dbMessages || [];

        console.log(`Descargadas ${photosList.length} fotos y ${messagesList.length} mensajes. Validando accesibilidad de archivos...`);

        // Validar accesibilidad de cada URL
        const validatedPhotos: PhotoItem[] = [];
        for (const photo of photosList) {
          if (photo.url) {
            const isReachable = await checkAssetReachable(photo.url);
            if (isReachable) {
              validatedPhotos.push(photo);
            } else {
              console.warn(`Saltando foto no disponible o dañada: ${photo.url}`);
            }
          }
        }

        console.log(`Validación completada. ${validatedPhotos.length} de ${photosList.length} fotos listas para renderizar.`);

        setData({
          photos: validatedPhotos,
          messages: messagesList,
        });
      } catch (err) {
        console.error("Fallo general al conectar con Supabase:", err);
        // Fallback básico para que no se congele el render
        setData({ photos: [], messages: [] });
      } finally {
        continueRender(handle);
      }
    }

    loadAssets();
  }, [handle]);

  if (!data) {
    return null;
  }

  // Si no hay fotos, se usará 1 de respaldo (la foto principal)
  const numPhotos = data.photos.length > 0 ? data.photos.length : 1;
  const numMessages = data.messages.length;

  // Duración total = Intro + Fotos + Mensajes + Outro
  const totalFrames =
    INTRO_DURATION +
    numPhotos * PHOTO_DURATION +
    numMessages * MESSAGE_DURATION +
    OUTRO_DURATION;

  console.log(`Configurando video de Homenaje. Duración total: ${totalFrames} frames a 30fps (${Math.round(totalFrames / 30)}s)`);

  return (
    <>
      <Composition
        id="Homenaje"
        component={HomenajeVideo}
        durationInFrames={totalFrames}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          photos: data.photos,
          messages: data.messages,
        }}
      />
    </>
  );
};
