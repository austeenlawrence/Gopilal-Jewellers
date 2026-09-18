import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { getCallUrl, getWhatsAppUrl, getDirectionsUrl } from '../utils/helpers';

export const MobileStickyActions: React.FC = () => {
  return (
    <aside
      id="mobile-sticky-action-bar"
      aria-label="Quick Mobile Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09111e]/95 backdrop-blur-md border-t border-[#C5A059]/30 px-3 py-2 shadow-2xl transition-transform"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center">
        {/* 1. Call */}
        <a
          href={getCallUrl()}
          id="mobile-sticky-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-white/5 hover:bg-white/10 active:bg-[#C5A059]/20 text-[#FAFAF8] transition-colors min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">
            Call
          </span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 active:bg-[#25D366]/40 text-[#25D366] border border-[#25D366]/30 transition-colors min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-white">
            WhatsApp
          </span>
        </a>

        {/* 3. Directions */}
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-directions"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-white/5 hover:bg-white/10 active:bg-[#C5A059]/20 text-[#FAFAF8] transition-colors min-h-[44px]"
        >
          <Navigation className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">
            Directions
          </span>
        </a>
      </div>
    </aside>
  );
};
