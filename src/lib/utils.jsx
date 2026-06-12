import { useState } from 'react';

// Theme colors used across the app
export const COLORS = {
  meta: '#0866ff',
  google: '#1a73e8',
  audiovisual: '#599ddf',
  influencer: '#e6af41',
  automation: '#80b67d',
};

// Fonts
export const FONTS = {
  heading: "'Astonpoliz', sans-serif",
  body: "'Montserrat', sans-serif",
};

// Reusable image component with fallback
export function ImageWithFallback({ src, fallback, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasFailed) {
          setImgSrc(fallback);
          setHasFailed(true);
        }
      }}
    />
  );
}

// Expandable text with "Ver más" toggle
export function ExpandableText({ text, maxLength = 135 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > maxLength;
  const displayText = isExpanded || !isLong ? text : text.substring(0, maxLength).trim() + '...';

  return (
    <div className="px-4 pb-4 pt-1 text-[15px] text-[#e4e6eb] text-left leading-[1.4] whitespace-pre-wrap">
      {displayText}
      {isLong && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-zinc-400 font-semibold hover:underline ml-1"
        >
          Ver más
        </button>
      )}
      {isLong && isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="text-zinc-400 font-semibold hover:underline ml-1"
        >
          Ver menos
        </button>
      )}
    </div>
  );
}

// Social action buttons (like, comment, share)
export function SocialActions() {
  return (
    <div className="px-4 py-1.5 border-t border-[#3e4042] flex justify-between text-[#b0b3b8] text-[14px] font-semibold bg-[#242526]">
      <button className="flex-1 flex items-center justify-center space-x-2 py-1.5 hover:bg-[#3a3b3c] rounded-md transition">
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        <span>Me gusta</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-2 py-1.5 mx-1 hover:bg-[#3a3b3c] rounded-md transition">
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Comentar</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-2 py-1.5 hover:bg-[#3a3b3c] rounded-md transition">
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.828-2.414m0 0a3 3 0 10-1.243-2.513 3 3 0 001.243 2.513zM13.51 15.674l-4.829-2.414m0 0a3 3 0 111.243-2.513 3 3 0 01-1.243 2.513z" />
        </svg>
        <span>Compartir</span>
      </button>
    </div>
  );
}
