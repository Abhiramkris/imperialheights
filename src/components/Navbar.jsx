import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, Sparkles } from 'lucide-react';
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
    { name: 'Suites', href: '#rooms' },
    { name: 'Story', href: '#welcome' },
    { name: 'Banquets', href: '#banquets' },
    { name: 'Dining', href: '#dining' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300">
        <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-[#E3DCce] shadow-xl' 
            : 'bg-[#FAF7F2]/90 backdrop-blur-md border-[#E7E0D3] shadow-md'
        }`}>
          {/* Brand Logo with Old-School Heritage Touch */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-moss-700 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-editorial text-lg font-bold tracking-tight">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-moss-900 group-hover:text-moss-700 transition-colors">
                {hotelInfo.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-brass-600 -mt-0.5">
                Kochi · Est. {hotelInfo.established}
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
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-moss-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-moss-800 bg-moss-50 border border-moss-200 hover:bg-moss-100 transition"
              title="Call Front Desk Directly"
            >
              <PhoneCall className="w-3 h-3 text-moss-700" />
              <span>Desk: {hotelInfo.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md cursor-pointer bg-moss-700 text-white hover:bg-moss-800 hover:shadow-lg active:scale-95"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-moss-700 text-white shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-neutral-800 hover:bg-neutral-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-20 left-4 right-4 bg-[#FAF7F2] rounded-3xl p-6 shadow-2xl border border-[#E3DCce] space-y-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="font-editorial text-lg font-bold text-moss-900">Ashoka Imperial</span>
              <span className="text-xs text-brass-600 font-bold uppercase tracking-wider">Kochi</span>
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
                className="w-full py-3 rounded-full bg-moss-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md"
              >
                <span>Reserve Room / Desk Rate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 rounded-full bg-white border border-[#DDD5C7] text-neutral-800 text-xs font-semibold flex items-center justify-center gap-2"
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
