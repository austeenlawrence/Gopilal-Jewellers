import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  ExternalLink,
  Send,
  CheckCircle,
  Building,
  Sparkles
} from 'lucide-react';
import { BRAND_DATA } from '../data/jewelleryData';
import { getCallUrl, getDirectionsUrl, getGoogleMapsViewUrl, getWhatsAppUrl } from '../utils/helpers';

export const ShowroomView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Bridal Jewellery',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with the form details
    const text = `Hello Gopilal Jewellers,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nMessage: ${formData.message || 'I would like to schedule a showroom visit.'}`;
    window.open(`https://wa.me/91${BRAND_DATA.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-10 sm:space-y-14 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E1D8] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              <Building className="w-3.5 h-3.5" />
              <span>Flagship Showroom</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#09111e]">
              Visit Gopilal Jewellers
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
              Step into our luxury jewellery showroom in Jagat Farm, Greater Noida. Experience royal collections, custom atelier commissions, and authentic hallmarked purity in person.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Quick Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Showroom Contact Card */}
          <div className="lg:col-span-6 bg-white rounded-sm border border-[#E5E1D8] p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-sans font-semibold">
                Showroom Address & Hours
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#09111e] mt-1">
                Gopilal Jewellers
              </h2>
            </div>

            {/* Address Details */}
            <div className="space-y-4 text-xs sm:text-sm text-[#2D3748] font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#09111e] font-semibold">Address:</strong>
                  <p className="text-[#4A5568] leading-relaxed mt-0.5">
                    {BRAND_DATA.address.line1},<br />
                    {BRAND_DATA.address.line2},<br />
                    {BRAND_DATA.address.area},<br />
                    {BRAND_DATA.address.city}, {BRAND_DATA.address.state} {BRAND_DATA.address.pincode}, {BRAND_DATA.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#09111e] font-semibold">Opening Hours:</strong>
                  <p className="text-[#4A5568] mt-0.5">
                    {BRAND_DATA.hours} (Daily unless otherwise specified)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#09111e] font-semibold">Phone:</strong>
                  <a href={getCallUrl()} className="text-[#09111e] hover:text-[#C5A059] transition-colors mt-0.5 block font-medium">
                    {BRAND_DATA.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#09111e] font-semibold">WhatsApp:</strong>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#09111e] hover:text-[#25D366] transition-colors mt-0.5 block font-medium"
                  >
                    {BRAND_DATA.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#E5E1D8]">
              <a
                href={getCallUrl()}
                id="showroom-call-now-btn"
                className="py-3 px-3 bg-[#09111e] hover:bg-[#131d31] text-[#FAFAF8] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Now</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="showroom-whatsapp-btn"
                className="py-3 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="showroom-directions-btn"
                className="py-3 px-3 bg-[#C5A059] hover:bg-[#b58f45] text-[#09111e] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Quick Showroom Enquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-sm border border-[#E5E1D8] p-6 sm:p-8">
            <div className="mb-5 space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-sans font-semibold">
                Direct Communication
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#09111e]">
                Book a Consultation or Enquire
              </h2>
              <p className="text-xs text-[#5A6372] font-sans">
                Leave your details and our team will connect with you via call or WhatsApp immediately.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-[#F3F1EC] rounded-sm border border-[#C5A059]/40 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-[#C5A059] mx-auto" />
                <h3 className="font-serif text-lg font-bold text-[#09111e]">
                  Thank You for Your Enquiry
                </h3>
                <p className="text-xs text-[#5A6372] font-sans max-w-sm mx-auto">
                  Your message has been initiated. Our team at Jagat Farm, Greater Noida will assist you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-sans text-[#09111e] underline hover:text-[#C5A059]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-sans font-medium text-[#09111e] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1D8] rounded-sm text-xs sm:text-sm text-[#09111e] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-sans font-medium text-[#09111e] mb-1">
                    Phone Number (WhatsApp Preferred) *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9936843307"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1D8] rounded-sm text-xs sm:text-sm text-[#09111e] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-interest" className="block text-xs font-sans font-medium text-[#09111e] mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="contact-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1D8] rounded-sm text-xs sm:text-sm text-[#09111e] focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                  >
                    <option value="Bridal Jewellery">Bridal Jewellery Trousseau</option>
                    <option value="Gold Jewellery">22K Gold Jewellery</option>
                    <option value="Diamond Jewellery">Diamond Solitaires & Rings</option>
                    <option value="Men's Jewellery">Men's Kada & Chains</option>
                    <option value="Old Gold Exchange">Old Gold Exchange Evaluation</option>
                    <option value="Custom Jewellery">Custom Atelier Commission</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-sans font-medium text-[#09111e] mb-1">
                    Message / Preferred Date (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share any specific design preferences or preferred consultation time..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1D8] rounded-sm text-xs sm:text-sm text-[#09111e] focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full py-3 px-4 bg-[#09111e] hover:bg-[#131d31] text-[#FAFAF8] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm border border-[#C5A059]/40"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps Integration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-sm border border-[#E5E1D8] overflow-hidden">
          <div className="p-4 sm:p-6 bg-[#09111e] text-[#FAFAF8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#C5A059]/30">
            <div>
              <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
                Interactive Map
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                Showroom Location – Jagat Farm, Greater Noida
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={getGoogleMapsViewUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="view-on-map-link"
                className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-[#FAFAF8] text-xs font-sans font-medium rounded-xs flex items-center gap-1.5 transition-colors"
              >
                <span>View on Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>

              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-map-link"
                className="px-3.5 py-2 bg-[#C5A059] hover:bg-[#b58f45] text-[#09111e] text-xs font-sans font-semibold rounded-xs flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[360px] sm:h-[450px] bg-neutral-100">
            <iframe
              title="Gopilal Jewellers Showroom Google Maps"
              src={BRAND_DATA.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
