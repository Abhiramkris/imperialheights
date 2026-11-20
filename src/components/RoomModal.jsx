import React, { useState } from 'react';
import { X, Bed, Users, Maximize2, Check, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function RoomModal({ room, onClose, onBookRoom }) {
  if (!room) return null;

  const [activeImage, setActiveImage] = useState(room.image);
  const galleryList = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-[15px] max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DDD5C7] text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-[10px] bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Room Active Image Frame */}
        <div className="relative h-64 sm:h-76 w-full overflow-hidden bg-neutral-900 rounded-t-[15px]">
          <img
            src={activeImage}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

          {/* Price Tag */}
          <div className="absolute bottom-3 left-4 z-10 text-white">
            <span className="text-[10px] uppercase font-bold tracking-wider text-brass-400 block">
              Direct Desk Rate
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-neutral-300">/ night (+ taxes)</span>
            </div>
          </div>
        </div>

        {/* Image Thumbnail Selector if multiple photos available */}
        {galleryList.length > 1 && (
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] border-b border-neutral-200 overflow-x-auto">
            {galleryList.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(imgUrl)}
                className={`relative w-14 h-11 shrink-0 rounded-[8px] overflow-hidden border-2 transition cursor-pointer ${
                  activeImage === imgUrl ? 'border-moss-700 shadow-xs' : 'border-neutral-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-editorial text-neutral-900">
              {room.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
              {room.longDescription || room.description}
            </p>
          </div>

          {/* Specifications Grid with 10px rounded cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-2.5 rounded-[10px] bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <Bed className="w-4 h-4 text-moss-700 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-semibold text-neutral-500 block">Bed Type</span>
              <span className="text-xs font-bold text-neutral-800">{room.bed}</span>
            </div>
            <div className="p-2.5 rounded-[10px] bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <span className="text-xs font-bold text-moss-700 block mb-1">A/C</span>
              <span className="text-[10px] uppercase font-semibold text-neutral-500 block">Climate</span>
              <span className="text-xs font-bold text-neutral-800">{room.climate}</span>
            </div>
            <div className="p-2.5 rounded-[10px] bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <Users className="w-4 h-4 text-moss-700 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-semibold text-neutral-500 block">Capacity</span>
              <span className="text-xs font-bold text-neutral-800">{room.capacity}</span>
            </div>
            <div className="p-2.5 rounded-[10px] bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <Maximize2 className="w-4 h-4 text-moss-700 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-semibold text-neutral-500 block">Area</span>
              <span className="text-xs font-bold text-neutral-800">{room.size}</span>
            </div>
          </div>

          {/* Inclusions Checklist */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Room Amenities & Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-moss-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-moss-700 shrink-0 mt-0.5" />
                <span>High-speed complimentary Wi-Fi</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-moss-700 shrink-0 mt-0.5" />
                <span>Free on-site parking with CCTV</span>
              </div>
            </div>
          </div>

          {/* Action CTAs with 15px radius */}
          <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-[15px] bg-moss-700 hover:bg-moss-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Book This Room</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto py-2.5 px-5 rounded-[15px] bg-[#FAF7F2] hover:bg-neutral-100 border border-[#DDD5C7] text-neutral-800 font-semibold text-xs transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-moss-700" />
              <span>Call Front Desk</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500">
            <ShieldCheck className="w-3.5 h-3.5 text-moss-700" />
            <span>Guaranteed Direct Desk Rates · Check-in {hotelInfo.checkIn} · Check-out {hotelInfo.checkOut}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
