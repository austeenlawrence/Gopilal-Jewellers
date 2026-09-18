import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, MapPin } from 'lucide-react';
import { BRAND_DATA } from '../data/jewelleryData';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-[#09111e] text-[#FAFAF8] py-12 sm:py-20 border-b border-[#C5A059]/30 relative overflow-hidden">
        <div className="absolute inset-0 royal-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8]">
              About Gopilal Jewellers
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#C5A059] italic">
              Where Royal Indian Artistry Meets Enduring Purity
            </p>
            <p className="text-xs sm:text-sm text-[#D4CEBF] font-sans leading-relaxed">
              Situated in the heart of Jagat Farm, Greater Noida, Gopilal Jewellers was established to offer connoisseurs and families a trusted sanctuary for handcrafted fine jewellery.
            </p>
          </div>
        </div>
      </section>

      {/* Craftsmanship Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              The Master Karigari
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e]">
              Respecting Centuries of Indian Metalwork
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
              Indian jewellery is never merely ornamental; it is an intimate expression of auspicious blessings, marital vows, and ancestral dignity. Our artisans employ revered techniques—from antique repousse nakshi chasing to precision kundan setting and vibrant Benarasi meenakari.
            </p>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
              At the same time, we re-engineer weights and clasps so that royal chokers and diamond bands contour effortlessly against contemporary silhouettes.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80"
              alt="Jeweller working on stone setting"
              className="rounded-sm object-cover aspect-[4/5] border border-[#E5E1D8]"
            />
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80"
              alt="Handcrafted Gold Necklace"
              className="rounded-sm object-cover aspect-[4/5] border border-[#E5E1D8] mt-6"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-sm border border-[#E5E1D8] p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-sans font-semibold">
              Our Commitments
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#09111e]">
              Principles That Guide Every Creation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mx-auto sm:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#09111e]">
                Absolute Hallmarking
              </h3>
              <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
                We strictly stock 100% BIS hallmarked 22K (916) and 18K (750) gold. Each ornament carries the laser-etched HUID code for verifiable purity.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mx-auto sm:mx-0">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#09111e]">
                Family First Hospitality
              </h3>
              <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
                Jewellery shopping is a family celebration. Our showroom in Jagat Farm provides a serene, pressure-free atmosphere where every question is answered with patience.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mx-auto sm:mx-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#09111e]">
                Transparent Valuation
              </h3>
              <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
                Live digital karatometer purity testing, clear billing breakdowns, and honest market valuations for gold purchases and exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
