import { useState } from 'react';
import { COLORS, FONTS } from '../lib/utils';
import { FEATURES, STATS, getIcon } from '../data/automationData';

export default function AutomationSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section id="automatizacion" className="relative min-h-screen py-24 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 opacity-90" style={{ color: COLORS.automation }}>
            Procesos más rápidos, menos operación manual
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: FONTS.heading }}>
            Automatización con IA
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed" style={{ fontFamily: FONTS.body }}>
            Herramientas trabajando mientras tú te enfocas en crecer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, idx) => (
              <button key={feature.id} onClick={() => setActiveFeature(idx)} className={`relative p-6 rounded-2xl border text-left transition-all duration-300 ${activeFeature === idx ? 'bg-zinc-900/90 backdrop-blur-sm shadow-lg' : 'bg-zinc-900/60 backdrop-blur-sm border-zinc-700/50 hover:border-zinc-600'}`} style={activeFeature === idx ? { borderColor: 'rgba(128, 182, 125, 0.5)', boxShadow: '0 10px 30px rgba(128, 182, 125, 0.1)' } : {}}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${activeFeature === idx ? 'text-white' : ''}`} style={{ backgroundColor: activeFeature === idx ? COLORS.automation : '#27272a', color: activeFeature === idx ? '#fff' : COLORS.automation }}>
                  {getIcon(feature.icon)}
                </div>
                <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: FONTS.heading }}>{feature.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed" style={{ fontFamily: FONTS.body }}>{feature.description}</p>
              </button>
            ))}
          </div>

          <div className="sticky top-8">
            <div className="rounded-3xl border p-8 lg:p-10 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, rgba(128, 182, 125, 0.1), rgba(128, 182, 125, 0.05))', borderColor: 'rgba(128, 182, 125, 0.3)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #80b67d, #6a9d68)' }}>
                  {getIcon(FEATURES[activeFeature].icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: FONTS.heading }}>{FEATURES[activeFeature].title}</h3>
                  <p className="text-sm" style={{ color: COLORS.automation }}>Automatización inteligente</p>
                </div>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8" style={{ fontFamily: FONTS.body }}>
                {FEATURES[activeFeature].description}. Implementamos soluciones de IA que aprenden de tus datos y mejoran continuamente.
              </p>

              <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-500" style={{ fontFamily: FONTS.body }}>Resultado medible</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(128, 182, 125, 0.15)', color: COLORS.automation }}>Verificado</span>
                </div>
                <p className="text-3xl font-bold bg-clip-text text-transparent" style={{ fontFamily: FONTS.heading, backgroundImage: 'linear-gradient(135deg, #80b67d, #5a9d58)' }}>{FEATURES[activeFeature].metric}</p>
              </div>

              <button className="w-full mt-6 py-4 font-bold rounded-xl transition-colors flex items-center justify-center gap-2" style={{ backgroundColor: COLORS.automation, color: '#000' }}>
                <span style={{ fontFamily: FONTS.body }}>Automatizar ahora</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-zinc-900/60 backdrop-blur-sm rounded-xl border border-zinc-700/50">
              <p className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: FONTS.heading }}>{stat.value}</p>
              <p className="text-sm text-zinc-500" style={{ fontFamily: FONTS.body }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
