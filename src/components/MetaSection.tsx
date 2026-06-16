import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback, ExpandableText, SocialActions, FONTS } from '../lib/utils';

interface CarouselCard {
  image: string;
  fallbackImage: string;
  domain: string;
  title: string;
  ctaText: string;
}

interface MetaAd {
  id: string;
  pageName: string;
  pageLogo: string;
  mainText: string;
  type: 'single-video' | 'carousel' | 'single-image';
  videoUrl?: string;
  videoPoster?: string;
  imageUrl?: string;
  imageFallback?: string;
  ctaDomain: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtnText: string;
  carouselCards?: CarouselCard[];
}

const ADS_DATABASE: MetaAd[] = [
  {
    id: "mercedes-benz",
    pageName: "Mercedes-Benz Eurostern",
    pageLogo: "https://scontent.fgdl1-4.fna.fbcdn.net/v/t39.35426-6/686937757_932455416463158_3639699404661957555_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=109&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=g1TEQKdcSUAQ7kNvwFHbBD9&_nc_oc=Adqt5_hgYfbb-kSXZrDdpA1KKkk87mNJHZbRWFEQnr-iYQpmYy03tVL3L79A6HEQF8U&_nc_zt=14&_nc_ht=scontent.fgdl1-4.fna&_nc_gid=Mb6uxD19_Wfvo8VxE4hNoA&_nc_ss=7b2a8&oh=00_Af9BBPK3pQuEZ0-fBVKyIH9TF_fIZeSdu7UpsifAKVhhRw&oe=6A27AA25",
    mainText: "Los sistemas de asistencia te respaldan para hacer de cada trayecto una certeza. Adquiere GLS 580 4MATIC MH 2026 con bono exclusivo.",
    type: "single-video",
    videoUrl: "https://grupoweprom.com/mktgdigital/Mercedes.mp4",
    ctaDomain: "API.WHATSAPP.COM",
    ctaTitle: "Adquiere GLS 2026",
    ctaDesc: "Con beneficios exclusivos",
    ctaBtnText: "Enviar mensaje"
  },
  {
    id: "andrea-aragon",
    pageName: "Studio Andrea Aragón Maquillaje Y Peinado Novias",
    pageLogo: "https://scontent.fgdl1-3.fna.fbcdn.net/v/t39.35426-6/569215694_785230714354745_2652805572567146935_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=107&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=VxiFgeGMgaAQ7kNvw-Iazi&_nc_oc=Ado6aRPYTev_b6tCig4H4oZBj7Poq1FB83aUKhpFQQztdywxCjLfrNcJ5JsunpaNWZo&_nc_zt=14&_nc_ht=scontent.fgdl1-3.fna&_nc_gid=XSt0fDCaOkGZLRjISeGSaA&_nc_ss=7b2a8&oh=00_Af_x9CirHoqtcAHjT1KPeWgkPNCLQaaeJYUYtT2Xj1h0ig&oe=6A27A048",
    mainText: "Sabemos que un cambio de color es una decisión importante. Por eso, en nuestro estudio, cada transformación comienza con una asesoría experta para crear el diseño que respete la salud de tu cabello y refleje tu verdadera esencia.\n\nNuestros servicios de colorimetría incluyen:\n• Diseño de Color (Master, Senior & Semisenior)\n• Tinte de Raíz y Color Completo\n• Extracciones de Color Profesionales\n• ¡Y mucho más!\n\n📍Te esperamos en Desierto de los Leones 52, San Ángel. Agenda tu cita. ✨",
    type: "carousel",
    carouselCards: [
      {
        image: "https://grupoweprom.com/mktgdigital/AA1.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "El color perfecto",
        ctaText: "Enviar mensaje"
      },
      {
        image: "https://grupoweprom.com/mktgdigital/AA2.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "Diseño de color",
        ctaText: "Enviar mensaje"
      },
      {
        image: "https://grupoweprom.com/mktgdigital/AA3.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "Babylights y Balayage",
        ctaText: "Enviar mensaje"
      },
      {
        image: "https://grupoweprom.com/mktgdigital/AA4.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "Expertas en colorimetría",
        ctaText: "Enviar mensaje"
      }
    ],
    ctaDomain: "",
    ctaTitle: "",
    ctaDesc: "",
    ctaBtnText: ""
  },
  {
    id: "ortopedia-justo-sierra",
    pageName: "Ortopedia Justo Sierra",
    pageLogo: "https://scontent.fgdl1-4.fna.fbcdn.net/v/t39.35426-6/697045892_2598343853960156_4298980226771185265_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=110&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=---mYyBTn8UQ7kNvwGm8B-G&_nc_oc=Ado_TJgWkhxcURnNxeT1Z3LH8r5_K7NYiEpOKY09s5FCqcE6P0ry9gdydYkPfqNaq-I&_nc_zt=14&_nc_ht=scontent.fgdl1-4.fna&_nc_gid=XveLqqErr2-kkRd1PJt20A&_nc_ss=7b2a8&oh=00_Af-OZ0SfgSsNMKRVxepgS1Z4i28sgDIlWpHSdrSkbZMFLg&oe=6A27AFEC",
    mainText: "Si tienes un problem grave en la rodilla, no necesitas a un médico que hoy opere una mano y mañana un pie; necesitas a alguien que dedique el 100% de su vida a reconstruir rodillas.\n\nEsa es la diferencia de nuestro grupo médico en Guadalajara. Somos un equipo de 5 traumatólogos con subespecialidades específicas. Nuestro modelo es simple pero poderoso: el experto en columna de la columna, el de hombro ve el hombro.\n\nEntrar a un quirófano es un paso importante. Antes de tomar cualquier decisión, permite que el experto exacto revise tu caso.\n✅ Diagnósticos respaldados por certificaciones internacionales. \n✅ Un equipo completo analizando los casos más complejos.",
    type: "single-video",
    videoUrl: "https://grupoweprom.com/mktgdigital/Justo Sierra.mp4",
    ctaDomain: "ORTOPEDIAJUSTOSIERRA.MX",
    ctaTitle: "Certeza absoluta",
    ctaDesc: "Certeza absoluta",
    ctaBtnText: "Ver detalles"
  },
  {
    id: "caja-popular-tamazula",
    pageName: "Caja Popular Tamazula",
    pageLogo: "https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.35426-6/641056979_901553679134968_4967818985228303169_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=CkHUcXrmXcMQ7kNvwHJ7SqY&_nc_oc=AdqvjbfveFLQ17fkNvuWE7Vf8A6dW4D0BI7T8I5bV3aRmHC81Hhw3TxEOQOR585DlzoHOWtQ5jCw9zI_fLC8V0S_&_nc_zt=14&_nc_ht=scontent.fgdl10-1.fna&_nc_gid=HA0fki1PWCFifoBNqrOrng&_nc_ss=7b2a8&oh=00_Af_11yNOacQM6M5W4u72ruRmOUAn5jBYrIBBAxvSCKhVpQ&oe=6A2CB385",
    mainText: "Haz que tu esfuerzo rinda por dos. Al ahorrar con nosotros, no solo guardas tu guardadito, también le abres la puerta a tus hijos para ganar BECAS escolares y vales para sus útiles. 🎒 \n\nTu familia merece este respaldo. \n\nAbre tu cuenta hoy dando clic abajo. 👇",
    type: "carousel",
    ctaDomain: "API.WHATSAPP.COM",
    ctaTitle: "Abre tu cuenta",
    ctaDesc: "Banking",
    ctaBtnText: "Enviar Mensaje",
    carouselCards: [
      {
        image: "https://grupoweprom.com/mktgdigital/CPT1.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "Tu ahorro te da BECAS 🎓",
        ctaText: "Enviar Mensaje"
      },
      {
        image: "https://grupoweprom.com/mktgdigital/CPT2.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "Vales médicos GRATIS 🩺",
        ctaText: "Enviar Mensaje"
      },
      {
        image: "https://grupoweprom.com/mktgdigital/CPT3.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "$600 cuidan a tu familia",
        ctaText: "Enviar Mensaje"
      },
      {
        image: "https://grupoweprom.com/mktgdigital/CPT4.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        domain: "API.WHATSAPP.COM",
        title: "Invierte y gana beneficios",
        ctaText: "Enviar Mensaje"
      }
    ]
  },
  {
    id: "mayork-mx",
    pageName: "MayorK",
    pageLogo: "https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.35426-6/713423785_994570676705058_5843368131829230779_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=dzhd3DMNLFIQ7kNvwEUP4V5&_nc_oc=AdqcCX1isMe2ItY1lhTLwy7W3rQVzqwOULtie1sHJfBmgxl2jt__0bLDBToj5VINlQPjSMq9tM3AIKWMeXgEJwgL&_nc_zt=14&_nc_ht=scontent.fgdl10-1.fna&_nc_gid=wdAJUitANk0cY4-Roeps5Q&_nc_ss=7b2a8&oh=00_Af8JTXXSptJ7aNRIgK6Aql0swsjq1d51GmDZie59RTRy6A&oe=6A2CD2BC",
    mainText: "Dos modelos diseñados para ofrecer comodidad, estilo y una mejor presentación para tu equipo de trabajo. ✨ \n✔ Polo Fit: flexible, moderna y cómoda \n✔ Polo Waffle: textura premium y apariencia sofisticada \nAprovecha el 10% OFF durante todo junio.",
    type: "single-image",
    imageUrl: "https://grupoweprom.com/mktgdigital/mayork.jpg",
    imageFallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    ctaDomain: "FACEBOOK.COM",
    ctaTitle: "¡Cotizar mayoreo!",
    ctaDesc: "Clothing",
    ctaBtnText: "Enviar mensaje"
  }
];

interface AdHeaderProps {
  ad: MetaAd;
}

interface AdFooterProps {
  ad: MetaAd;
  isWhatsApp: boolean;
}

function AdHeader({ ad }: AdHeaderProps) {
  return (
    <div className="p-4 flex justify-between items-start">
      <div className="flex items-center space-x-3 min-w-0">
        <div className="relative w-10 h-10 rounded-full border border-zinc-700/50 overflow-hidden bg-zinc-800 flex items-center justify-center flex-shrink-0 shadow-sm">
          <ImageWithFallback
            src={ad.pageLogo}
            fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName)}&background=1c1d1e&color=fff`}
            alt={ad.pageName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex flex-col justify-center">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-[15px] text-[#e4e6eb] truncate leading-tight">
              {ad.pageName}
            </span>
            <svg className="w-3.5 h-3.5 text-[#0866ff] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span className="text-[13px] text-[#b0b3b8] font-normal leading-none text-left flex items-center">
            Publicidad <span className="mx-1.5 text-[10px]">•</span>
          </span>
        </div>
      </div>
      <button className="text-[#b0b3b8] hover:bg-[#3a3b3c] p-2 rounded-full flex items-center justify-center transition flex-shrink-0">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
    </div>
  );
}

function AdFooter({ ad, isWhatsApp }: AdFooterProps) {
  return (
    <div className="bg-[#2f3031] px-4 py-3 flex justify-between items-center hover:bg-[#3a3b3c] transition group">
      <div className="flex-1 min-w-0 pr-4 text-left">
        <span className="block text-[11px] text-[#b0b3b8] uppercase font-semibold tracking-wider truncate mb-0.5">{ad.ctaDomain}</span>
        <span className="block text-[16px] font-bold text-[#e4e6eb] truncate leading-tight group-hover:underline">{ad.ctaTitle}</span>
        <span className="block text-[14px] text-[#b0b3b8] truncate mt-0.5">{ad.ctaDesc}</span>
      </div>
      <div className="flex-shrink-0">
        {isWhatsApp ? (
          <button className="bg-[#25D366] hover:bg-[#1fa951] text-white font-bold text-[14px] py-2 px-5 rounded-lg transition-colors flex items-center space-x-2 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.012 2.002c-5.51 0-9.99 4.48-9.99 9.99 0 1.763.458 3.483 1.332 5.006L2.013 22l5.12-1.341a9.957 9.957 0 004.879 1.343c5.51 0 9.99-4.48 9.99-9.99a9.986 9.986 0 00-10-9.99zm5.06 14.1c-.22.61-1.28 1.13-1.78 1.18-.48.05-.98.07-3.12-.76-2.73-1.06-4.47-3.85-4.61-4.04-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.29.23-.23.61-.35.97-.35.12 0 .23 0 .33.01.29.01.44.02.63.48.24.58.82 2 .9 2.15.08.15.13.33.03.53-.1.2-.21.33-.37.52-.16.19-.34.42-.48.56-.16.16-.33.34-.14.67.19.32.85 1.41 1.83 2.28 1.26 1.13 2.32 1.48 2.65 1.65.3.15.48.13.66-.08.19-.23.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.16.55.24.63.38.08.14.08.82-.14 1.43z"/>
            </svg>
            <span>{ad.ctaBtnText}</span>
          </button>
        ) : (
          <button className="bg-[#3a3b3c] hover:bg-[#4e4f50] text-[#e4e6eb] font-bold text-[14px] py-2 px-5 rounded-lg transition-colors flex items-center shadow-sm">
            <span>{ad.ctaBtnText || 'Ver detalles'}</span>
          </button>
        )}
      </div>
    </div>
  );
}

interface SingleMediaAdProps {
  ad: MetaAd;
}

function SingleMediaAd({ ad }: SingleMediaAdProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(currentProgress) ? 0 : currentProgress);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const isWhatsApp = ad.ctaDomain?.toLowerCase().includes('whatsapp') || ad.ctaBtnText?.toLowerCase().includes('mensaje');

  return (
    <div className="w-[420px] max-w-[90vw] bg-[#242526]/95 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 self-start transition-all duration-300 relative">
      <AdHeader ad={ad} />
      <ExpandableText text={ad.mainText} />
      <div className="relative bg-black/50 group overflow-hidden border-y border-zinc-700/50 w-full flex items-center justify-center">
        {ad.videoUrl ? (
          <>
            <video ref={videoRef} className="w-full h-auto max-h-[550px] object-contain cursor-pointer block" playsInline loop muted={isMuted} onClick={togglePlay} preload="metadata">
              <source src={`${ad.videoUrl}#t=0.001`} type="video/mp4" />
            </video>
            {!isPlaying && (
              <button onClick={togglePlay} className="absolute w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center border border-white/20 transition transform hover:scale-105 z-10 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden relative">
                <div className="absolute h-full bg-[#0866ff] transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex items-center justify-between px-1">
                <button onClick={togglePlay} className="text-white hover:text-[#0866ff] transition">
                  {isPlaying ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
                </button>
                <button onClick={toggleMute} className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition backdrop-blur-sm border border-white/10">
                  {isMuted ? <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM4 9v6h4l5 5V4L8 9H4zM19 12c0 2.97-1.75-5.51-4.25 6.64l1.42 1.42C19.34 18.33 21 15.35 21 12s-1.66-6.33-4.83-8.06l-1.42 1.42C17.25 6.49 19 9.03 19 12z"/></svg> : <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L8 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-[240px] bg-[#18191a]" />
        )}
      </div>
      <AdFooter ad={ad} isWhatsApp={isWhatsApp} />
      <SocialActions />
    </div>
  );
}

interface SingleImageAdProps {
  ad: MetaAd;
}

function SingleImageAd({ ad }: SingleImageAdProps) {
  const isWhatsApp = ad.ctaDomain?.toLowerCase().includes('whatsapp') || ad.ctaBtnText?.toLowerCase().includes('mensaje');

  return (
    <div className="w-[420px] max-w-[90vw] bg-[#242526]/95 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 self-start transition-all duration-300 relative">
      <AdHeader ad={ad} />
      <ExpandableText text={ad.mainText} />
      <div className="relative bg-black/50 overflow-hidden border-y border-zinc-700/50 w-full flex items-center justify-center">
        {ad.imageUrl ? (
          <ImageWithFallback src={ad.imageUrl} fallback={ad.imageFallback || ''} alt={ad.ctaTitle} className="w-full h-auto max-h-[550px] object-contain block" />
        ) : (
          <div className="w-full h-[240px] bg-[#18191a]" />
        )}
      </div>
      <AdFooter ad={ad} isWhatsApp={isWhatsApp} />
      <SocialActions />
    </div>
  );
}

interface CarouselAdProps {
  ad: MetaAd;
}

function CarouselAd({ ad }: CarouselAdProps) {
  const cards = ad.carouselCards || [];
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCards = 1.3;
  const maxIndex = Math.max(0, cards.length - 1);

  return (
    <div className="w-[420px] max-w-[90vw] bg-[#242526]/95 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 self-start transition-all duration-300 relative">
      <AdHeader ad={ad} />
      <ExpandableText text={ad.mainText} />
      <div className="relative border-y border-zinc-700/50 bg-black/30 pt-3 pb-4 px-3 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${scrollIndex * (100 / visibleCards)}%)` }}>
          {cards.map((card, idx) => (
            <div key={idx} className="w-[270px] flex-shrink-0 mr-3 bg-[#242526]/80 backdrop-blur-sm rounded-xl border border-zinc-700/50 overflow-hidden shadow-md flex flex-col group">
              <div className="aspect-square w-full bg-zinc-900 overflow-hidden relative">
                <ImageWithFallback src={card.image} fallback={card.fallbackImage} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between bg-[#242526]/80 border-t border-zinc-700/50">
                <div className="min-w-0 space-y-1 text-left">
                  <span className="block text-[10px] text-[#b0b3b8] font-bold tracking-wider uppercase truncate">{card.domain}</span>
                  <span className="block text-[15px] font-bold text-[#e4e6eb] truncate leading-snug group-hover:underline">{card.title}</span>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-[#25D366] hover:bg-[#1fa951] text-white font-bold text-[14px] py-2 px-3 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2.002c-5.51 0-9.99 4.48-9.99 9.99 0 1.763.458 3.483 1.332 5.006L2.013 22l5.12-1.341a9.957 9.957 0 004.879 1.343c5.51 0 9.99-4.48 9.99-9.99a9.986 9.986 0 00-10-9.99zm5.06 14.1c-.22.61-1.28 1.13-1.78 1.18-.48.05-.98.07-3.12-.76-2.73-1.06-4.47-3.85-4.61-4.04-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.29.23-.23.61-.35.97-.35.12 0 .23 0 .33.01.29.01.44.02.63.48.24.58.82 2 .9 2.15.08.15.13.33.03.53-.1.2-.21.33-.37.52-.16.19-.34.42-.48.56-.16.16-.33.34-.14.67.19.32.85 1.41 1.83 2.28 1.26 1.13 2.32 1.48 2.65 1.65.3.15.48.13.66-.08.19-.23.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.16.55.24.63.38.08.14.08.82-.14 1.43z"/></svg>
                    <span>{card.ctaText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {scrollIndex > 0 && (
          <button onClick={() => setScrollIndex((prev) => prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#242526] border border-zinc-700 shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#e4e6eb] hover:bg-[#3a3b3c] transition-colors z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
        )}
        {scrollIndex < maxIndex && (
          <button onClick={() => setScrollIndex((prev) => prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#242526] border border-zinc-700 shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#e4e6eb] hover:bg-[#3a3b3c] transition-colors z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        )}
      </div>
      <SocialActions />
    </div>
  );
}

export default function MetaSection() {
  return (
    <section id="redes-sociales" className="relative min-h-screen bg-[#07070800] flex flex-col justify-between py-12 md:py-20 overflow-x-hidden border-t border-zinc-900/40">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 45s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,102,255,0.12),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(140,82,255,0.08),transparent_40%)] pointer-events-none" />

      {/* Contenedor Superior: Texto alineado a la izquierda */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-6 mb-10 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
          Publicidad en <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0866ff] to-[#00c6ff]">Redes Sociales</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          Llega a quien sí te va a comprar. Campañas optimizadas para generar resultados de manera <strong className="text-white font-medium">precisa y escalable</strong>.
        </p>
        <div className="flex items-center justify-left flex-wrap gap-4 text-zinc-500">
            <svg className="w-6 h-6 hover:text-[#0866ff] transition-colors" fill="currentColor" viewBox="0 0 532.8 529.49"><path d="M308.11,529.49l-.06-186.13h61.67l12.23-76.9h-73.9v-54.17c.9-8.2,2.89-16.36,8-22.96,15.87-20.53,46.36-12.69,68.9-14.24v-65.91c-40.8-5.11-86.46-12.42-122.2,12.87-26.35,18.65-36.83,49.35-38.11,80.73-.86,21.01.68,42.62.02,63.69h-67.41v76.9h67.41l-.06,186.11C87.33,507.67-10.11,383.98.84,245.41,11.79,106.84,127.44-.02,266.44,0c139,.02,254.62,106.92,265.53,245.49,10.91,138.57-86.57,262.24-223.86,284Z"/></svg>
            {/* WhatsApp */}
            <svg className="w-6 h-6 hover:text-[#25D366] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 535.06 538.99">
              <path d="M0,538.99l46.04-139.51C-44.8,245.96,38.67,45.92,213.18,6.67c193.53-43.52,363.71,132.82,312.74,324.74-43.57,164.06-232.38,244.14-381.41,161.99L0,538.99ZM68,471.99l82.51-25.89c134.74,87.45,316.14,6.69,338.32-152.77C511.47,130.55,352.54,1.39,197.48,56.97,60.94,105.92,9.56,273.47,93.99,391.54l-25.99,80.45Z"/>
              <path d="M182.8,134.21c3.56-.18,13.98.44,17.45,1.02,7.03,1.18,8.95,5.64,11.5,11.5,7.4,16.98,12.03,36.24,19.75,53.24,4.02,17.84-23.58,30.03-23.57,40.52,0,6.48,20.35,34.33,25.54,40.51,13.98,16.62,33.51,32.17,52.85,42.15,5,2.58,16.91,8.93,21.92,7.59,6.24-1.67,23.28-25.58,28.68-31.32,5.18-4.3,10.07-1.47,15.42.71,12.71,5.17,39.69,19.36,50.97,27.03,7.35,4.99,5.02,15.16,3.37,23.04-3.58,17.08-11.86,25.95-26.68,34.32-20.41,11.53-38.61,12.31-60.78,5.75-61.01-18.06-104.6-51.53-141.05-102.95-23.02-32.48-47.11-71.11-33.9-112.53,4.66-14.62,21.86-39.72,38.53-40.56Z"/>
            </svg>
            {/* LinkedIn */}
            <svg className="w-6 h-6 hover:text-[#0A66C2] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 1280 1280">
              <path d="M1158,0c-.57,3.16,1.57,1.69,3.43,2.02,60.58,10.96,105.67,55.91,116.55,116.55.33,1.86-1.14,4,2.02,3.43v1036c-3.16-.57-1.69,1.57-2.02,3.43-10.94,60.51-55.99,105.69-116.55,116.55-1.86.33-4-1.14-3.43,2.02H122c.57-3.16-1.57-1.69-3.43-2.02-60.53-10.95-105.68-55.96-116.55-116.55-.33-1.86,1.14-4-2.02-3.43V122c3.16.57,1.69-1.57,2.02-3.43C12.91,57.89,57.97,12.98,118.57,2.02c1.86-.34,4,1.14,3.43-2.02h1036ZM403.98,291.49c0-62.58-50.73-113.31-113.31-113.31s-113.31,50.73-113.31,113.31,50.73,113.31,113.31,113.31,113.31-50.73,113.31-113.31ZM1102,1102l.05-408.55c-4.26-102.9-51.39-191.15-155.83-218.17-86.09-22.27-176.79-1.01-235.19,67.24-6.89,8.05-12.75,16.97-19.03,25.47v-82h-183v616h183l-.04-334.54c2.82-58.96,27.86-115.15,91.81-125.19,84.87-13.33,124.3,39.21,128.27,118.19l-.04,341.54h190ZM387,486h-191v616h191V486Z"/>
            </svg>
            {/* Threads */}
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 434.42 505.28">
              <path d="M212.32.25c95.1-4.12,181.06,42.59,214.97,133.44,1.52,4.06,7.16,19.62,7.13,22.78-.02,1.68-1.01,3.63-2.62,4.27-6.7.65-33.88,10.97-38.28,8.75-1.14-.57-1.58-1.89-2.05-2.97-3.68-8.38-5.72-19.1-9.77-28.23-33.65-75.94-112.93-102.17-191.53-91.18-66.64,9.32-113.88,48.33-133.14,112.86-22.86,76.6-19.56,199.17,42.48,257.51,56.81,53.42,177.65,58.88,236.03,6,42.76-38.73,51.35-106.85-1.54-140.49-1.8.11-2.56,1.26-3.22,2.74-2.18,4.87-3.29,13.98-5.24,19.76-19.32,57.37,57.79,84.36-119.5,79.46-62.98-4.99-104.88-72.44-67.92-127.89,26.39-39.59,77.41-43.6,120.95-42.13,7.88.27,17.48,2.89,25.05,1.13,3.69-2.89-2.52-17.81-4.41-21.78-17.34-36.42-72.54-40.65-101.66-17.29-5.76,4.62-8.9,13.33-16.87,9.82-3.85-1.7-24.78-15.98-28-18.98-5.18-4.82,1.18-9.74,4.84-13.87,34.55-39.1,97.67-46.72,142.53-21.5,36.42,20.47,49.25,59.32,53.08,98.92,8.05,4.65,16.66,8.41,24.43,13.57,67.77,45.04,73.31,133.28,23.45,194.5-58.32,71.61-179.37,81.3-259.94,45.99C10.4,436.71-12.89,292.58,5.82,184.75,25.33,72.38,97.25,5.23,212.32.25ZM240.35,259.22c-25.73.24-61.02,3.75-70.59,32.46-13.46,40.35,45.47,57.19,75.04,46.04,23.11-8.72,37.29-31.91,41.47-55.53.88-5,3.58-16.76-1.71-18.74-8.63-3.23-34.29-4.31-44.2-4.22Z"/>
            </svg>
            {/* Spotify */}
            <svg className="w-6 h-6 hover:text-[#1ED760] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 1359.42 1359.42">
              <path d="M1359.42,679.71c0,375.39-304.32,679.71-679.71,679.71S0,1055.11,0,679.71,304.32,0,679.71,0s679.71,304.32,679.71,679.71ZM537.75,360.03c-87.38,2.24-197.3,14.06-280.19,41.5-80.07,26.51-49.83,135.89,26.35,124.35,16.1-2.44,35.71-9.88,52.3-13.74,94.37-21.97,191.93-27.34,288.65-24.46,143.76,4.28,302.11,32.72,430.03,99.73,13.36,7,29.56,18.73,43.86,22.18,47.89,11.57,90.15-32.41,76.32-79.87-8.43-28.96-33.07-40.03-57.69-53.09-170.88-90.65-387.43-121.52-579.62-116.59ZM540.59,593.66c-73.82,1.85-148.21,11.5-219.44,30.53-12.08,3.23-28.81,6.92-39.38,13.17-30.83,18.24-34.65,62.37-7.34,85.7,28.1,24.01,59.96,6.66,90.89-.73,190.17-45.44,424.87-21.81,598.66,68.88,15.48,8.08,39.94,25.76,55.92,28.58,39.67,7.01,72.25-30.7,59.84-69.07-7.14-22.08-26.27-30.99-44.99-41.64-144.95-82.42-327.84-119.59-494.16-115.42ZM556.21,815.22c-74.19,1.61-166.08,11.28-237.76,30.67-54.81,14.83-37.8,88.04,11.64,84.07,11.48-.92,26.8-5.94,38.64-8.22,181.57-35.03,367.16-33.79,533.47,54.81,12.39,6.6,33.8,22.06,46.7,23.61,45.91,5.51,67.26-51.9,28.5-78.21-8.29-5.63-18.97-11.3-27.87-16.16-120.61-65.94-255.83-93.54-393.32-90.57Z"/>
            </svg>
            <svg className="w-6 h-6 hover:text-[#E1306C] transition-colors" fill="currentColor" viewBox="0 0 506.39 500">
              <path d="M372.32,0c6.82,1.93,14.1,2.01,21.03,3.47,72.54,15.19,107.24,70.88,110.96,142.04,3.18,60.99,2.35,129.15-.04,189.95-2.95,75.13-20.32,133.55-98.96,158.03l-32.99,6.51c-79.32,0-158.68,0-238,0-76.68-7.73-123.9-57.23-130.99-133.51-5.64-60.67-2.81-132.69-.97-193.95.99-32.9.42-60.4,13.49-91.51C35.86,33.42,83.31,3.85,134.32,0h238ZM168.11,44.29c-30.3,1.09-62.58,2.82-86.81,23.19-29.66,24.95-32.24,60.59-34.03,96.97,3.41,65.83-5.26,136.87,2.05,202.03,7.66,68.25,49.55,85.47,111.53,88.47,39.86,1.93,80.77,1.94,120.79,1.66,86.19-.58,168.33,8.37,176.66-101.13,1.86-24.39,1.46-51.52,1.63-76.16.31-42.89,1.71-92.67-1.58-134.87-5.94-76.22-43.58-96.18-114.58-99.42-56.49-2.57-119.01-2.79-175.66-.75Z"/>
              <path d="M382.89,250c0,71.56-58.01,129.57-129.57,129.57s-129.57-58.01-129.57-129.57,58.01-129.57,129.57-129.57,129.57,58.01,129.57,129.57ZM337.11,250.02c0-46.28-37.52-83.79-83.79-83.79s-83.79,37.52-83.79,83.79,37.52,83.79,83.79,83.79,83.79-37.52,83.79-83.79Z"/>
              <circle cx="387.76" cy="115.56" r="30.48"/>
            </svg>
            <svg className="w-6 h-6 hover:text-[#25D366] transition-colors" fill="currentColor" viewBox="0 0 535.06 538.99">
              <path d="M0,538.99l46.04-139.51C-44.8,245.96,38.67,45.92,213.18,6.67c193.53-43.52,363.71,132.82,312.74,324.74-43.57,164.06-232.38,244.14-381.41,161.99L0,538.99ZM68,471.99l82.51-25.89c134.74,87.45,316.14,6.69,338.32-152.77C511.47,130.55,352.54,1.39,197.48,56.97,60.94,105.92,9.56,273.47,93.99,391.54l-25.99,80.45Z"/></svg>
            <svg className="w-6 h-6 hover:text-[#106bff] transition-colors" fill="currentColor" viewBox="0 0 997.61 1037.17">
              <path d="M164.84,1037.17v-203.31C-159.21,547.76,25.68,42.95,448.51,2.38c338.84-32.51,630.68,273.05,528.34,611.12-77.6,256.35-358.42,392.33-612.98,326.77l-199.03,96.9ZM785.71,352.99l-212.69,116.47-122.09-121.31-244.7,260.46,219.99-121.35,119.67,128.64,239.82-262.91Z"/></svg>
            <svg className="w-6 h-6 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 509.05 587.81">
              <path d="M509.05,141v100c-49.69-.51-98.54-15.29-138.99-44l-.02,211.49c-6.18,119.68-117.9,204.7-235.41,172.43C10.31,546.78-40.73,394.49,36.64,291.09c40.07-53.55,106.55-82.16,173.41-73.09v102c-36.97-9.47-74.19,1.72-96.22,33.28-28.18,40.37-15.93,98.11,26.55,122.89,57.17,33.36,125.99-7.08,128.71-71.63l-.04-404.54h99.5l1.4,1.58c-1.05,7.52.1,16.94,1.39,24.63,8.81,52.29,50.61,95.57,100.94,110.06,4.33,1.25,16.53,4.74,20.26,4.74h16.5Z"/></svg>
            <svg className="w-6 h-6 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 576.08 523.59">
              <path d="M541.52,0l-191.6,222.1,226.17,301.49h-176.02l-140.82-183.04-161.3,183.04H11.52l206.16-237.47L0,0h181.15l126.87,166.37,8.84-7.61L455.1,0h86.41Z"/></svg>
          </div>
      </div>
      

      {/* Contenedor Inferior: Carrusel Infinito */}
      <div className="relative w-full overflow-hidden py-4 border-y border-zinc-900/0 bg-zinc-950/0">

        <div className="flex w-max animate-infinite-scroll py-2 gap-8">
          
          {ADS_DATABASE.map((ad, idx) => (
            <div 
              key={`${ad.id}-scroll1-${idx}`} 
              className="w-[420px] max-w-[85vw] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] cursor-default"
            >
              {ad.type === 'carousel' ? (
                <CarouselAd ad={ad} />
              ) : ad.type === 'single-image' ? (
                <SingleImageAd ad={ad} />
              ) : (
                <SingleMediaAd ad={ad} />
              )}
            </div>
          ))}

          {ADS_DATABASE.map((ad, idx) => (
            <div 
              key={`${ad.id}-scroll2-dup-${idx}`} 
              className="w-[420px] max-w-[85vw] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              {ad.type === 'carousel' ? (
                <CarouselAd ad={ad} />
              ) : ad.type === 'single-image' ? (
                <SingleImageAd ad={ad} />
              ) : (
                <SingleMediaAd ad={ad} />
              )}
            </div>
          ))}

        </div>
        
      </div>
      <div className="w-full flex justify-center mt-12 mb-4 relative z-10">
        <a 
          href="#contacto" 
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#0866ff] to-[#00c6ff] rounded-full shadow-[0_0_20px_rgba(8,102,255,0.3)] hover:shadow-[0_0_30px_rgba(8,102,255,0.5)] hover:scale-105 transition-all duration-300"
        >
          Cotizar campañas
        </a>
      </div>
    </section>
  );
}