import { ReactNode } from 'react';

export interface Feature {
  id: number;
  title: string;
  icon: string;
  description: string;
  metric: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const FEATURES: Feature[] = [
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

export const STATS: Stat[] = [
  { value: "500+", label: "Automatizaciones activas" },
  { value: "12M+", label: "Mensajes procesados/mes" },
  { value: "98.5%", label: "Uptime garantizado" },
  { value: "< 2s", label: "Tiempo de respuesta" }
];

const ICON_PATHS: Record<string, ReactNode> = {
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

export function getIcon(iconType: string): ReactNode {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {ICON_PATHS[iconType] || ICON_PATHS['chart']}
    </svg>
  );
}
