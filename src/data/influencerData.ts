export interface Campaign {
  id: number;
  influencer: string;
  handle: string;
  followers: string;
  niche: string;
  profilePic: string;
  roi: string;
  engagement: string;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    influencer: "María González",
    handle: "@mariaestilo",
    followers: "1.2M",
    niche: "Lifestyle & Moda",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    roi: "340%",
    engagement: "8.5%"
  },
  {
    id: 2,
    influencer: "Carlos Tech",
    handle: "@carlostech",
    followers: "890K",
    niche: "Tecnología",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a65dd61ce35?auto=format&fit=crop&q=80&w=150",
    roi: "520%",
    engagement: "6.2%"
  },
  {
    id: 3,
    influencer: "Ana Fitness",
    handle: "@anawellness",
    followers: "2.1M",
    niche: "Salud & Fitness",
    profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    roi: "280%",
    engagement: "9.8%"
  }
];
