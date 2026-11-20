import React from 'react';
import { ArrowRight, MapPin, Check, Building2 } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function WelcomeStory({ onOpenBooking }) {
  return (
    <section id="welcome" className="py-16 lg:py-20 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Hotel Photo Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[15px] overflow-hidden shadow-md border border-[#E0D8CB] bg-neutral-100 aspect-4/3 group">
              <img
                src="/images/gino/gino_03_1I5BpHTm.jpg"
                alt="Gino Tourist Home Kakkanad Executive Guest Lounge"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-black/60 backdrop-blur-xs px-3 py-1 rounded-[8px] font-medium border border-white/20">
                  Guest Waiting Lounge & Reception
                </span>
                <span className="font-semibold text-brass-400">Kakkanad, Kochi</span>
              </div>
            </div>

            {/* Small Inset Secondary Photo for Rich Hospitality Context */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-36 rounded-[15px] overflow-hidden shadow-lg border-2 border-white bg-neutral-900">
              <img
                src="/images/gino/gino_05_1S8IhMJ3.jpg"
                alt="Gino Tourist Home Pebble Walkway and Green Wall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
                About The Property
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900 tracking-tight leading-tight">
                Welcome to <span className="text-moss-700">{hotelInfo.name}</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
              Situated in the prominent hub of Kakkanad, Gino Tourist Home offers clean, comfortable, and well-maintained lodging for corporate travelers, families, and solo visitors to Kochi.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Conveniently located just 2 minutes from the Kakkanad Civil Station and within a short drive of InfoPark, SmartCity, and shopping areas. We provide a peaceful retreat with modern air-conditioned rooms, an in-house restaurant, generous on-site vehicle parking, and friendly 24/7 front desk service.
            </p>

            {/* Highlights Grid with 15px rounded cards */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-[15px] bg-[#FAF8F5] border border-[#E4DECf]">
                <span className="block font-editorial text-xl font-bold text-moss-700">Prime Location</span>
                <span className="text-xs text-neutral-600 font-medium mt-0.5 block">2 Mins from Civil Station</span>
              </div>
              <div className="p-3.5 rounded-[15px] bg-[#FAF8F5] border border-[#E4DECf]">
                <span className="block font-editorial text-xl font-bold text-moss-700">Direct Rates</span>
                <span className="text-xs text-neutral-600 font-medium mt-0.5 block">Zero Commission Desk Booking</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#rooms"
                className="px-6 py-3 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-wider font-bold rounded-[15px] shadow-sm transition-all duration-200 flex items-center gap-2 active:scale-98"
              >
                <span>View Rooms & Rates</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gallery"
                className="px-5 py-3 text-xs uppercase tracking-wider font-bold text-neutral-700 hover:text-moss-700 rounded-[15px] border border-neutral-300 hover:border-moss-600 transition flex items-center gap-1.5"
              >
                <span>Property Gallery</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
