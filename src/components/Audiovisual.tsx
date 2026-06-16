import { useState, useRef, useEffect, ReactNode } from 'react';
import { COLORS, FONTS } from '../lib/utils';

// Data and types moved from audiovisualData.ts
interface ProjectStats {
  views: string;
  engagement: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  thumbnail: string;
  videoUrl: string;
  stats: ProjectStats;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Campaña de Lanzamiento EQC",
    client: "Mercedes-Benz Eurostern",
    thumbnail: "https://weprom-ventura-figma-dising.vercel.app/assets/video3-BErNvMUP.png",
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655936/Mercedes_Benz_EQC_zzprl2.mp4",
    stats: { views: "2.1M", engagement: "12.4%" }
  },
  {
    id: 2,
    title: "Videos corporativos",
    client: "Cantina Xalisco",
    thumbnail: "https://weprom-ventura-figma-dising.vercel.app/assets/video1-6_G6NwWF.png",
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655940/socialmedia1_cnkqxl.mp4",
    stats: { views: "890K", engagement: "18.7%" }
  },
  {
    id: 3,
    title: "Video Institucional",
    client: "Dulcería los Altos",
    thumbnail: "https://weprom-ventura-figma-dising.vercel.app//assets/video1-BNUODnUz.png",
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1779675805/Dulceri%CC%81a_de_los_Altos_Video_Institucional_dfqhml.mp4",
    stats: { views: "1.5M", engagement: "24.2%" }
  }
];

export default function AudiovisualSection() {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeProject]);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error al reproducir el video:", err));
    }
  };

  const handlePauseEvent = () => setIsPlaying(false);
  const handlePlayEvent = () => setIsPlaying(true);

  const currentProject: Project = PROJECTS[activeProject];

  return (
    <section id="audiovisual" className="relative min-h-screen py-24 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 opacity-90" style={{ color: COLORS.audiovisual }}>
            Contenido que posiciona, conecta y convierte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: FONTS.heading }}>
            Producción Audiovisual
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed" style={{ fontFamily: FONTS.body }}>
            Conceptos creativos desarrollados para atraer clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative w-full bg-zinc-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl flex items-center justify-center max-h-[75vh]">
            {currentProject.videoUrl ? (
              <video
                ref={videoRef}
                src={currentProject.videoUrl}
                poster={currentProject.thumbnail}
                className="w-full h-auto max-h-[75vh] object-contain block cursor-pointer"
                playsInline
                onClick={handlePlayToggle}
                onPlay={handlePlayEvent}
                onPause={handlePauseEvent}
                controls={isPlaying}
              />
            ) : (
              <img src={currentProject.thumbnail} alt={currentProject.title} className="w-full h-auto max-h-[75vh] object-contain block" />
            )}

            {!isPlaying && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                <button onClick={handlePlayToggle} className="absolute inset-0 flex items-center justify-center group/btn">
                  <div className="w-20 h-20 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 shadow-lg" style={{ backgroundColor: 'rgba(89, 157, 223, 0.2)', borderColor: 'rgba(89, 157, 223, 0.4)' }}>
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2" style={{ backgroundColor: 'rgba(89, 157, 223, 0.2)', color: COLORS.audiovisual }}>{currentProject.client}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: FONTS.heading }}>{currentProject.title}</h3>
                  <div className="flex gap-6 text-sm text-zinc-300" style={{ fontFamily: FONTS.body }}>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" style={{ color: COLORS.audiovisual }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      <span>{currentProject.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" style={{ color: COLORS.automation }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                      <span>{currentProject.stats.engagement} engagement</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-4 w-full">
            {PROJECTS.map((project, idx) => (
              <button key={project.id} onClick={() => setActiveProject(idx)} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${activeProject === idx ? 'bg-zinc-900/90 backdrop-blur-sm shadow-lg' : 'bg-zinc-900/60 backdrop-blur-sm border-zinc-700/50 hover:border-zinc-600'}`} style={activeProject === idx ? { borderColor: 'rgba(89, 157, 223, 0.5)', boxShadow: '0 10px 30px rgba(89, 157, 223, 0.1)' } : {}}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-14 rounded-lg overflow-hidden shrink-0 bg-zinc-950">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 mb-1" style={{ fontFamily: FONTS.body }}>{project.client}</p>
                    <p className="text-sm font-semibold text-white truncate" style={{ fontFamily: FONTS.heading }}>{project.title}</p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: activeProject === idx ? COLORS.audiovisual : '#27272a' }}>
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
