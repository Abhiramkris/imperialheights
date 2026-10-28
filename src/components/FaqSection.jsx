import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqList } from '../data/hotelData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-600 font-medium max-w-lg mx-auto">
            Everything you need to know about your arrival, dining, room rates, and hospitality services in Kochi.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#E4DECf] rounded-2xl bg-[#FAF7F2] overflow-hidden transition-all duration-300 shadow-xs hover:border-moss-600"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-white cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-editorial font-bold text-neutral-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-[#D5CEC2] flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-moss-700 text-white border-moss-700' : 'bg-white text-neutral-600'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-700 font-normal leading-relaxed border-t border-[#EAE4D8] animate-fade-in bg-white">
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
