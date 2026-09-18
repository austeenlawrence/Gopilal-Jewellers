import React from 'react';
import { Sparkles, CheckCircle2, MessageCircle, Phone, Calendar } from 'lucide-react';
import { OFFERS_DATA, BRAND_DATA } from '../data/jewelleryData';
import { getCallUrl, getWhatsAppUrl } from '../utils/helpers';

export const OffersView: React.FC = () => {
  return (
    <div className="space-y-10 sm:space-y-14 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E1D8] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Showroom Privileges</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#09111e]">
              Special Services & Consultations
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
              We believe luxury is grounded in transparency and care. Explore our dedicated showroom consultation services, transparent old gold exchange, and complimentary lifetime maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Offers List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {OFFERS_DATA.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-sm border border-[#E5E1D8] hover:border-[#C5A059]/50 transition-colors p-6 sm:p-8 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
                  {offer.tag}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#09111e]">
                  {offer.title}
                </h2>
                <div className="text-xs text-[#5A6372] font-sans font-medium mt-0.5">
                  {offer.subtitle}
                </div>
              </div>

              <span className="text-[11px] text-[#8C95A6] font-sans self-start sm:self-auto bg-[#F3F1EC] px-2.5 py-1 rounded-xs">
                {offer.validityNote}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed max-w-3xl">
              {offer.description}
            </p>

            {/* Highlights bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {offer.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#2D3748] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E5E1D8] flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl(undefined, `Hello Gopilal Jewellers, I would like to enquire about the "${offer.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-semibold tracking-wider uppercase rounded-xs flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={getCallUrl()}
                className="px-4 py-2.5 bg-[#09111e] hover:bg-[#131d31] text-[#FAFAF8] text-xs font-sans font-semibold tracking-wider uppercase rounded-xs flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
