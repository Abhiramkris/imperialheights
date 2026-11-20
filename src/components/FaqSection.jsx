import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqList } from '../data/hotelData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-wider text-moss-700 font-bold inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Practical details regarding check-in timings, parking, amenities, and direct desk reservations.
          </p>
        </div>

        {/* Accordion Stack with 15px radius */}
        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#E4DECf] rounded-[15px] bg-[#FAF8F5] overflow-hidden transition-all duration-200 shadow-2xs hover:border-moss-600"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 transition-colors hover:bg-white cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-editorial font-bold text-neutral-900">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-[8px] border border-[#D5CEC2] flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-moss-700 text-white border-moss-700' : 'bg-white text-neutral-600'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed border-t border-[#EAE4D8] animate-fade-in bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
