import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback, ExpandableText, SocialActions, COLORS, FONTS } from '../lib/utils';
import { ADS_DATABASE, MetaAd } from '../data/metaData';

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
          <span className="text-[13px] text-[#b0b3b8] font-normal leading-none text-left">
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
    <div className="bg-[#2f3031] px-4 py-3 flex justify-between items-center hover:bg-[#3a3b3c] transition cursor-pointer group">
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
    <div className="w-[420px] max-w-[90vw] bg-[#242526]/90 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 self-start transition-all duration-300 relative">
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
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer relative">
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
    <div className="w-[420px] max-w-[90vw] bg-[#242526]/90 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 self-start transition-all duration-300 relative">
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
    <div className="w-[420px] max-w-[90vw] bg-[#242526]/90 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 self-start transition-all duration-300 relative">
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
  const [activeAdIndex, setActiveAdIndex] = useState(0);
  const totalAds = ADS_DATABASE.length;

  const handleNextAd = () => setActiveAdIndex((prev) => (prev < totalAds - 1 ? prev + 1 : 0));
  const handlePrevAd = () => setActiveAdIndex((prev) => (prev > 0 ? prev - 1 : totalAds - 1));

  return (
    <section id="redes-sociales" className="min-h-screen flex flex-col xl:flex-row items-stretch overflow-x-hidden">
      <div className="w-full xl:w-1/3 p-8 lg:p-14 flex flex-col justify-center min-h-[40vh] xl:min-h-screen">
        <div className="max-w-lg mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
            Publicidad en <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0866ff] to-[#00c6ff]">Redes Sociales</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-8">
            Llega a quien sí te va a comprar. Campañas optimizadas para generar resultados de manera <strong className="text-white font-medium">precisa y escalable</strong>.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-4 text-zinc-500">
            <svg className="w-6 h-6 hover:text-[#0866ff] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 532.8 529.49"><path d="M308.11,529.49l-.06-186.13h61.67l12.23-76.9h-73.9v-54.17c.9-8.2,2.89-16.36,8-22.96,15.87-20.53,46.36-12.69,68.9-14.24v-65.91c-40.8-5.11-86.46-12.42-122.2,12.87-26.35,18.65-36.83,49.35-38.11,80.73-.86,21.01.68,42.62.02,63.69h-67.41v76.9h67.41l-.06,186.11C87.33,507.67-10.11,383.98.84,245.41,11.79,106.84,127.44-.02,266.44,0c139,.02,254.62,106.92,265.53,245.49,10.91,138.57-86.57,262.24-223.86,284Z"/></svg>
            <svg className="w-6 h-6 hover:text-[#E1306C] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 506.39 500"><path d="M372.32,0c6.82,1.93,14.1,2.01,21.03,3.47,72.54,15.19,107.24,70.88,110.96,142.04,3.18,60.99,2.35,129.15-.04,189.95-2.95,75.13-20.32,133.55-98.96,158.03l-32.99,6.51c-79.32,0-158.68,0-238,0-76.68-7.73-123.9-57.23-130.99-133.51-5.64-60.67-2.81-132.69-.97-193.95.99-32.9.42-60.4,13.49-91.51C35.86,33.42,83.31,3.85,134.32,0h238ZM168.11,44.29c-30.3,1.09-62.58,2.82-86.81,23.19-29.66,24.95-32.24,60.59-34.03,96.97,3.41,65.83-5.26,136.87,2.05,202.03,7.66,68.25,49.55,85.47,111.53,88.47,39.86,1.93,80.77,1.94,120.79,1.66,86.19-.58,168.33,8.37,176.66-101.13,1.86-24.39,1.46-51.52,1.63-76.16.31-42.89,1.71-92.67-1.58-134.87-5.94-76.22-43.58-96.18-114.58-99.42-56.49-2.57-119.01-2.79-175.66-.75Z"/><path d="M382.89,250c0,71.56-58.01,129.57-129.57,129.57s-129.57-58.01-129.57-129.57,58.01-129.57,129.57-129.57,129.57,58.01,129.57,129.57ZM337.11,250.02c0-46.28-37.52-83.79-83.79-83.79s-83.79,37.52-83.79,83.79,37.52,83.79,83.79,83.79,83.79-37.52,83.79-83.79Z"/><circle cx="387.76" cy="115.56" r="30.48"/></svg>
            <svg className="w-6 h-6 hover:text-[#25D366] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 535.06 538.99"><path d="M0,538.99l46.04-139.51C-44.8,245.96,38.67,45.92,213.18,6.67c193.53-43.52,363.71,132.82,312.74,324.74-43.57,164.06-232.38,244.14-381.41,161.99L0,538.99ZM68,471.99l82.51-25.89c134.74,87.45,316.14,6.69,338.32-152.77C511.47,130.55,352.54,1.39,197.48,56.97,60.94,105.92,9.56,273.47,93.99,391.54l-25.99,80.45Z"/></svg>
            <svg className="w-6 h-6 hover:text-[#106bff] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 997.61 1037.17"><path d="M164.84,1037.17v-203.31C-159.21,547.76,25.68,42.95,448.51,2.38c338.84-32.51,630.68,273.05,528.34,611.12-77.6,256.35-358.42,392.33-612.98,326.77l-199.03,96.9ZM785.71,352.99l-212.69,116.47-122.09-121.31-244.7,260.46,219.99-121.35,119.67,128.64,239.82-262.91Z"/></svg>
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 509.05 587.81"><path d="M509.05,141v100c-49.69-.51-98.54-15.29-138.99-44l-.02,211.49c-6.18,119.68-117.9,204.7-235.41,172.43C10.31,546.78-40.73,394.49,36.64,291.09c40.07-53.55,106.55-82.16,173.41-73.09v102c-36.97-9.47-74.19,1.72-96.22,33.28-28.18,40.37-15.93,98.11,26.55,122.89,57.17,33.36,125.99-7.08,128.71-71.63l-.04-404.54h99.5l1.4,1.58c-1.05,7.52.1,16.94,1.39,24.63,8.81,52.29,50.61,95.57,100.94,110.06,4.33,1.25,16.53,4.74,20.26,4.74h16.5Z"/></svg>
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 576.08 523.59"><path d="M541.52,0l-191.6,222.1,226.17,301.49h-176.02l-140.82-183.04-161.3,183.04H11.52l206.16-237.47L0,0h181.15l126.87,166.37,8.84-7.61L455.1,0h86.41Z"/></svg>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-2/3 flex flex-col justify-center py-16 relative min-h-[60vh] xl:min-h-screen">
        <button onClick={handlePrevAd} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 border border-zinc-700 shadow-2xl flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 z-30">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>

        <button onClick={handleNextAd} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 border border-zinc-700 shadow-2xl flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 z-30">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>

        <div className="relative w-full overflow-hidden flex flex-col justify-center items-center py-12 z-10 min-h-[850px]">
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] items-center" style={{ transform: `translateX(calc(50% - 210px - ${activeAdIndex * 468}px))`, width: `${ADS_DATABASE.length * 468}px` }}>
            {ADS_DATABASE.map((ad, idx) => {
              const isActive = idx === activeAdIndex;
              return (
                <div key={ad.id} className={`mx-6 flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 scale-100 z-20 shadow-[0_0_50px_rgba(8,102,255,0.15)]' : 'opacity-30 scale-[0.90] pointer-events-none blur-[0.5px]'}`} style={{ width: '420px' }}>
                  {ad.type === 'carousel' ? <CarouselAd ad={ad} /> : ad.type === 'single-image' ? <SingleImageAd ad={ad} /> : <SingleMediaAd ad={ad} />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {ADS_DATABASE.map((_, idx) => (
            <button key={idx} onClick={() => setActiveAdIndex(idx)} className={`rounded-full transition-all duration-500 ease-out ${idx === activeAdIndex ? 'w-10 h-2 bg-[#0866ff] shadow-[0_0_10px_rgba(8,102,255,0.5)]' : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
