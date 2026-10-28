import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#141E15] text-[#D8D4CC] pt-20 pb-12 border-t border-moss-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-moss-700 text-white flex items-center justify-center shadow-sm">
                <span className="font-editorial text-xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-bold tracking-tight text-white group-hover:text-brass-400 transition-colors">
                  {hotelInfo.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-brass-400">
                  Kochi, Kerala · Est. {hotelInfo.established}
                </span>
              </div>
            </a>

            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              A peaceful heritage sanctuary in the heart of Kochi offering boutique rooms, conference banquets, and authentic Malabar dining.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-brass-400 font-semibold block">
                ★ Boutique Hospitality in Kochi
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-light">
              <li><a className="hover:text-brass-400 transition-colors" href="#hero">Home</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#rooms">Rooms & Suites</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#welcome">Our Story</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#banquets">Banquets & Halls</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#dining">Dining</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#amenities">Amenities</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#gallery">Photo Gallery</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brass-400 shrink-0 mt-1" />
                <a 
                  href={hotelInfo.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {hotelInfo.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                <a href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {hotelInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brass-400 shrink-0" />
                <a href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {hotelInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-white transition-colors truncate">
                  {hotelInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Newsletter
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Stay in the know. Receive seasonal invitations, curated cultural itineraries, and member desk rates.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-moss-900 border border-moss-700 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-full py-2.5 pl-4 pr-11 text-xs text-white placeholder:text-neutral-500 focus:outline-hidden focus:border-brass-400 transition"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-moss-700 hover:bg-moss-600 text-white flex items-center justify-center transition cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-neutral-500 block">
                  We value privacy. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© 2026 {hotelInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-neutral-300 transition">Privacy Policy</a>
            <a href="#hero" className="hover:text-neutral-300 transition">Terms of Service</a>
            <a href="#rooms" className="hover:text-neutral-300 transition">Direct Desk Rates</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
