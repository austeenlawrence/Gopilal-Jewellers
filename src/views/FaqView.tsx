import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQ_DATA, BRAND_DATA } from '../data/jewelleryData';
import { getCallUrl, getWhatsAppUrl } from '../utils/helpers';

export const FaqView: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-10 sm:space-y-14 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E1D8] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Patron Guidance</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#09111e]">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
              Clear answers regarding our BIS 916/750 hallmarking, diamond certifications, bespoke bridal ordering, and showroom appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion list */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
        {FAQ_DATA.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-sm border border-[#E5E1D8] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F3F1EC]/50 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-serif font-semibold text-sm sm:text-base text-[#09111e]">
                  {faq.question}
                </span>
                <span className="text-[#C5A059] flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed border-t border-[#E5E1D8]/40 bg-[#FAFAF8]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}

        {/* Still Have Questions Box */}
        <div className="mt-8 p-6 sm:p-8 bg-[#09111e] text-[#FAFAF8] rounded-sm border border-[#C5A059]/40 text-center space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Have a Specific Question About a Piece?
          </h2>
          <p className="text-xs sm:text-sm text-[#D4CEBF] font-sans max-w-md mx-auto">
            Our jewellery specialists at Jagat Farm are available daily from 10:30 AM to 9:00 PM to assist you directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href={getWhatsAppUrl(undefined, 'Hello Gopilal Jewellers, I have a question regarding your jewellery collection.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={getCallUrl()}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#FAFAF8] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center gap-2 transition-colors border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call ({BRAND_DATA.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
