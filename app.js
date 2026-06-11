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
  const tributeVideo = document.getElementById("tribute-video");
  
  // Manejo de Pestañas
  tabVideo.addEventListener("click", () => {
    setActiveTab(tabVideo, tabSlideshow, panelVideo, panelSlideshow);
  });
  
  tabSlideshow.addEventListener("click", () => {
    setActiveTab(tabSlideshow, tabVideo, panelSlideshow, panelVideo);
    // Pause video if playing when switching tabs
    if (tributeVideo && !tributeVideo.paused) {
      tributeVideo.pause();
    }
  });

  function setActiveTab(activeTab, inactiveTab, activePanel, inactivePanel) {
    activeTab.classList.add("active");
    activeTab.setAttribute("aria-selected", "true");
    inactiveTab.classList.remove("active");
    inactiveTab.setAttribute("aria-selected", "false");
    
    activePanel.classList.add("show");
    inactivePanel.classList.remove("show");
  }

  // Reproductor de Video Simulado / Enlace Real
  videoMockOverlay.addEventListener("click", () => {
    // Si hay un video configurado, reproducirlo, si no, dar feedback emotivo e iniciar música
    if (tributeVideo.src && !tributeVideo.src.endsWith("/")) {
      videoMockOverlay.style.opacity = "0";
      setTimeout(() => {
        videoMockOverlay.classList.add("hide");
        tributeVideo.classList.remove("hide");
        tributeVideo.play().catch(err => console.log("Permiso de autoplay denegado: ", err));
      }, 300);
    } else {
      // Si está vacío, iniciar música generativa ambiental y mostrar mensaje
      startGenerativeAudio();
      triggerCelebrationConfetti(35);
      
      // Mostrar alerta instructiva elegante
      const originalText = document.querySelector(".mock-video-text").textContent;
      document.querySelector(".mock-video-text").textContent = "🎵 Reproduciendo Música del Recuerdo 🎵";
      document.querySelector(".mock-video-subtext").textContent = "Usa el ícono de engranaje para subir tu video de despedida";
      
      setTimeout(() => {
        document.querySelector(".mock-video-text").textContent = originalText;
        document.querySelector(".mock-video-subtext").textContent = "Click para iniciar el viaje y la música";
      }, 5000);
    }
  });

  // Configurar Inyector de URLs y Videos Locales
  const btnToggleInjector = document.getElementById("btn-toggle-injector");
  const injectorPopover = document.getElementById("injector-popover");
  const btnApplyVideo = document.getElementById("btn-apply-video");
  const videoLinkInput = document.getElementById("video-link-input");
  const videoFileInput = document.getElementById("video-file-input");
  
  btnToggleInjector.addEventListener("click", (e) => {
    e.stopPropagation();
    injectorPopover.classList.toggle("hide");
  });

  document.addEventListener("click", (e) => {
    if (!injectorPopover.contains(e.target) && e.target !== btnToggleInjector) {
      injectorPopover.classList.add("hide");
    }
  });

  btnApplyVideo.addEventListener("click", () => {
    const url = videoLinkInput.value.trim();
    const area = document.getElementById("video-content-area");
    
    if (url) {
      applyVideoSource(url);
    } else if (videoFileInput.files.length > 0) {
      const file = videoFileInput.files[0];
      const fileURL = URL.createObjectURL(file);
      applyVideoSource(fileURL);
    }
    
    injectorPopover.classList.add("hide");
  });

  function applyVideoSource(src) {
    // Si es enlace de youtube, incrustar iframe
    if (src.includes("youtube.com") || src.includes("youtu.be") || src.includes("vimeo.com")) {
      let embedSrc = src;
      if (src.includes("youtube.com") || src.includes("youtu.be")) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = src.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;
        embedSrc = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : src;
      } else if (src.includes("vimeo.com")) {
        const regExp = /vimeo\.com\/(\d+)/;
        const match = src.match(regExp);
        const videoId = match ? match[1] : null;
        embedSrc = videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : src;
      }
      
      // Reemplazar contenido por iframe
      videoMockOverlay.classList.add("hide");
      tributeVideo.classList.add("hide");
      
      // Eliminar iframe existente si hay
      const oldIframe = document.querySelector(".tribute-iframe");
      if (oldIframe) oldIframe.remove();
      
      const iframe = document.createElement("iframe");
      iframe.classList.add("tribute-iframe");
      iframe.src = embedSrc;
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;
      
      document.getElementById("video-content-area").appendChild(iframe);
      startGenerativeAudio(); // Iniciar música también
    } else {
      // Eliminar iframe si existía
      const oldIframe = document.querySelector(".tribute-iframe");
      if (oldIframe) oldIframe.remove();
      
      tributeVideo.src = src;
      tributeVideo.load();
      videoMockOverlay.classList.add("hide");
      tributeVideo.classList.remove("hide");
      tributeVideo.play().catch(e => console.log(e));
      startGenerativeAudio();
    }
    triggerCelebrationConfetti(40);
  }
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
function initGallery() {
  const grid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const uploader = document.getElementById("gallery-image-upload");
  
  if (!grid) return;
  
  // Renderizar imágenes iniciales
  renderGalleryItems(INITIAL_PHOTOS);

  function renderGalleryItems(photosList) {
    // Limpiar grid
    grid.innerHTML = "";
    
    photosList.forEach(photo => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      
      const imgUrl = photo.imgData || createElegantPlaceholderSVG(photo.svgColor1, photo.svgColor2, photo.text);
      
      item.innerHTML = `
        <img src="${imgUrl}" alt="${photo.title}">
        <div class="gallery-caption">
          <h4>${photo.title}</h4>
          <p>${photo.desc}</p>
        </div>
      `;
      
      item.addEventListener("click", () => {
        openLightbox(imgUrl, photo.title, photo.desc);
      });
      
      grid.appendChild(item);
    });
  }

  function openLightbox(src, title, desc) {
    lightboxImg.src = src;
    lightboxCaption.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;
    lightbox.classList.add("show");
  }

  function closeLightbox() {
    lightbox.classList.remove("show");
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  // Soporte para subir fotos dinámicamente en memoria de navegador (localStorage)
  uploader.addEventListener("change", (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    let loadedPhotos = JSON.parse(localStorage.getItem("quenia_gallery_uploads")) || [];
    
    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = function(evt) {
        const newPhoto = {
          id: Date.now() + index,
          title: file.name.split(".")[0] || "Recuerdo Especial",
          desc: "Foto subida por un compañero de Barraza Y Cia.",
          imgData: evt.target.result
        };
        
        loadedPhotos.push(newPhoto);
        localStorage.setItem("quenia_gallery_uploads", JSON.stringify(loadedPhotos));
        
        // Volver a renderizar combinando iniciales + subidos
        combineAndRenderGallery();
        triggerCelebrationConfetti(15);
      };
      reader.readAsDataURL(file);
    });
  });

  function combineAndRenderGallery() {
    const uploads = JSON.parse(localStorage.getItem("quenia_gallery_uploads")) || [];
    renderGalleryItems([...INITIAL_PHOTOS, ...uploads]);
  }
  
  // Cargar si ya hay subidas previas
  combineAndRenderGallery();
}

/* ==========================================================================
   LIBRO DE FIRMAS (GUESTBOOK) CON LOCALSTORAGE
   ========================================================================== */
function initGuestbook() {
  const form = document.getElementById("guestbook-form");
  const wall = document.getElementById("guestbook-wall");
  if (!form) return;
  
  // Obtener mensajes de localStorage o usar presets
  let stored = JSON.parse(localStorage.getItem("quenia_guestbook_entries"));
  if (!stored) {
    stored = PRESET_MESSAGES;
    localStorage.setItem("quenia_guestbook_entries", JSON.stringify(stored));
  }
  
  renderMessages(stored);
  
  form.addEventListener("submit", (e) => {
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
    
    // Guardar en array y actualizar localStorage
    let currentEntries = JSON.parse(localStorage.getItem("quenia_guestbook_entries")) || [];
    currentEntries.unshift(newEntry); // Agregar al inicio
    localStorage.setItem("quenia_guestbook_entries", JSON.stringify(currentEntries));
    
    // Limpiar formulario
    form.reset();
    
    // Renderizar de nuevo con animación
    renderMessages(currentEntries, true);
    
    // Efecto de lluvia de confeti
    triggerCelebrationConfetti(45);
  });
  
  function renderMessages(entries, isUpdate = false) {
    wall.innerHTML = "";
    
    entries.forEach((entry, idx) => {
      const card = document.createElement("article");
      card.className = "message-card";
      
      // Aplicar una animación de entrada solo si es el mensaje recién ingresado
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
        // Trigger reflow y animar entrada
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
   MOTOR DE AUDIO GENERATIVO EMOTIVO (WEB AUDIO API)
   ========================================================================== */
let audioCtx = null;
let delayNode = null;
let feedbackGain = null;
let masterGain = null;
let isAudioPlaying = false;
let musicScheduler = null;

// Lista de frecuencias (Piano virtual) en la escala de La Menor / Do Mayor
// A2, C3, E3, A3, B3, C4, E4, G4, A4, B4, C5, E5
const NOTES = {
  'A2': 110.00, 'C3': 130.81, 'E3': 164.81,
  'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
  'C4': 261.63, 'D4': 293.66, 'E4': 329.63,
  'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
  'C5': 523.25, 'E5': 659.25
};

// Acordes de fondo (pads): Am, F, C, G
const CHORDS = [
  ['A2', 'E3', 'A3', 'C4'], // Am
  ['F2', 'C3', 'F3', 'A3'], // F (F2 = 87.31)
  ['C3', 'G3', 'C4', 'E4'], // C
  ['G2', 'D3', 'G3', 'B3']  // G (G2 = 98.00, D3 = 146.83)
];

const CHORD_FREQS = [
  [87.31, 130.81, 174.61, 220.00], // F
  [110.00, 164.81, 220.00, 261.63], // Am
  [130.81, 196.00, 261.63, 329.63], // C
  [98.00, 146.83, 196.00, 246.94]   // G
];

function initAudioWidget() {
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener("click", () => {
    if (!audioCtx) {
      initAudioEngine();
    }
    
    if (isAudioPlaying) {
      stopGenerativeAudio();
    } else {
      startGenerativeAudio();
    }
  });
}

function initAudioEngine() {
  // Crear contexto de audio soportado en múltiples navegadores
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();
  
  // Nodo de Ganancia Principal
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.45; // Volumen inicial agradable
  
  // Nodo de Eco/Delay Emotivo
  delayNode = audioCtx.createDelay(1.5);
  delayNode.delayTime.value = 0.6; // Retraso de 600ms
  
  // Nodo de retroalimentación de eco
  feedbackGain = audioCtx.createGain();
  feedbackGain.gain.value = 0.45; // Retroalimenta el 45% del eco
  
  // Crear un filtro de paso bajo para suavizar el eco y hacerlo sonar cálido y distante
  const delayFilter = audioCtx.createBiquadFilter();
  delayFilter.type = "lowpass";
  delayFilter.frequency.value = 1000;
  
  // Conectar la retroalimentación del delay
  delayNode.connect(delayFilter);
  delayFilter.connect(feedbackGain);
  feedbackGain.connect(delayNode);
  
  // Conectar todo al volumen principal
  delayNode.connect(masterGain);
  masterGain.connect(audioCtx.destination);
}

function startGenerativeAudio() {
  if (!audioCtx) initAudioEngine();
  
  // Reanudar contexto si el navegador lo suspendió (Autoplay policy)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  isAudioPlaying = true;
  updateAudioUI(true);
  
  // Programar música en bucle
  let chordIndex = 0;
  let beatCounter = 0;
  
  // Velocidad de la música: aprox 50 BPM (tempo lento y nostálgico)
  const stepDuration = 0.95; // Segundos por paso
  
  function playTick() {
    if (!isAudioPlaying) return;
    
    const now = audioCtx.currentTime;
    
    // Cada 8 pasos (dos compases), cambiamos de acorde ambiental
    if (beatCounter % 8 === 0) {
      const currentChord = CHORD_FREQS[chordIndex];
      // Tocar acordes con notas muy suaves y largas (efecto Pad)
      currentChord.forEach((freq, idx) => {
        // Ligero arpegio en la entrada del acorde
        playSynthNote(freq, 6.0, now + idx * 0.12, 0.08, 'sine');
      });
      chordIndex = (chordIndex + 1) % CHORD_FREQS.length;
    }
    
    // Tocar melodías de piano aleatorias pero dentro de la escala sobre el acorde
    if (Math.random() > 0.35 && beatCounter % 2 === 0) {
      // Elegir una nota de piano bonita en octavas medias/altas
      const melodyNotes = [NOTES.C4, NOTES.E4, NOTES.G4, NOTES.A4, NOTES.C5, NOTES.E5];
      const randomNote = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
      
      // Tocar un piano suave (combinando triángulo con decaimiento rápido)
      playSynthNote(randomNote, 2.5, now, 0.16, 'triangle');
      
      // Ocasionalmente tocar una respuesta en la octava superior un poco después
      if (Math.random() > 0.6) {
        const highNotes = [NOTES.G4, NOTES.A4, NOTES.B4, NOTES.C5, NOTES.E5];
        const randomHighNote = highNotes[Math.floor(Math.random() * highNotes.length)];
        playSynthNote(randomHighNote, 2.0, now + 0.45, 0.1, 'sine');
      }
    }
    
    beatCounter++;
    
    // Programar el siguiente latido
    musicScheduler = setTimeout(playTick, stepDuration * 1000);
  }
  
  playTick();
}

function stopGenerativeAudio() {
  isAudioPlaying = false;
  clearTimeout(musicScheduler);
  updateAudioUI(false);
  
  // Atenuar volumen suavemente antes de pausar del todo para evitar clics bruscos
  if (masterGain) {
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);
    
    setTimeout(() => {
      if (!isAudioPlaying && audioCtx) {
        audioCtx.suspend();
      }
    }, 350);
  }
}

function playSynthNote(frequency, duration, startTime, volume = 0.15, oscType = 'triangle') {
  if (!audioCtx || !isAudioPlaying) return;
  
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  const filterNode = audioCtx.createBiquadFilter();
  
  osc.type = oscType;
  osc.frequency.setValueAtTime(frequency, startTime);
  
  // Filtro de paso bajo para darle una textura analógica, cálida y redonda de piano antiguo
  filterNode.type = "lowpass";
  filterNode.frequency.setValueAtTime(oscType === 'sine' ? 800 : 1500, startTime);
  filterNode.frequency.exponentialRampToValueAtTime(300, startTime + duration * 0.8);
  
  // Envolvente de Ganancia (Envelope ADSR básico)
  gainNode.gain.setValueAtTime(0, startTime);
  // Ataque rápido pero no tanto para evitar clics (0.04s)
  gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.04);
  // Decaimiento y Sostenido
  gainNode.gain.setValueAtTime(volume, startTime + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  
  // Conexiones
  osc.connect(filterNode);
  filterNode.connect(gainNode);
  
  // Conectar al canal principal y también enviar un porcentaje al delay
  gainNode.connect(masterGain);
  
  if (delayNode) {
    const sendGain = audioCtx.createGain();
    sendGain.gain.value = 0.55; // Nivel de envío a reverberación/eco
    gainNode.connect(sendGain);
    sendGain.connect(delayNode);
  }
  
  osc.start(startTime);
  osc.stop(startTime + duration + 0.2);
}

function updateAudioUI(isPlaying) {
  const btn = document.getElementById("audio-toggle-btn");
  const playIcon = document.getElementById("icon-play");
  const pauseIcon = document.getElementById("icon-pause");
  const eq = document.getElementById("eq-container");
  
  if (isPlaying) {
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
    eq.classList.add("playing");
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.45, audioCtx.currentTime + 0.5);
    }
  } else {
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
    eq.classList.remove("playing");
  }
}
