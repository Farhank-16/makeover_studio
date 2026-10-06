import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/config';

export default function WhatsAppButton({
  customMessage,
  variant = 'button',
  label = 'WhatsApp Us',
  className = ''
}) {
  const url = createWhatsAppUrl(customMessage);

  if (variant === 'floating') {
    return (
      <aside aria-label="WhatsApp quick contact">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#1F1E1D] text-[#FAF8F5] px-4 py-3 rounded-full shadow-lg border border-[#C5A880]/50 hover:bg-[#050504] hover:border-[#C5A880] transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label="Chat with Makeover Beauty Studio on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-inner">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs uppercase tracking-[0.14em] font-semibold pr-1">
            WhatsApp
          </span>
        </a>
      </aside>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold px-6 py-3.5 rounded-[3px] transition-all duration-300 border border-[#1F1E1D]/40 text-[#1F1E1D] hover:border-[#1F1E1D] hover:bg-[#EFE9E0]/50 ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-[#25D366]" />
      <span>{label}</span>
    </a>
  );
}
