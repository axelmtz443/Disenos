import { useState, useRef, useEffect } from 'react';
import { COLORS, FONTS } from '../lib/utils';
import { PROJECTS } from '../data/audiovisualData';

export default function AudiovisualSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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

  const currentProject = PROJECTS[activeProject];

  return (
    <section id="audiovisual" className="relative min-h-screen py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-100 h-100 rounded-full blur-[120px] pointer-events-none opacity-20" style={{ backgroundColor: COLORS.audiovisual }} />
      <div className="absolute bottom-1/4 right-1/3 w-75 h-75 rounded-full blur-[120px] pointer-events-none opacity-15" style={{ backgroundColor: COLORS.audiovisual }} />

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
          <div className="relative w-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex items-center justify-center max-h-[75vh]">
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
              <button key={project.id} onClick={() => setActiveProject(idx)} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${activeProject === idx ? 'bg-zinc-900 shadow-lg' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'}`} style={activeProject === idx ? { borderColor: 'rgba(89, 157, 223, 0.5)', boxShadow: '0 10px 30px rgba(89, 157, 223, 0.1)' } : {}}>
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
