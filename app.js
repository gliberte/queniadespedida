/* ==========================================================================
   CONFIGURACIONES Y CONFIGURACIÓN INICIAL
   ========================================================================== */

// Datos iniciales de la Galería de Fotos (Imágenes SVG en línea ultraligeras y elegantes)
const INITIAL_PHOTOS = [
  {
    id: 1,
    title: "Primer Día en Barraza Y Cia",
    desc: "El inicio de un gran viaje lleno de metas y compañerismo.",
    svgColor1: "#2d152a", svgColor2: "#d4af37", text: "¡Bienvenida, Quenia!"
  },
  {
    id: 2,
    title: "Celebración de Fin de Año",
    desc: "Compartiendo risas y éxitos con el equipo administrativo.",
    svgColor1: "#120813", svgColor2: "#e07a5f", text: "Brindis Navideño"
  },
  {
    id: 3,
    title: "Tarde de Logros y Proyectos",
    desc: "Quenia liderando la presentación anual con su característico entusiasmo.",
    svgColor1: "#1d1a0a", svgColor2: "#d4af37", text: "Liderazgo Quenia"
  },
  {
    id: 4,
    title: "Almuerzo de Cumpleaños",
    desc: "Un merecido festejo rodeada del cariño de sus compañeros más cercanos.",
    svgColor1: "#2d152a", svgColor2: "#f3e5ab", text: "Felicidades Quenia"
  },
  {
    id: 5,
    title: "Reconocimiento a la Excelencia",
    desc: "Momento en que se le otorgó el galardón a la trayectoria.",
    svgColor1: "#0e0510", svgColor2: "#d4af37", text: "Trayectoria Impecable"
  },
  {
    id: 6,
    title: "El Último Gran Cierre",
    desc: "Culminando las labores con una sonrisa que inspira a todos.",
    svgColor1: "#1d0c1b", svgColor2: "#e07a5f", text: "¡Gracias Totales!"
  }
];

// Mensajes iniciales en el Libro de Firmas
const PRESET_MESSAGES = [
  {
    name: "Laura Bennett",
    dept: "Junta Directiva",
    reaction: "💖",
    text: "Quenia, gracias por tantos años de lealtad, impecable labor y por ser el corazón de Barraza Y Cia. Te extrañaremos inmensamente en las oficinas, pero nos alegra mucho tu merecido descanso por ley. ¡Que esta nueva etapa te traiga infinitas alegrías!",
    date: "11/06/2026"
  },
  {
    name: "Ing. Roberto Barraza",
    dept: "Gerente General",
    reaction: "🥂",
    text: "Ha sido un honor absoluto trabajar a tu lado, Quenia. Tu profesionalismo y sobre todo tu calidad humana han marcado un antes y un después en nuestra empresa. Mis mejores deseos en tu jubilación. ¡Salud por tu gran trayectoria!",
    date: "11/06/2026"
  },
  {
    name: "Carlos Martínez",
    dept: "Contabilidad",
    reaction: "👏",
    text: "¡La mejor mentora del mundo! Gracias por tener siempre la paciencia de enseñarme y recibirme cada mañana con una sonrisa. Barraza Y Cia no será lo mismo sin ti. ¡Disfruta muchísimo de tu descanso!",
    date: "11/06/2026"
  },
  {
    name: "Sofía Espino",
    dept: "Recursos Humanos",
    reaction: "🤗",
    text: "Quenia querida, gracias por tu calidez. Fuiste la primera en darme la bienvenida y siempre recordaré tus consejos. Que este retiro esté lleno de viajes, paz y tiempo en familia. ¡Te queremos!",
    date: "10/06/2026"
  },
  {
    name: "Héctor Ruiz",
    dept: "Operaciones",
    reaction: "✨",
    text: "Gracias por tu apoyo constante en cada proyecto. Tu dedicación nos inspiró a ser mejores profesionales y compañeros. ¡Mucho éxito en todo lo que venga en este merecido descanso legal!",
    date: "09/06/2026"
  }
];

// Frases emotivas para las Diapositivas
const SLIDESHOW_DATA = [
  {
    quote: "“La jubilación no es el final del camino, es el comienzo de la carretera abierta.”",
    author: "Tus Compañeros de Barraza Y Cia",
    svgColor1: "#210f23", svgColor2: "#d4af37", text: "Dedicatoria Especial"
  },
  {
    quote: "“Gracias, Quenia, por sembrar profesionalismo y cosechar el afecto sincero de todos nosotros.”",
    author: "El Equipo Administrativo",
    svgColor1: "#0e0510", svgColor2: "#e07a5f", text: "Gratitud Eterna"
  },
  {
    quote: "“Tu legado de calidez y esfuerzo permanente queda grabado en las paredes de esta empresa.”",
    author: "Junta Directiva",
    svgColor1: "#1d1a0a", svgColor2: "#d4af37", text: "Huella Imborrable"
  },
  {
    quote: "“Te deseamos días llenos de sol, descanso bien ganado y la felicidad que tanto mereces.”",
    author: "Tus Amigos y Compañeros",
    svgColor1: "#2d152a", svgColor2: "#f3e5ab", text: "Próxima Aventura"
  }
];

// Inicializar cliente de Supabase
const supabaseUrl = 'https://dsyxiowlipttwjuhoqio.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzeXhpb3dsaXB0dHdqdWhvcWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwODIxMTIsImV4cCI6MjA5NTY1ODExMn0.3nEAsh_QMmLr_RRD-FOErC-nNOSwaJxMJb_ENjJDaPI';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

/* ==========================================================================
   INICIALIZACIÓN GENERAL
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initGallery();
  initSlideshow();
  initGuestbook();
  initVideoHub();
  initTimelineObserver();
  initAudioWidget();
  
  // Agregar confetti inicial de celebración
  setTimeout(() => {
    triggerCelebrationConfetti(50);
  }, 1000);
});

/* ==========================================================================
   PARTÍCULAS FLOTANTES DE FONDO
   ========================================================================== */
function initParticles() {
  const container = document.getElementById("particle-container");
  if (!container) return;
  
  const particleCount = 25;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    // Posiciones y tamaños aleatorios
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 12}s`;
    particle.style.animationDuration = `${Math.random() * 8 + 8}s`;
    particle.style.opacity = (Math.random() * 0.4 + 0.1).toFixed(2);
    
    container.appendChild(particle);
  }
}

/* ==========================================================================
   SITIO AUXILIAR: GENERADOR DE PLACEHOLDERS ELEGANTES EN SVG
   ========================================================================== */
function createElegantPlaceholderSVG(color1, color2, titleText) {
  // Genera un string de Data URL para un SVG con estilo de arte abstracto minimalista (champagne/dorado)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="#0e0510"/>
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color2}"/>
          <stop offset="50%" stop-color="#b8860b"/>
          <stop offset="100%" stop-color="#f3e5ab"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgGrad)"/>
      <circle cx="400" cy="300" r="220" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.6"/>
      <circle cx="400" cy="300" r="180" fill="none" stroke="url(#goldGrad)" stroke-width="0.5" opacity="0.4"/>
      <path d="M 200,300 C 300,100 500,500 600,300" fill="none" stroke="url(#goldGrad)" stroke-width="2" opacity="0.5"/>
      <path d="M 150,350 C 250,200 550,400 650,250" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.3"/>
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="32" font-style="italic" fill="${color2}" opacity="0.95">${titleText}</text>
      <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="12" font-weight="300" fill="#d5c8d8" letter-spacing="4" opacity="0.7">BARRAZA Y CIA</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/* ==========================================================================
   REPRODUCTOR HÍBRIDO (VIDEO Y DIAPOSITIVAS)
   ========================================================================== */
function initVideoHub() {
  const tabVideo = document.getElementById("tab-video");
  const tabSlideshow = document.getElementById("tab-slideshow");
  const panelVideo = document.getElementById("panel-video");
  const panelSlideshow = document.getElementById("panel-slideshow");
  
  const videoMockOverlay = document.getElementById("video-mock-overlay");
  
  // Manejo de Pestañas
  tabVideo.addEventListener("click", () => {
    setActiveTab(tabVideo, tabSlideshow, panelVideo, panelSlideshow);
  });
  
  tabSlideshow.addEventListener("click", () => {
    setActiveTab(tabSlideshow, tabVideo, panelSlideshow, panelVideo);
  });

  function setActiveTab(activeTab, inactiveTab, activePanel, inactivePanel) {
    activeTab.classList.add("active");
    activeTab.setAttribute("aria-selected", "true");
    inactiveTab.classList.remove("active");
    inactiveTab.setAttribute("aria-selected", "false");
    
    activePanel.classList.add("show");
    inactivePanel.classList.remove("show");
  }

  // Video permanente de YouTube — ye2_aDuzu3Y
  const YOUTUBE_VIDEO_ID = "ye2_aDuzu3Y";
  const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;

  videoMockOverlay.addEventListener("click", () => {
    videoMockOverlay.style.opacity = "0";
    setTimeout(() => {
      videoMockOverlay.style.display = "none";
      
      // Eliminar iframe previo si hubiera
      const oldIframe = document.querySelector(".tribute-iframe");
      if (oldIframe) oldIframe.remove();

      const iframe = document.createElement("iframe");
      iframe.classList.add("tribute-iframe");
      iframe.src = YOUTUBE_EMBED_URL;
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.title = "Video Homenaje";

      document.getElementById("video-content-area").appendChild(iframe);
      startGenerativeAudio();
      triggerCelebrationConfetti(40);
    }, 300);
  });
}

/* ==========================================================================
   DIAPOSITIVAS DE RECUERDOS (SLIDESHOW SYSTEM)
   ========================================================================== */
let currentSlideIndex = 0;
let slideshowInterval = null;

function initSlideshow() {
  const container = document.getElementById("slides-container");
  const dotsContainer = document.getElementById("slideshow-dots");
  if (!container) return;
  
  // Renderizar diapositivas
  SLIDESHOW_DATA.forEach((data, index) => {
    const slide = document.createElement("div");
    slide.className = `slide ${index === 0 ? "active" : ""}`;
    slide.setAttribute("data-index", index);
    
    const imgUrl = createElegantPlaceholderSVG(data.svgColor1, data.svgColor2, data.text);
    
    slide.innerHTML = `
      <img src="${imgUrl}" alt="Recuerdo Quenia ${index + 1}" class="slide-img">
      <div class="slide-content">
        <blockquote class="slide-quote">${data.quote}</blockquote>
        <cite class="slide-author">${data.author}</cite>
      </div>
    `;
    container.appendChild(slide);
    
    // Dot button
    const dot = document.createElement("button");
    dot.className = `slide-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Ir a diapositiva ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  // Controles
  document.getElementById("slide-prev").addEventListener("click", () => {
    showSlide(currentSlideIndex - 1);
    resetSlideshowTimer();
  });
  document.getElementById("slide-next").addEventListener("click", () => {
    showSlide(currentSlideIndex + 1);
    resetSlideshowTimer();
  });
  
  // Timer de reproducción automática
  startSlideshowTimer();
}

function startSlideshowTimer() {
  slideshowInterval = setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 7000); // 7 segundos por diapositiva
}

function resetSlideshowTimer() {
  clearInterval(slideshowInterval);
  startSlideshowTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slide-dot");
  if (slides.length === 0) return;
  
  // Manejar límites circulares
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  
  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");
  
  currentSlideIndex = index;
  
  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

/* ==========================================================================
   LÍNEA DEL TIEMPO: FALLBACK CON INTERSECTIONOBSERVER
   ========================================================================== */
function initTimelineObserver() {
  // Solo aplicamos JS si el navegador no soporta scroll-driven natively
  if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Solo anima una vez
        }
      });
    }, observerOptions);
    
    document.querySelectorAll(".timeline-item.scroll-reveal").forEach(item => {
      observer.observe(item);
    });
  }
}

/* ==========================================================================
   GALERÍA DE FOTOS Y LIGHTBOX
   ========================================================================== */
async function initGallery() {
  const grid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const uploader = document.getElementById("gallery-image-upload");
  
  if (!grid) return;
  
  // Cargar galería inicial
  await combineAndRenderGallery();

  const lightboxVideo = document.getElementById("lightbox-video");

  function isVideo(url) {
    if (!url) return false;
    const cleanUrl = url.split("?")[0].split("#")[0];
    const extension = cleanUrl.split(".").pop().toLowerCase();
    return ["mp4", "webm", "mov", "avi", "mkv", "3gp", "ogg"].includes(extension);
  }

  function renderGalleryItems(photosList) {
    // Limpiar grid
    grid.innerHTML = "";
    
    photosList.forEach(photo => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      
      const imgUrl = photo.url || createElegantPlaceholderSVG(photo.svgColor1, photo.svgColor2, photo.text);
      const isVid = isVideo(imgUrl);
      
      if (isVid) {
        item.innerHTML = `
          <video src="${imgUrl}" muted autoplay loop playsinline></video>
          <div class="video-badge" style="position: absolute; top: 12px; right: 12px; background: rgba(14, 5, 16, 0.7); padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; color: var(--accent-gold); border: 1px solid var(--border-gold); pointer-events: none; z-index: 2;">▶ VIDEO</div>
          <div class="gallery-caption">
            <h4>${photo.title}</h4>
            <p>${photo.desc}</p>
          </div>
        `;
      } else {
        item.innerHTML = `
          <img src="${imgUrl}" alt="${photo.title}">
          <div class="gallery-caption">
            <h4>${photo.title}</h4>
            <p>${photo.desc}</p>
          </div>
        `;
      }
      
      item.addEventListener("click", () => {
        openLightbox(imgUrl, photo.title, photo.desc);
      });
      
      grid.appendChild(item);
    });
  }

  function openLightbox(src, title, desc) {
    const isVid = isVideo(src);
    if (isVid) {
      lightboxImg.style.display = "none";
      lightboxVideo.src = src;
      lightboxVideo.style.display = "block";
      lightboxVideo.play().catch(e => console.log("Video auto play blocked: ", e));
    } else {
      if (lightboxVideo) {
        lightboxVideo.style.display = "none";
        lightboxVideo.pause();
        lightboxVideo.src = "";
      }
      lightboxImg.src = src;
      lightboxImg.style.display = "block";
    }
    lightboxCaption.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;
    lightbox.classList.add("show");
  }

  function closeLightbox() {
    lightbox.classList.remove("show");
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = "";
    }
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  // Soporte para subir fotos a Supabase Storage
  uploader.addEventListener("change", async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    uploader.disabled = true;
    const labelSpan = uploader.parentElement.querySelector("span");
    const originalText = labelSpan.textContent;
    labelSpan.textContent = "Subiendo fotos a la nube...";
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${i}.${fileExt}`;
      const filePath = fileName;

      // 1. Subir archivo a Supabase Storage
      const { data: uploadData, error: uploadError } = await supabaseClient
        .storage
        .from('quenia_recuerdos')
        .upload(filePath, file);

      if (uploadError) {
        console.error("Error al subir archivo:", uploadError);
        alert(`Error al subir la imagen: ${file.name}. Por favor intenta de nuevo.`);
        continue;
      }

      // 2. Obtener URL pública
      const { data: urlData } = supabaseClient
        .storage
        .from('quenia_recuerdos')
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      // 3. Registrar metadatos en la tabla quenia_photos
      const newPhotoRecord = {
        title: file.name.split(".")[0] || "Recuerdo Especial",
        desc_text: "Foto compartida por un compañero de Barraza Y Cia.",
        url: publicUrl
      };

      const { error: dbError } = await supabaseClient
        .from('quenia_photos')
        .insert([newPhotoRecord]);

      if (dbError) {
        console.error("Error al guardar metadatos en base de datos:", dbError);
      }
    }

    uploader.disabled = false;
    labelSpan.textContent = originalText;
    uploader.value = ""; // Limpiar input

    await combineAndRenderGallery();
    triggerCelebrationConfetti(20);
  });

  async function combineAndRenderGallery() {
    // Obtener fotos de la base de datos
    let { data: dbPhotos, error } = await supabaseClient
      .from('quenia_photos')
      .select('*')
      .order('created_at', { ascending: true });

    let formattedDbPhotos = [];
    if (!error && dbPhotos) {
      formattedDbPhotos = dbPhotos.map(photo => ({
        id: photo.id,
        title: photo.title,
        desc: photo.desc_text,
        url: photo.url
      }));
    }

    // Combinar iniciales con subidas
    const combined = [...INITIAL_PHOTOS, ...formattedDbPhotos];
    renderGalleryItems(combined);
  }
}

/* ==========================================================================
   LIBRO DE FIRMAS (GUESTBOOK) CON LOCALSTORAGE
   ========================================================================== */
async function initGuestbook() {
  const form = document.getElementById("guestbook-form");
  const wall = document.getElementById("guestbook-wall");
  if (!form) return;
  
  await loadMessages();
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("input-name");
    const deptInput = document.getElementById("input-dept");
    const reactionInput = document.querySelector("input[name='reaction']:checked");
    const messageInput = document.getElementById("input-message");
    
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    
    const newEntry = {
      name: nameInput.value.trim(),
      dept: deptInput.value.trim(),
      reaction: reactionInput ? reactionInput.value : "💖",
      text: messageInput.value.trim(),
      date: formattedDate
    };
    
    // Deshabilitar botón durante el envío
    const submitBtn = document.getElementById("btn-submit-message");
    if (submitBtn) submitBtn.disabled = true;

    // Guardar en Supabase
    const { error } = await supabaseClient
      .from('quenia_messages')
      .insert([newEntry]);
      
    if (submitBtn) submitBtn.disabled = false;

    if (error) {
      console.error("Error al guardar mensaje en base de datos:", error);
      alert("No se pudo guardar el mensaje. Intenta nuevamente.");
      return;
    }
    
    // Limpiar formulario
    form.reset();
    
    // Recargar y animar
    await loadMessages(true);
    
    // Efecto de lluvia de confeti
    triggerCelebrationConfetti(45);
  });
  
  async function loadMessages(isUpdate = false) {
    let { data: entries, error } = await supabaseClient
      .from('quenia_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error al cargar mensajes desde base de datos:", error);
      entries = PRESET_MESSAGES;
    } else if (!entries || entries.length === 0) {
      // Si la base de datos está vacía, pre-cargar los presets en Supabase
      const { error: insertError } = await supabaseClient
        .from('quenia_messages')
        .insert(PRESET_MESSAGES);
      
      if (!insertError) {
        const { data: reloaded } = await supabaseClient
          .from('quenia_messages')
          .select('*')
          .order('created_at', { ascending: false });
        entries = reloaded || PRESET_MESSAGES;
      } else {
        entries = PRESET_MESSAGES;
      }
    }

    wall.innerHTML = "";
    
    entries.forEach((entry, idx) => {
      const card = document.createElement("article");
      card.className = "message-card";
      
      if (isUpdate && idx === 0) {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8) translateY(-20px)";
        card.style.transition = "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      }
      
      card.innerHTML = `
        <div class="message-header">
          <div class="message-info">
            <h4>${escapeHTML(entry.name)}</h4>
            <span>${escapeHTML(entry.dept)}</span>
          </div>
          <div class="message-reaction">${entry.reaction}</div>
        </div>
        <p class="message-body">${escapeHTML(entry.text)}</p>
        <div class="message-date">${entry.date}</div>
      `;
      
      wall.appendChild(card);
      
      if (isUpdate && idx === 0) {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1) translateY(0)";
        }, 50);
      }
    });
  }
  
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}

/* ==========================================================================
   LLUVIA DE CONFETI DOURADO Y PÉTALOS (CONFETI ENGINE EFFECT)
   ========================================================================== */
function triggerCelebrationConfetti(count = 30) {
  const colors = ["#d4af37", "#f3e5ab", "#e07a5f", "#ffffff", "#b8860b"];
  const shapes = ["circle", "square", "petal"];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 8 + 6;
    
    confetti.style.background = color;
    confetti.style.width = `${size}px`;
    confetti.style.height = shape === "petal" ? `${size * 1.5}px` : `${size}px`;
    
    if (shape === "circle") {
      confetti.style.borderRadius = "50%";
    } else if (shape === "petal") {
      confetti.style.borderRadius = "0px 50% 0px 50%";
    }
    
    // Posición inicial aleatoria en la parte superior
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `-20px`;
    
    // Configuración de animación
    const duration = Math.random() * 4 + 3;
    confetti.style.animation = `confetti-fall ${duration}s linear forwards`;
    confetti.style.animationDelay = `${Math.random() * 0.5}s`;
    
    document.body.appendChild(confetti);
    
    // Remover del DOM al finalizar
    setTimeout(() => {
      confetti.remove();
    }, (duration + 1) * 1000);
  }
}

/* ==========================================================================
   REPRODUCTOR DE AUDIO DE HOMENAJE (MÚSICA MELANCÓLICA)
   ========================================================================== */
let bgAudio = null;
let isAudioPlaying = false;
let fadeInterval = null;

function initAudioWidget() {
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener("click", () => {
    if (isAudioPlaying) {
      stopGenerativeAudio();
    } else {
      startGenerativeAudio();
    }
  });
}

function startGenerativeAudio() {
  if (!bgAudio) {
    bgAudio = new Audio("music.mp3");
    bgAudio.loop = true;
    bgAudio.volume = 0; // Iniciar en 0 para hacer fade-in
  }
  
  // Detener cualquier desvanecimiento en progreso
  clearInterval(fadeInterval);
  
  // Reanudar contexto / reproducir
  bgAudio.play()
    .then(() => {
      isAudioPlaying = true;
      updateAudioUI(true);
      
      // Fade-in de volumen suave a 0.4
      let targetVolume = 0.4;
      fadeInterval = setInterval(() => {
        if (bgAudio.volume < targetVolume) {
          bgAudio.volume = Math.min(targetVolume, bgAudio.volume + 0.05);
        } else {
          clearInterval(fadeInterval);
        }
      }, 50);
    })
    .catch(err => {
      console.error("Autoplay de audio bloqueado o error al reproducir:", err);
    });
}

function stopGenerativeAudio() {
  if (!bgAudio) return;
  
  isAudioPlaying = false;
  updateAudioUI(false);
  
  // Detener cualquier desvanecimiento en progreso
  clearInterval(fadeInterval);
  
  // Fade-out de volumen suave a 0 antes de pausar
  fadeInterval = setInterval(() => {
    if (bgAudio.volume > 0.05) {
      bgAudio.volume = Math.max(0, bgAudio.volume - 0.08);
    } else {
      bgAudio.volume = 0;
      bgAudio.pause();
      clearInterval(fadeInterval);
    }
  }, 50);
}

function updateAudioUI(isPlaying) {
  const playIcon = document.getElementById("icon-play");
  const pauseIcon = document.getElementById("icon-pause");
  const eq = document.getElementById("eq-container");
  
  if (!playIcon || !pauseIcon || !eq) return;
  
  if (isPlaying) {
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
    eq.classList.add("playing");
  } else {
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
    eq.classList.remove("playing");
  }
}
