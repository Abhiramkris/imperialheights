import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, MessageSquare } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'About', href: '#welcome' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300">
        <div className={`max-w-6xl mx-auto rounded-[15px] transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-[#E3DCce] shadow-lg' 
            : 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#E7E0D3] shadow-sm'
        }`}>
          {/* Brand Logo with 15px rounded badge */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-[12px] bg-moss-700 text-white flex items-center justify-center shadow-xs group-hover:bg-moss-800 transition-colors">
              <span className="font-editorial text-lg font-bold tracking-tight">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-moss-900 group-hover:text-moss-700 transition-colors">
                {hotelInfo.name}
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-brass-600 -mt-0.5">
                Kakkanad, Kochi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-wider uppercase text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-neutral-700 hover:text-moss-800 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-moss-700 transition-all duration-200 group-hover:w-full rounded-[2px]"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Gino Tourist Home, I would like to inquire about room availability.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[15px] text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition shadow-2xs"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-[15px] text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-sm cursor-pointer bg-moss-700 text-white hover:bg-moss-800 active:scale-98"
            >
              <span>Book Room</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-[12px] text-xs font-bold uppercase tracking-wider bg-moss-700 text-white shadow-2xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[12px] text-neutral-800 hover:bg-neutral-200/60 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-20 left-4 right-4 bg-[#FAF7F2] rounded-[15px] p-6 shadow-xl border border-[#E3DCce] space-y-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="font-editorial text-lg font-bold text-moss-900">{hotelInfo.name}</span>
              <span className="text-xs text-brass-600 font-semibold uppercase tracking-wider">Kakkanad</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-neutral-800 hover:text-moss-700 py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-neutral-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-[15px] bg-moss-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Reserve Room / Desk Rate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 rounded-[15px] bg-white border border-[#DDD5C7] text-neutral-800 text-xs font-semibold flex items-center justify-center gap-2 shadow-2xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-moss-700" />
                <span>Call Desk: {hotelInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
