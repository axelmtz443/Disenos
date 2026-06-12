import { useState } from 'react';
import { ImageWithFallback, FONTS } from '../lib/utils';
import { ADS_DATABASE, GoogleAd } from '../data/googleData';

interface GoogleSearchAdProps {
  ad: GoogleAd;
}

function GoogleSearchAd({ ad }: GoogleSearchAdProps) {
  const dummySearchQuery = ad.tags?.[0] || ad.title.split('-')[0].trim() || ad.pageName;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center mb-6 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Red de Búsqueda (Search)</h3>
        <p className="text-[14px] text-zinc-400 font-light">Aparece en los primeros resultados de texto en el buscador de Google.</p>
      </div>

      <div className="w-[600px] max-w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden text-left shrink-0 font-sans relative flex flex-col">
        <div className="border-b border-gray-200 bg-white pt-5">
          <div className="flex items-center px-4 md:px-6 mb-4">
            <div className="flex font-sans text-2xl font-medium tracking-tighter mr-5 select-none">
              <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC04]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
            </div>
            <div className="flex-1 flex items-center bg-white border border-gray-200 hover:shadow-md transition-shadow rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#202124] text-[15px] flex-1 truncate font-medium">{dummySearchQuery}</span>
              <div className="flex items-center space-x-3 text-gray-500 ml-2 border-l border-gray-200 pl-3">
                <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"/><path fill="#34a853" d="m11 18.08h2v3.92h-2z"/><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.8-2.05-4.67h2c0 1.45.56 2.42 1.47 3.38v.32l-1.15 1.18z"/><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"/></svg>
                <svg className="w-5 h-5 text-[#4285F4] cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex items-center px-4 md:px-6 space-x-6 text-[13px] text-[#5f6368] overflow-x-auto hide-scrollbar">
            <div className="flex items-center space-x-1.5 pb-2.5 border-b-2 border-[#1a73e8] text-[#1a73e8] font-medium cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              <span>Todo</span>
            </div>
            <div className="flex items-center space-x-1.5 pb-2.5 hover:text-[#1a0dab] cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
              <span>Imágenes</span>
            </div>
            <div className="flex items-center space-x-1.5 pb-2.5 hover:text-[#1a0dab] cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Videos</span>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 pt-3 pb-4 text-[13px] text-[#70757a]">
          Cerca de 2,450,000 resultados (0.34 segundos)
        </div>

        <div className="px-4 md:px-8 pb-8 relative group">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-7 h-7 rounded-full border border-gray-200 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
              <ImageWithFallback src={ad.pageLogo || ''} fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName || 'A')}&background=f3f4f6&color=000`} alt={ad.pageName || 'Logo'} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] text-[#202124] font-medium truncate">{ad.pageName}</span>
              <span className="text-[12px] text-[#4d5156] truncate">{ad.displayUrl}</span>
            </div>
          </div>

          <div className="text-[14px] font-bold text-[#202124] mb-1.5">Patrocinado</div>
          <h3 className="text-[20px] text-[#1a0dab] font-normal hover:underline cursor-pointer mb-2 leading-snug break-words">{ad.title}</h3>
          <p className="text-[14px] text-[#4d5156] leading-[1.58]">{ad.description}</p>

          {ad.tags && (
            <div className="flex flex-nowrap overflow-hidden gap-2 mt-4 -mx-1 px-1">
              {ad.tags.map((tag, i) => (
                <div key={i} className="whitespace-nowrap px-4 py-2 bg-white border border-gray-300 rounded-full text-[14px] text-[#1a0dab] hover:bg-gray-50 transition cursor-pointer">{tag}</div>
              ))}
            </div>
          )}

          {ad.formExtension && (
            <div className="mt-4 pt-4 border-t border-gray-200 flex items-start cursor-pointer hover:bg-gray-50 -mx-5 px-5 pb-1 transition">
              <svg className="w-6 h-6 text-[#5f6368] mr-3.5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              <div className="flex flex-col text-left pb-2">
                <span className="text-[15px] text-[#202124]">{ad.formExtension.title}</span>
                <span className="text-[13px] text-[#70757a] mt-0.5">{ad.formExtension.subtitle}</span>
              </div>
            </div>
          )}
        </div>

        <div className="w-full h-8 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100"></div>
      </div>
    </div>
  );
}

function GoogleShoppingAd({ ad }: GoogleSearchAdProps) {
  const dummySearchQuery = ad.products?.[0]?.title.split(' ').slice(0, 3).join(' ') || "comprar en línea";

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center mb-6 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Google Shopping</h3>
        <p className="text-[14px] text-zinc-400 font-light">Muestra productos directos con imagen y precio en los resultados de búsqueda.</p>
      </div>

      <div className="w-[600px] max-w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden text-left shrink-0 font-sans relative flex flex-col">
        <div className="border-b border-gray-200 bg-white pt-5">
          <div className="flex items-center px-4 md:px-6 mb-4">
            <div className="flex font-sans text-2xl font-medium tracking-tighter mr-5 select-none">
              <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC04]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
            </div>
            <div className="flex-1 flex items-center bg-white border border-gray-200 hover:shadow-md transition-shadow rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#202124] text-[15px] flex-1 truncate font-medium">{dummySearchQuery}</span>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 pb-8 relative group">
          <div className="flex items-center mb-3">
            <span className="text-[13px] font-bold text-[#202124]">Patrocinado</span>
          </div>

          <div className="relative flex items-center w-full">
            <div className="flex space-x-3 overflow-x-auto w-full hide-scrollbar pb-3 pt-1 px-1 -mx-1">
              {ad.products?.map((p, i) => (
                <div key={i} className="w-[145px] shrink-0 flex flex-col border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-xl overflow-hidden transition-all cursor-pointer group bg-white">
                  <div className="w-full aspect-square bg-white flex items-center justify-center p-3">
                    <img src={p.image} className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300" alt={p.title} />
                  </div>
                  <div className="p-3 flex flex-col items-start text-left flex-1 border-t border-gray-100">
                    <span className="text-[13px] text-[#1a0dab] font-medium leading-[1.3] line-clamp-2 group-hover:underline h-[34px]">{p.title}</span>
                    <span className="text-[16px] font-bold text-[#202124] mt-2">{p.price}</span>
                    <span className="text-[12px] text-[#4d5156] mt-1 truncate w-full">{p.store}</span>
                    {p.promo && <span className="text-[11px] font-medium text-[#137333] mt-2 bg-[#e6f4ea] px-1.5 py-0.5 rounded-sm">{p.promo}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-8 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100"></div>
      </div>
    </div>
  );
}

function GoogleVideoAd({ ad }: GoogleSearchAdProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center mb-6 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Anuncios de Video (YouTube)</h3>
        <p className="text-[14px] text-zinc-400 font-light">Aparece primero en los resultados y recomendaciones de YouTube.</p>
      </div>

      <div className="w-[600px] max-w-full bg-[#0f0f0f]/95 backdrop-blur-sm rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-zinc-700/50 overflow-hidden text-left shrink-0 font-sans relative flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f]">
          <div className="flex items-center space-x-4">
            <div className="flex items-center tracking-tighter text-[18px] font-bold text-white cursor-pointer">
              <svg className="w-7 h-7 text-[#FF0000] mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.582 6.186a2.594 2.594 0 0 0-1.824-1.838C18.147 3.911 12 3.911 12 3.911s-6.147 0-7.758.437A2.594 2.594 0 0 0 2.418 6.186C2 7.82 2 12 2 12s0 4.18.418 5.814a2.594 2.594 0 0 0 1.824 1.838c1.611.437 7.758.437 7.758.437s6.147 0 7.758-.437a2.594 2.594 0 0 0 1.824-1.838c.418-1.634.418-5.814.418-5.814s0-4.18-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#3EA6FF] flex items-center justify-center text-white text-xs font-medium cursor-pointer">U</div>
        </div>

        <div className="flex space-x-3 px-4 py-3 bg-[#0f0f0f]/80 border-t border-zinc-800">
          <span className="bg-white text-black px-3 py-1 rounded-lg text-[13px] font-medium cursor-pointer">Todo</span>
          <span className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded-lg text-[13px] font-medium cursor-pointer">Videos</span>
        </div>

        <div className="px-4 md:px-6 py-5 relative bg-[#0f0f0f]/50">
          <div className="w-full flex flex-col md:flex-row gap-4 text-left cursor-pointer group">
            <div className="w-full md:w-[260px] shrink-0 relative rounded-xl overflow-hidden aspect-video bg-black shadow-sm group-hover:shadow-md transition">
              <img src={ad.videoThumbnail} className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" alt="Video thumbnail" />
              <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[12px] font-medium px-1.5 py-0.5 rounded backdrop-blur-sm">{ad.duration}</span>
            </div>
            <div className="flex flex-col flex-1 py-0.5 justify-start">
              <h3 className="text-[18px] text-white font-medium leading-[1.3] mb-1.5 line-clamp-2 group-hover:text-[#3EA6FF] transition-colors pr-4">{ad.title}</h3>
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
                <span className="bg-[#fcc82d] text-black text-[12px] font-medium px-1.5 py-[1px] rounded-sm tracking-wide">{ad.sponsorLabel || 'Patrocinado'}</span>
                <span className="text-zinc-400 text-[13px] font-medium">{ad.channelName}</span>
                <span className="text-zinc-500 text-[13px]">{ad.views}</span>
              </div>
              <p className="text-zinc-400 text-[13px] leading-relaxed line-clamp-2 mt-1">{ad.description}</p>
              <button className="mt-3 w-fit flex items-center space-x-2 bg-[#065fd4] hover:bg-[#0056b3] text-white text-[13px] font-medium px-4 py-2 rounded-full transition shadow-sm">
                <span>Más información</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleDisplayAd({ ad }: GoogleSearchAdProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center mb-6 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Banners (Red de Display)</h3>
        <p className="text-[14px] text-zinc-400">Aparece en sitios web y apps a la gente que le interesa</p>
      </div>

      <div className="w-[650px] max-w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden text-left shrink-0 font-sans relative flex flex-col">
        <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-between bg-white z-10">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-7 h-7 bg-zinc-800 rounded flex items-center justify-center text-white font-bold text-sm">B</div>
            <span className="font-bold text-base text-zinc-800 tracking-tight">BlogDiario</span>
          </div>
          <div className="hidden sm:flex space-x-5 text-[13px] font-medium text-gray-500">
            <span className="hover:text-black cursor-pointer text-blue-600 transition-colors">Actualidad</span>
            <span className="hover:text-black cursor-pointer transition-colors">Tecnología</span>
          </div>
        </div>

        <div className="flex flex-col p-6 md:p-8 bg-[#fdfdfd]/95 relative">
          <h1 className="text-2xl font-extrabold text-[#111827] leading-tight mb-4">5 Claves para Ser Más Productivo</h1>
          <p className="text-gray-600 text-[15px] leading-[1.7] mb-6">En un mundo donde la distracción está a un clic de distancia, mantener el enfoque se ha vuelto uno de los mayores retos profesionales.</p>

          <div className="w-full mb-6">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium block">Publicidad</span>
            <div className="w-full h-auto sm:h-[120px] flex flex-col sm:flex-row rounded-lg shadow-sm hover:shadow-md overflow-hidden font-sans border border-gray-200 group cursor-pointer transition-all bg-white relative">
              <div className="absolute top-1 right-1 bg-white/90 backdrop-blur-sm px-1.5 rounded shadow-sm flex items-center z-20">
                <span className="text-[9px] text-gray-500 font-semibold uppercase">Ad</span>
              </div>
              <div className="w-full sm:w-[180px] h-[100px] sm:h-full shrink-0 relative overflow-hidden">
                <img src={ad.displayImageUrl} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" alt="Banner" />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 py-3 sm:py-2">
                <h2 className="text-[16px] font-extrabold text-gray-900 leading-tight mb-1">Nueva Colección</h2>
                <p className="text-[13px] text-gray-700">{ad.displaySubtext}</p>
              </div>
              <div className="w-full sm:w-[140px] shrink-0 flex items-center justify-center p-4 sm:pl-0">
                <button className="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-[13px] py-2 px-3 rounded shadow-sm transition-colors">{ad.ctaText}</button>
              </div>
            </div>
          </div>

          <div className="w-full h-3 bg-gray-100/80 rounded"></div>
          <div className="w-[85%] h-3 bg-gray-100/80 rounded mt-3"></div>
          <div className="w-[92%] h-3 bg-gray-100/80 rounded mt-3"></div>
        </div>
      </div>
    </div>
  );
}

function renderAdComponent(ad: GoogleAd) {
  switch(ad.type) {
    case 'shopping': return <GoogleShoppingAd ad={ad} />;
    case 'video': return <GoogleVideoAd ad={ad} />;
    case 'display': return <GoogleDisplayAd ad={ad} />;
    default: return <GoogleSearchAd ad={ad} />;
  }
}

export default function GoogleSection() {
  const [activeAdIndex, setActiveAdIndex] = useState(0);
  const totalAds = ADS_DATABASE.length;

  const handleNextAd = () => setActiveAdIndex((prev) => (prev < totalAds - 1 ? prev + 1 : 0));
  const handlePrevAd = () => setActiveAdIndex((prev) => (prev > 0 ? prev - 1 : totalAds - 1));

  const cardWidth = 550;
  const cardMargin = 48;
  const totalItemWidth = cardWidth + cardMargin;

  return (
    <section id="google-ads" className="min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden">
      <div className="w-full md:w-2/3 flex flex-col justify-center py-16 relative min-h-[60vh] md:min-h-screen">
        <button onClick={handlePrevAd} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 border border-zinc-700 shadow-2xl flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 z-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>

        <button onClick={handleNextAd} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 border border-zinc-700 shadow-2xl flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 z-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>

        <div className="relative w-full overflow-hidden flex flex-col justify-center items-center py-12 z-10 min-h-[650px]">
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] items-center relative" style={{ transform: `translateX(calc(50% - ${cardWidth / 2}px - ${activeAdIndex * totalItemWidth}px))`, width: `${totalAds * totalItemWidth}px` }}>
            {ADS_DATABASE.map((ad, idx) => {
              const isActive = idx === activeAdIndex;
              return (
                <div key={ad.id} className={`mx-6 shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-30 scale-[0.85] pointer-events-none blur-[2px]'}`} style={{ width: `${cardWidth}px` }}>
                  {renderAdComponent(ad)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {ADS_DATABASE.map((_, idx) => (
            <button key={idx} onClick={() => setActiveAdIndex(idx)} className={`rounded-full transition-all duration-500 ease-out ${idx === activeAdIndex ? 'w-10 h-2 bg-[#1a73e8] shadow-[0_0_15px_rgba(26,115,232,0.6)]' : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'}`} />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 p-8 lg:p-14 flex flex-col justify-center items-center text-center min-h-[40vh] md:min-h-screen">
        <div className="w-full max-w-sm flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
            Publicidad en <br/>
            <span className="text-[#1a73e8]">Google Ads</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light mb-8 max-w-xs mx-auto">
            Dominamos la red publicitaria más grande del mundo. <strong className="text-white font-medium">Búsqueda, Shopping, YouTube, Display</strong> y más en una sola estrategia.
          </p>
          <span className="text-xs font-bold text-[#1a73e8] tracking-[0.2em] uppercase mb-4">Omnicanalidad Precisa</span>
          <div className="flex flex-wrap items-center justify-center gap-5 text-zinc-500">
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 1212.41 1236.32"><path d="M1015.9,719.96h-398.11v-205.09h580.57c7.22,13.06,8.98,34.1,10.52,49.8,40.24,408.3-269.78,724.91-682.25,664.16C41.19,1157.32-171.7,565.61,160.84,201.17c229.02-250.99,621.94-270.06,873.11-40.67l-146.19,145.73c-62.8-52.61-143.74-91.07-226.28-98.93C274.66,170.44,52.64,637.06,326.77,909.95c225.13,224.11,612.62,115.2,689.13-189.99Z"/></svg>
            <svg className="w-6 h-6 hover:text-[#ff0000] transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 1293 1196.13"><path d="M649.38,752.65c-6.8-1.47-4.67.89-6.5,3.75-69,107.43-123.35,230.17-193.71,337.57-198.06,243.06-563.3,12.75-414.38-277.16,123.61-240.65,280.77-473.24,408.42-712.7,96.41-138.05,305.18-138.38,404.25-3.5,128.73,240.38,286.54,474.37,410.76,716.2,148.88,289.84-216.27,520.28-414.39,277.17l-194.45-341.33ZM421.67,349.73l-204.35,350.32c106.98-15.92,215.84,47.91,258.37,145.99l112.3-194.1c-47.9-93.43-104.88-181.9-155.12-273.97-4.72-8.64-10.5-18.2-11.2-28.24Z"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
