import React, { useState } from 'react';

const FEATURES = [
  {
    id: 1,
    title: "Chatbots Inteligentes",
    icon: "message-bot",
    description: "Atención 24/7 con respuestas personalizadas",
    metric: "85% resolucion automatica"
  },
  {
    id: 2,
    title: "Email Marketing Predictivo",
    icon: "mail",
    description: "Envíos optimizados por comportamiento",
    metric: "3.2x conversiones"
  },
  {
    id: 3,
    title: "Análisis Automatizado",
    icon: "chart",
    description: "Dashboards que se actualizan en tiempo real",
    metric: "40+ horas ahorradas/mes"
  },
  {
    id: 4,
    title: "Gestión de Leads",
    icon: "leads",
    description: "Scoring y nurturing automatizado",
    metric: "67% más leads calificados"
  }
];

const STATS = [
  { value: "500+", label: "Automatizaciones activas" },
  { value: "12M+", label: "Mensajes procesados/mes" },
  { value: "98.5%", label: "Uptime garantizado" },
  { value: "< 2s", label: "Tiempo de respuesta" }
];

const getIcon = (iconType: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    'message-bot': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.756-4.267a.903.903 0 01.865-.501c1.152-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.75c0-1.6-1.123-2.993-2.707-3.227A47.863 47.863 0 0012 3c-2.392 0-4.744.175-7.043.523C3.373 3.757 2.25 5.15 2.25 6.75v6.01z" />
    ),
    'mail': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    ),
    'chart': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-15z" />
    ),
    'leads': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.25 9.25 0 002.25-2.056c.33-.426.552-.899.659-1.395a3.75 3.75 0 00-1.837-4.109 3.75 3.75 0 00-6.366 3.041 3.75 3.75 0 00.917 2.36c.287.32.618.597.967.875m-4.477.07c-.305-.075-.61-.15-.915-.221a9.875 9.875 0 01-4.632-2.682 9.875 9.875 0 01-.923-1.367M15 19.128v-.003m0 0a3.375 3.375 0 01-3.375 3.375h-.75A3.375 3.375 0 017.5 19.128m8.25-7.078v1.126c0 .966.784 1.75 1.75 1.75h1.126A1.75 1.75 0 0020 12.926v-1.126c0-.966-.784-1.75-1.75-1.75h-1.126A1.75 1.75 0 0015 11.75v.004zM9.75 4.5c0-.966.784-1.75 1.75-1.75h.75c.966 0 1.75.784 1.75 1.75v.75a1.75 1.75 0 01-1.75 1.75h-.75A1.75 1.75 0 019.75 5.25v-.75z" />
    )
  };
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {icons[iconType] || icons['chart']}
    </svg>
  );
};

export default function AutomationSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="automatizacion" className="relative min-h-screen py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-125 h-125 rounded-full blur-[120px] pointer-events-none opacity-20" style={{ backgroundColor: '#80b67d' }} />
      <div className="absolute bottom-1/3 right-1/4 w-100 h-100 rounded-full blur-[120px] pointer-events-none opacity-15" style={{ backgroundColor: '#80b67d' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 opacity-90" style={{ color: '#80b67d' }}>
            Procesos más rápidos, menos operación manual
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'Astonpoliz, sans-serif' }}>
            Automatización con IA
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Herramientas trabajando mientras tú te enfocas en crecer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(idx)}
                className={`relative p-6 rounded-2xl border text-left transition-all duration-300 ${
                  activeFeature === idx
                    ? 'bg-zinc-900 shadow-lg'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
                style={activeFeature === idx ? {
                  borderColor: 'rgba(128, 182, 125, 0.5)',
                  boxShadow: '0 10px 30px rgba(128, 182, 125, 0.1)'
                } : {}}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    activeFeature === idx ? 'text-white' : ''
                  }`}
                  style={{ backgroundColor: activeFeature === idx ? '#80b67d' : '#27272a', color: activeFeature === idx ? '#fff' : '#80b67d' }}
                >
                  {getIcon(feature.icon)}
                </div>
                <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Astonpoliz, sans-serif' }}>{feature.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{feature.description}</p>
              </button>
            ))}
          </div>

          {/* Active Feature Detail */}
          <div className="sticky top-8">
            <div
              className="rounded-3xl border p-8 lg:p-10"
              style={{ background: 'linear-gradient(135deg, rgba(128, 182, 125, 0.1), rgba(128, 182, 125, 0.05))', borderColor: 'rgba(128, 182, 125, 0.2)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg, #80b67d, #6a9d68)' }}
                >
                  {getIcon(FEATURES[activeFeature].icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Astonpoliz, sans-serif' }}>{FEATURES[activeFeature].title}</h3>
                  <p className="text-sm" style={{ color: '#80b67d' }}>Automatización inteligente</p>
                </div>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {FEATURES[activeFeature].description}. Implementamos soluciones de IA que aprenden de tus datos y mejoran continuamente.
              </p>

              {/* Metric Display */}
              <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>Resultado medible</span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: 'rgba(128, 182, 125, 0.15)', color: '#80b67d' }}
                  >
                    Verificado
                  </span>
                </div>
                <p
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{ fontFamily: 'Astonpoliz, sans-serif', backgroundImage: 'linear-gradient(135deg, #80b67d, #5a9d58)' }}
                >
                  {FEATURES[activeFeature].metric}
                </p>
              </div>

              {/* CTA */}
              <button
                className="w-full mt-6 py-4 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: '#80b67d', color: '#000' }}
              >
                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Automatizar ahora</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Automation Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Astonpoliz, sans-serif' }}>{stat.value}</p>
              <p className="text-sm text-zinc-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
