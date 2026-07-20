"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { catalogData, getProductImage, makeSlug } from '@/lib/products';

// Centralized theme variables for easy reusability and updates
const theme = {
  bg: "bg-[#091612]",
  surface: "bg-[#132620]", // Slightly elevated dark green for cards
  surfaceHover: "hover:bg-[#1A332B]",
  border: "border-white/10",
  borderActive: "border-[#D4FF00]/50",
  textMain: "text-white",
  textMuted: "text-gray-400",
  accentText: "text-[#D4FF00]",
  btnBg: "bg-[#D4FF00]",
  btnBgHover: "hover:bg-[#bce000]",
  btnText: "text-[#091612]",
  btnSecondaryBg: "bg-white/5",
  btnSecondaryHover: "hover:bg-white/10",
  btnSecondaryText: "text-white"
};

export default function ProductsCatalog({ initialCategory = catalogData[0].id }: { initialCategory?: string }) {
  // Set the provided category as the default active tab
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Helper to get the currently selected category object
  const activeData = catalogData.find(c => c.id === activeCategory) || catalogData[0];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans`}>
      
      {/* 
        Note: Assuming you have <Navbar /> in your layout.tsx as discussed previously. 
        If testing this alone, you can paste the Navbar code back here.
      */}

      

      <section id="catalog" className="border-t border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Comprehensive Portfolio</span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Global quality. Trusted supply.</h2>
            <p className={`text-base leading-7 sm:text-xl ${theme.textMuted}`}>
              Explore our diverse range of certified agricultural products, organized for your sourcing convenience.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            
            {/* Left Sidebar Navigation */}
            <div className="flex w-full gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:h-fit lg:w-1/4 lg:flex-col lg:overflow-visible lg:pb-0">
              {catalogData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`min-w-max cursor-pointer rounded-xl border-b-4 px-4 py-3 text-left transition-all duration-200 lg:min-w-0 lg:border-b-0 lg:border-l-4 lg:px-6 lg:py-4 ${
                    activeCategory === category.id 
                      ? `${theme.surface} border-[#D4FF00] text-white shadow-lg` 
                      : `border-transparent ${theme.textMuted} hover:bg-white/5 hover:text-white`
                  }`}
                >
                  <span className="block text-sm font-bold sm:text-base lg:text-lg">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Right Dynamic Content Area */}
            <div className="w-full lg:w-3/4">
              
              {/* Category Header Card */}
              <div className={`rounded-2xl overflow-hidden mb-10 ${theme.surface} border ${theme.border}`}>
                <div className="relative h-56 sm:h-64">
                  <img 
                    src={activeData.image}
                    alt={activeData.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#132620] to-transparent`}></div>
                  <div className="absolute bottom-0 left-0 p-5 sm:p-8">
                    <h3 className="mb-2 text-3xl font-bold text-white sm:text-4xl">{activeData.name}</h3>
                    <p className={`text-sm leading-6 sm:text-lg ${theme.textMuted}`}>{activeData.desc}</p>
                  </div>
                </div>
              </div>

              {/* Data Rendering Logic */}
              
              {/* Scenario 1: Subcategories exist (e.g., Dehydrated Products) */}
              {activeData.subcategories && (
                <div className="space-y-12">
                  {activeData.subcategories.map((sub, idx) => (
                    <div key={idx}>
                      <h4 className={`text-xl font-bold mb-6 pb-2 border-b ${theme.border} text-[#D4FF00]`}>
                        {sub.name}
                      </h4>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {sub.items.map((item, i) => (
                          <Link key={i} href={`/products/${activeCategory}/${makeSlug(item)}`} className={`p-4 rounded-xl ${theme.surface} border ${theme.border} ${theme.surfaceHover} transition-colors cursor-pointer group flex items-center gap-4`}>
                            <img src={getProductImage(item, activeData)} alt={item} className="h-14 w-14 rounded-lg object-cover border border-white/10 transition-transform duration-500 group-hover:scale-125" />
                            <span className="font-medium text-gray-200 group-hover:text-white flex-1">{item}</span>
                            <svg className={`w-4 h-4 ${theme.textMuted} group-hover:text-[#D4FF00] transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Scenario 2: Direct Items array (e.g., Whole Spices, Grains) */}
              {activeData.items && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {activeData.items.map((item, i) => (
                    <Link key={i} href={`/products/${activeCategory}/${makeSlug(item)}`} className={`p-4 rounded-xl ${theme.surface} border ${theme.border} ${theme.surfaceHover} transition-colors cursor-pointer group flex items-center gap-4`}>
                      <img src={getProductImage(item, activeData)} alt={item} className="h-14 w-14 rounded-lg object-cover border border-white/10 transition-transform duration-500 group-hover:scale-125" />
                      <span className="font-medium text-gray-200 group-hover:text-white flex-1">{item}</span>
                      <svg className={`w-4 h-4 ${theme.textMuted} group-hover:text-[#D4FF00] transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}