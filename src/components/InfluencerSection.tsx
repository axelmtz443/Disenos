import { useState } from 'react';
import { COLORS, FONTS } from '../lib/utils';
import { CAMPAIGNS } from '../data/influencerData';

export default function InfluencerSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="influencer" className="relative min-h-screen py-24 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 opacity-90" style={{ color: COLORS.influencer }}>
            Alcance real, audiencias comprometidas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: FONTS.heading }}>
            Influencer Marketing y UGC
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed" style={{ fontFamily: FONTS.body }}>
            Conectamos marcas con perfiles que conectan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CAMPAIGNS.map((campaign, idx) => (
            <div key={campaign.id} onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)} className="relative group">
              <div className={`relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-500 ${hovered === idx ? 'scale-[1.02]' : ''}`} style={{ borderColor: hovered === idx ? 'rgba(230, 175, 65, 0.5)' : 'rgba(63, 63, 70, 0.5)', boxShadow: hovered === idx ? '0 20px 40px rgba(230, 175, 65, 0.1)' : 'none' }}>
                <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                  <div className="relative">
                    <img src={campaign.profilePic} alt={campaign.influencer} className="w-11 h-11 rounded-full object-cover" style={{ border: `2px solid rgba(230, 175, 65, 0.5)` }} />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-zinc-900 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: FONTS.body }}>{campaign.handle}</p>
                    <p className="text-zinc-500 text-xs" style={{ fontFamily: FONTS.body }}>Promocionado</p>
                  </div>
                  <button className="text-zinc-500 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  </button>
                </div>

                <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                  <img src={campaign.profilePic} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 scale-150" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <svg className="w-16 h-16 mb-4 opacity-80" style={{ color: COLORS.influencer }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>
                    <p className="text-zinc-400 text-sm" style={{ fontFamily: FONTS.body }}>Contenido Patrocinado</p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-zinc-400 text-xs gap-4" style={{ fontFamily: FONTS.body }}>
                    <span>{campaign.followers} seguidores</span>
                    <span className="px-2 py-0.5 bg-zinc-800 rounded-full">{campaign.niche}</span>
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-zinc-800">
                    <div className="flex-1 text-center">
                      <p className="text-lg font-bold" style={{ color: COLORS.influencer }}>{campaign.roi}</p>
                      <p className="text-xs text-zinc-500" style={{ fontFamily: FONTS.body }}>ROI</p>
                    </div>
                    <div className="flex-1 text-center border-l border-zinc-800">
                      <p className="text-lg font-bold" style={{ color: COLORS.automation }}>{campaign.engagement}</p>
                      <p className="text-xs text-zinc-500" style={{ fontFamily: FONTS.body }}>Engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border backdrop-blur-sm" style={{ background: 'linear-gradient(90deg, rgba(230, 175, 65, 0.1), rgba(230, 175, 65, 0.05))', borderColor: 'rgba(230, 175, 65, 0.3)' }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #e6af41, #d4a03a)' }}>
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.828 1.076 1.828 2.182v9.437a2.25 2.25 0 01-2.182 2.25l-12.593.52c-1.1.045-2.027-.88-1.982-1.98l.52-12.593a2.25 2.25 0 012.25-2.182h9.437c1.106 0 2.041.728 2.182 1.828z"/></svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: FONTS.heading }}>Contenido UGC Auténtico</h4>
              <p className="text-zinc-400" style={{ fontFamily: FONTS.body }}>Contenido generado por usuarios reales que genera confianza y prueba social para tu marca.</p>
            </div>
            <button className="px-6 py-3 font-bold rounded-xl transition-colors whitespace-nowrap" style={{ backgroundColor: COLORS.influencer, color: '#000' }}>Ver Casos</button>
          </div>
        </div>
      </div>
    </section>
  );
}
