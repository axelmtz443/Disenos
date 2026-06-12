export type GoogleAdType = 'search' | 'display' | 'shopping' | 'video';

export interface GoogleActionExtension {
  title: string;
  subtitle: string;
}

export interface GoogleShoppingProduct {
  image: string;
  title: string;
  price: string;
  store: string;
  promo?: string;
  rating?: number;
  reviews?: number;
}

export interface GoogleAd {
  id: string;
  type: GoogleAdType;
  title: string;
  pageLogo?: string;
  pageName?: string;
  displayUrl?: string;
  description?: string;
  whatsappAction?: GoogleActionExtension;
  stackedSitelinks?: string[];
  tags?: string[];
  formExtension?: GoogleActionExtension;
  displayBgColor?: string;
  displaySubtext?: string;
  displayImageUrl?: string;
  ctaText?: string;
  finePrint?: string;
  products?: GoogleShoppingProduct[];
  videoThumbnail?: string;
  duration?: string;
  channelName?: string;
  views?: string;
  sponsorLabel?: string;
}

export const ADS_DATABASE: GoogleAd[] = [
  {
    id: "search-alteso",
    type: "search",
    pageName: "Alteso",
    displayUrl: "www.alteso.mx/plantas_de_gas",
    pageLogo: "https://ui-avatars.com/api/?name=Alteso&background=f8f9fa&color=202124&font-size=0.5",
    title: "Venta de Plantas de Luz a Gas - Te Cotizamos en 24 Horas",
    description: "Nuestros Equipos de última generación generan menos emisiones de CO2 sin afectar rendimiento o potencia",
    tags: ["Plantas de Diesel", "Plantas de Gasolina", "Plantas de..."],
    formExtension: {
      title: "Pide presupuesto",
      subtitle: "Tenemos todas las marcas"
    }
  },
  {
    id: "shopping-tech",
    type: "shopping",
    title: "Resultados de Shopping",
    products: [
      {
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300",
        title: "Auriculares Inalámbricos Pro Max Noise Cancelling",
        price: "$4,599.00",
        store: "TechStore MX",
        promo: "Envío gratis",
        rating: 4.8,
        reviews: 124
      },
      {
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300",
        title: "Smartwatch Deportivo Serie 8 GPS + Celular",
        price: "$6,200.00",
        store: "ElectroCity",
        promo: "Rebaja especial",
        rating: 4.5,
        reviews: 89
      },
      {
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=300",
        title: "Audífonos Studio Wireless Over-Ear V2",
        price: "$3,850.00",
        store: "AudioMundo",
        rating: 4.2,
        reviews: 45
      },
      {
        image: "https://images.unsplash.com/photo-1572569433114-6b0c20ab0e39?auto=format&fit=crop&q=80&w=300",
        title: "Reloj Inteligente Minimalist Negro",
        price: "$1,999.00",
        store: "GadgetMX",
        promo: "Envío gratis"
      }
    ]
  },
  {
    id: "video-promo",
    type: "video",
    title: "Domina tus Finanzas con esta Nueva Herramienta en 2026",
    videoThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    duration: "1:12",
    channelName: "Finanzas Prácticas",
    views: "1.2 M de vistas",
    sponsorLabel: "Patrocinado",
    description: "Descubre el software definitivo para automatizar tu contabilidad y multiplicar tus ahorros."
  },
  {
    id: "display-horizontal",
    type: "display",
    title: "Nueva Colección Verano",
    displaySubtext: "Hasta 50% de descuento en artículos seleccionados. Solo por tiempo limitado.",
    displayImageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    displayBgColor: "#ffffff",
    ctaText: "Comprar Ahora",
    finePrint: "*Aplican términos y condiciones. Válido hasta agotar existencias.",
    pageLogo: "https://ui-avatars.com/api/?name=F&background=000&color=fff&font-size=0.6"
  }
];
