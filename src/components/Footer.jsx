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
    <footer id="contact" className="bg-[#141E15] text-[#D8D4CC] pt-16 pb-10 border-t border-moss-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-[10px] bg-moss-700 text-white flex items-center justify-center shadow-xs">
                <span className="font-editorial text-lg font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-bold tracking-tight text-white group-hover:text-brass-400 transition-colors">
                  {hotelInfo.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brass-400">
                  Kakkanad, Kochi
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
              Clean, affordable, and well-maintained lodging in Kakkanad, Kochi. Situated near the Civil Station with rapid access to InfoPark and SmartCity.
            </p>

            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider text-moss-400 font-semibold block">
                ★ 24/7 Front Desk & Safe Parking
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a className="hover:text-brass-400 transition-colors" href="#hero">Home</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#rooms">Rooms & Tariffs</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#welcome">About Hotel</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#amenities">Amenities</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#dining">Restaurant & Bar</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#gallery">Photo Gallery</a></li>
              <li><a className="hover:text-brass-400 transition-colors" href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Location & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                <a 
                  href={hotelInfo.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {hotelInfo.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                <a href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {hotelInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {hotelInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-white transition-colors truncate">
                  {hotelInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Desk Booking */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Nearby Landmarks
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              {hotelInfo.nearbyPoints?.map((pt, i) => (
                <li key={i} className="flex items-center justify-between text-[11px] py-1 border-b border-neutral-800">
                  <span className="text-neutral-300">{pt.name}</span>
                  <span className="text-brass-400 font-mono shrink-0 ml-2">{pt.distance}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 {hotelInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#hero" className="hover:text-neutral-300 transition">Privacy</a>
            <a href="#hero" className="hover:text-neutral-300 transition">Terms</a>
            <a href="#rooms" className="hover:text-neutral-300 transition">Direct Rates</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
