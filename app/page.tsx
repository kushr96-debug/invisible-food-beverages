"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Centralized theme variables for easy reusability and updates
const theme = {
  bg: "bg-[#091612]",
  surface: "bg-[#11231D]",
  surfaceHover: "hover:bg-[#1A332B]",
  border: "border-white/5",
  borderActive: "border-[#D4FF00]/50",
  textMain: "text-white",
  textMuted: "text-gray-400",
  accentText: "text-[#D4FF00]",
  btnBg: "bg-[#D4FF00]",
  btnBgHover: "hover:bg-[#bce000]",
  btnText: "text-[#091612]",
  btnSecondaryBg: "bg-white/10",
  btnSecondaryHover: "hover:bg-white/20",
  btnSecondaryText: "text-white"
};

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Taylor Kim",
      role: "Procurement Manager",
      quote: "PremiumAg Exports delivers consistent quality and timely shipments. Their reliability and professionalism are unmatched in the market.",
      image: "https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c86047_512b1c20-0989-4488-92fa-2e09877e0525.avif"
    },
    {
      name: "Jordan Ellis",
      role: "Head of Imports",
      quote: "We count on PremiumAg Exports for dependable supply and clear communication. Their logistics expertise ensures every order runs smoothly.",
      image: "https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c8604f_195dd1c1-b56c-4ddd-9bc3-6b7fed4ee921.avif"
    },
    {
      name: "Riley Chen",
      role: "Supply Chain Director",
      quote: "Partnering with PremiumAg Exports has optimized our sourcing. Their certifications and precision give us total confidence.",
      image: "https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c8605f_3448c20c-6b93-4a15-bc4a-838189596cbe.avif"
    }
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans`}>
      
      {}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-40 overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c86078_acb18f3e-4819-4adb-a59a-7ebeac465cce.avif" 
            alt="Agricultural Field" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlays: Darken left side for text readability, and bottom to blend smoothly into the next dark section */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091612]/90 via-[#091612]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#091612]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            
            {/* Left side: Heading */}
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-[5.5rem] font-medium tracking-tight leading-[1.05]">
                Exporting excellence.<br />Supplying the world.
              </h1>
            </div>

            {/* Right side: Subtext and Buttons */}
            <div className="max-w-md lg:mb-2">
              <p className={`text-lg md:text-xl ${theme.textMuted} mb-8 leading-relaxed`}>
                Premium grains, spices, coffee, and lentils.<br />Certified quality. Trusted global partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className={`${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-8 py-3.5 font-medium transition text-center`}>
                  Browse catalog
                </Link>
                <Link href="/export-capabilities" className={`bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-3.5 font-medium transition text-center`}>
                  How we export
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Preferred by leading importers worldwide</span>
            <h2 className="text-3xl md:text-4xl font-semibold">Global trust. Premium quality. Proven results.</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex justify-center">
              <svg className="h-8 text-white" viewBox="0 0 54 16" fill="currentColor">
                <path d="M19.4,5.4h1.3v5.1h4v1.1h-5.3v-6.2ZM25,8.5c0-1.8,1.3-3.2,4-3.2s4,1.4,4,3.2-1.2,3.2-4,3.2-4-1.3-4-3.2ZM31.7,8.5c0-1.2-.9-2.2-2.7-2.2s-2.7,1-2.7,2.2.9,2.2,2.7,2.2,2.7-1,2.7-2.2ZM33.8,8.6c0-1.8,1.3-3.3,3.9-3.3s3.5,1.2,3.5,2.3,0,0,0,.2h-1.2c0,0,0,0,0-.1,0-.6-.6-1.4-2.3-1.4s-2.6,1-2.6,2.3.8,2.2,2.6,2.2,2.2-.8,2.2-1.4h0s-2.5,0-2.5,0v-.8h3.8v3.1h-1.1c0-.2,0-.8,0-1.3h0c-.3.9-1.2,1.4-2.6,1.4-2.7,0-3.7-1.5-3.7-3.1ZM42.2,8.5c0-1.8,1.3-3.2,4-3.2s4,1.4,4,3.2-1.2,3.2-4,3.2-4-1.3-4-3.2ZM48.8,8.5c0-1.2-.9-2.2-2.7-2.2s-2.7,1-2.7,2.2.9,2.2,2.7,2.2,2.7-1,2.7-2.2ZM16.3,8.5c0,1.2-.3,2.2-.8,3.1-.5.9-1.3,1.6-2.3,2.1-1,.5-2.2.8-3.6.8s-2.5-.2-3.5-.7c-1-.5-1.8-1.2-2.4-2.1s-.9-1.9-.9-3.2.3-2.2.8-3.1c.5-.9,1.3-1.6,2.3-2.1,1-.5,2.2-.8,3.6-.8s2.5.2,3.5.7c1,.5,1.8,1.2,2.4,2.1s.9,1.9.9,3.2ZM15,8.5c0-1-.2-1.8-.6-2.5-.4-.7-1-1.3-1.9-1.7-.8-.4-1.8-.6-2.9-.6s-2,.2-2.8.6c-.8.4-1.4.9-1.9,1.6-.4.7-.7,1.6-.7,2.6s.2,1.8.6,2.5c.4.7,1,1.3,1.9,1.7.8.4,1.8.6,2.9.6s2-.2,2.8-.6,1.4-.9,1.9-1.6c.4-.7.7-1.6.7-2.6ZM13,9.5c-.1.8-.5,1.3-1.1,1.7s-1.3.6-2.2.6-1.9-.3-2.6-.9c-.6-.6-1-1.4-1-2.4s.1-1.2.4-1.7c.3-.5.7-.9,1.2-1.2.5-.3,1.2-.4,1.9-.4,1.7,0,2.7.7,3.1,2.1l-1.4.2c-.1-.4-.4-.7-.6-.9s-.7-.3-1.2-.3-1.2.2-1.6.6c-.4.4-.6.9-.6,1.6s.2,1.3.5,1.6c.4.4.9.6,1.6.6s1,0,1.3-.3c.3-.2.5-.5.6-.9h1.4Z"></path>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg className="h-8 text-white" viewBox="0 0 54 16" fill="currentColor">
                <path d="M17.4,5.4h5.8v1h-4.5v1.6h3.5v.8h-3.5v1.7h4.5v1h-5.8v-6.2ZM23.8,8.6c0-1.8,1.3-3.3,3.9-3.3s3.5,1.2,3.5,2.3,0,0,0,.2h-1.2c0,0,0,0,0-.1,0-.6-.6-1.4-2.3-1.4s-2.6,1-2.6,2.3.8,2.2,2.6,2.2,2.2-.8,2.2-1.4h0s-2.5,0-2.5,0v-.8h3.8v3.1h-1.1c0-.2,0-.8,0-1.3h0c-.3.9-1.2,1.4-2.6,1.4-2.7,0-3.7-1.5-3.7-3.1ZM32.1,8.6c0-1.8,1.3-3.3,3.9-3.3s3.5,1.2,3.5,2.3,0,0,0,.2h-1.2c0,0,0,0,0-.1,0-.6-.6-1.4-2.3-1.4s-2.6,1-2.6,2.3.8,2.2,2.6,2.2,2.2-.8,2.2-1.4h0s-2.5,0-2.5,0v-.8h3.8v3.1h-1.1c0-.2,0-.8,0-1.3h0c-.3.9-1.2,1.4-2.6,1.4-2.7,0-3.7-1.5-3.7-3.1ZM40.5,9.5h1.2c0,.6.3,1.2,2.3,1.2s2.3-.5,2.3-1-.2-.5-.6-.6c-.4-.1-1.5-.1-2.2-.2-.8,0-1.8-.1-2.3-.4-.5-.2-.8-.7-.8-1.3,0-1.1,1.1-2,3.5-2s3.4,1,3.4,2.1h-1.2c0-.7-.5-1.2-2.2-1.2s-2.2.4-2.2,1,.2.5.5.6c.4.1,1.4.2,2.1.2.9,0,1.8.1,2.3.3.6.2.9.7.9,1.3,0,.9-.5,2.1-3.6,2.1s-3.5-1.4-3.5-2.2ZM13,5.7l-3.1,1.3,1.8-3.7c-.9-1.1-2-1.8-3.1-1.8-2.8,0-5,3.8-5,7.3s2.2,5.5,5,5.5,5-1.9,5-5.5-.2-2.1-.6-3.1Z"></path>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg className="h-8 text-white" viewBox="0 0 54 16" fill="currentColor">
                <path d="M24.4,5.4h2.6c1.5,0,2.4.8,2.4,2.2s-.8,2.1-2.3,2.1h-1.6v1.9h-1.1v-6.2ZM27,8.9c.8,0,1.3-.4,1.3-1.3s-.5-1.3-1.4-1.3h-1.4v2.5h1.5ZM33.8,10.2h-2.9l-.5,1.4h-1.2l2.5-6.2h1.4l2.5,6.2h-1.3l-.5-1.4ZM33.5,9.4l-1.1-3.1h0l-1.2,3.1h2.3ZM40.6,10.2h-2.9l-.5,1.4h-1.2l2.5-6.2h1.4l2.5,6.2h-1.3l-.5-1.4ZM40.3,9.4l-1.1-3.1h0l-1.2,3.1h2.3ZM43.3,5.4h1.1v3.4h0l3.3-3.4h1.4l-2.7,2.8,2.9,3.4h-1.5l-2.2-2.6-1.2,1.1v1.5h-1.1v-6.2ZM4.9,6.3h-1.9v-.9h5v.9h-1.9v5.3h-1.1v-5.3ZM8.7,5.4h1.1v2.5h3.3v-2.5h1.1v6.2h-1.1v-2.8h-3.3v2.8h-1.1v-6.2ZM15.5,5.4h4.2v.9h-3.1v1.8h2.5v.7h-2.5v1.8h3.2v.9h-4.3v-6.2ZM51.6,14.1h-30V2.6h30v11.5ZM22.6,13.1h28V3.6h-28v9.5Z"></path>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg className="h-8 text-white" viewBox="0 0 54 16" fill="currentColor">
                <path d="M22,4.7h1.4v6.9h-1.4v-6.9ZM24.9,4.7h3.4c3.2,0,4.3,1.6,4.3,3.4s-1.1,3.4-4,3.4h-3.7v-6.9ZM28.5,10.5c1.8,0,2.6-.8,2.6-2.3s-.6-2.3-2.8-2.3h-2v4.6h2.2ZM33.7,4.7h6.4v1.1h-5v1.8h3.9v.9h-3.9v1.9h5.1v1.1h-6.5v-6.9ZM48,10.1h-4.7l-.9,1.5h-1.5l4-6.9h1.7l4,6.9h-1.7l-.9-1.5ZM47.5,9.1l-1.8-3.2h0l-1.8,3.2h3.7ZM2.6,2.7v11.1h15.1V2.7H2.6ZM10.1,12.6c-3.6,0-6.5-1.9-6.5-4.3s2.9-4.3,6.5-4.3,6.5,1.9,6.5,4.3-2.9,4.3-6.5,4.3Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={`py-24 ${theme.surface}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-semibold mb-4">Export performance at a glance</h2>
            <p className={`text-lg ${theme.textMuted}`}>Industry-leading reliability and scale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-2xl ${theme.bg} border ${theme.border} text-center`}>
              <div className={`${theme.textMuted} font-medium tracking-wide uppercase text-sm mb-2`}>On-time shipments</div>
              <div className={`text-6xl font-bold ${theme.accentText}`}>95%</div>
            </div>
            <div className={`p-8 rounded-2xl ${theme.bg} border ${theme.border} text-center`}>
              <div className={`${theme.textMuted} font-medium tracking-wide uppercase text-sm mb-2`}>Exports annually</div>
              <div className={`text-6xl font-bold ${theme.accentText}`}>2,400</div>
            </div>
            <div className={`p-8 rounded-2xl ${theme.bg} border ${theme.border} text-center`}>
              <div className={`${theme.textMuted} font-medium tracking-wide uppercase text-sm mb-2`}>Tons shipped monthly</div>
              <div className={`text-6xl font-bold ${theme.accentText}`}>1.2M</div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Global trust, proven results</h2>
            <p className={`text-lg ${theme.textMuted}`}>Hear from our international partners</p>
          </div>

          <div className="relative max-w-4xl mx-auto px-12 md:px-16">
            <button onClick={showPreviousTestimonial} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-[#D4FF00]/60 hover:bg-[#D4FF00] hover:text-[#091612]" aria-label="Previous testimonial">‹</button>
            <button onClick={showNextTestimonial} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-[#D4FF00]/60 hover:bg-[#D4FF00] hover:text-[#091612]" aria-label="Next testimonial">›</button>
            {/* Active Testimonial Card */}
            <div className={`p-10 md:p-14 rounded-3xl ${theme.surface} border ${theme.border} mb-8 flex flex-col md:flex-row gap-10 items-center shadow-2xl shadow-black/20`}>
              <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-[#091612]">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <svg className={`w-10 h-10 ${theme.accentText} mb-6 opacity-50`} fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"></path>
                </svg>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  {`“${testimonials[activeTestimonial].quote}”`}
                </p>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className={theme.textMuted}>{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Selectors */}
            <div className="flex justify-center gap-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? `w-8 ${theme.btnBg}` : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={`py-24 ${theme.surface} border-t ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Your trusted export source</span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">Premium crops. Delivered worldwide.</h2>
            <p className={`text-xl ${theme.textMuted} max-w-2xl`}>
              Supplying certified grains, spices, coffee, tea, and lentils to global importers. Explore our catalog and export services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 - Large Image Card */}
            <Link href="/products/premium-rice" className={`lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden ${theme.bg} border ${theme.border} group cursor-pointer ${theme.surfaceHover} transition-colors block`}>
              <div className="aspect-video lg:aspect-[4/3] relative overflow-hidden">
                <img src="https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c860ae_e93d3f3e-4f5a-4b80-b7de-23f5a806efe5.avif" alt="Grains" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs tracking-wider uppercase mb-4">Grains</span>
                <h3 className="text-2xl font-semibold mb-2">Certified grains, global supply</h3>
                <p className={theme.textMuted}>Rice, wheat, and specialty grains for international buyers.</p>
              </div>
            </Link>

            {/* Feature 2 - Small Image Card */}
            <Link href="/products/whole-spices" className={`rounded-2xl overflow-hidden ${theme.bg} border ${theme.border} group cursor-pointer ${theme.surfaceHover} transition-colors block`}>
              <div className="aspect-video relative overflow-hidden">
                <img src="https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c86098_ff17e67d-110e-4d36-a37e-2e73c6720cc8.avif" alt="Spices" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs tracking-wider uppercase mb-4">Spices</span>
                <h3 className="text-lg font-semibold mb-2">Premium masala blends</h3>
                <p className={`text-sm ${theme.textMuted}`}>Pure, expertly processed spices for export.</p>
              </div>
            </Link>

            {/* Feature 3 - Small Image Card */}
            <Link href="/products/herbs" className={`rounded-2xl overflow-hidden ${theme.bg} border ${theme.border} group cursor-pointer ${theme.surfaceHover} transition-colors block`}>
              <div className="aspect-video relative overflow-hidden">
                <img src="https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c86073_15434d2b-cecd-411e-b1f5-3fbe11627a09.avif" alt="Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs tracking-wider uppercase mb-4">Coffee & Tea</span>
                <h3 className="text-lg font-semibold mb-2">Fresh beans, global shipping</h3>
                <p className={`text-sm ${theme.textMuted}`}>Premium coffee and tea, shipped direct.</p>
              </div>
            </Link>

            {/* Feature Text Blocks */}
            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} cursor-pointer ${theme.surfaceHover} transition-colors flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">Flexible export options</h3>
              <p className={`text-sm ${theme.textMuted}`}>Custom shipping and incoterms for every order.</p>
            </div>
            
            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} cursor-pointer ${theme.surfaceHover} transition-colors flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">End-to-end logistics</h3>
              <p className={`text-sm ${theme.textMuted}`}>Efficient handling from origin to port.</p>
            </div>

            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} cursor-pointer ${theme.surfaceHover} transition-colors flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">Global compliance</h3>
              <p className={`text-sm ${theme.textMuted}`}>Certified processes for international standards.</p>
            </div>

            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} cursor-pointer ${theme.surfaceHover} transition-colors flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">Scalable supply chain</h3>
              <p className={`text-sm ${theme.textMuted}`}>Consistent volume for large-scale buyers.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}