"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { getCategory, getProductImage } from '@/lib/products';

// Centralized theme variables for easy reusability and updates
const theme = {
  bg: "theme-page",
  surface: "theme-surface",
  surfaceHover: "theme-surface-hover",
  border: "theme-border",
  borderActive: "theme-active-border",
  textMain: "theme-text",
  textMuted: "theme-muted",
  accentText: "theme-accent",
  btnBg: "theme-button",
  btnBgHover: "",
  btnText: "",
  btnSecondaryBg: "theme-secondary",
  btnSecondaryHover: "",
  btnSecondaryText: ""
};

// Custom Hook for Staggered Scroll Reveal
function useScrollReveal(): [React.RefObject<HTMLElement | null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current); // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [domRef, isVisible];
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll reveal refs
  const [statsRef, statsVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();

  // Typing Effect State
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingWords = ["excellence.", "quality.", "reliability."];
  
  const targetText = "excellence quality!";
  useEffect(() => {
    // Only set a timeout if we haven't reached the full text length yet
    if (typewriterText.length < targetText.length) {
      const timer = setTimeout(() => {
        setTypewriterText(targetText.substring(0, typewriterText.length + 1));
      }, 100); // Typing speed in milliseconds (adjust to make it faster/slower)
      
      return () => clearTimeout(timer);
    }
  }, [typewriterText]);

  const premiumRice = getCategory('premium-rice');
  const wholeSpices = getCategory('whole-spices');
  const herbs = getCategory('herbs');
  const basmatiImage = premiumRice ? getProductImage('Premium Basmati Rice', premiumRice) : '/premium-rice.png';
  const turmericImage = wholeSpices ? getProductImage('Turmeric', wholeSpices) : '/whole-spices.png';
  const moringaImage = herbs ? getProductImage('Moringa Powder', herbs) : '/herbs.png';

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
    }, 4000); // Increased slightly for better reading time
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans`}>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-0 py-20 sm:py-28 lg:min-h-[90vh] lg:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.prod.website-files.com/6a5a98987cd29167503c9713/6a5a99bba9b7db7c12c86078_acb18f3e-4819-4adb-a59a-7ebeac465cce.avif" 
            alt="Agricultural Field" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 theme-hero-gradient-x"></div>
          <div className="absolute inset-0 theme-hero-gradient-y"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-12">
            
            {/* Left side: Heading with Typing Effect */}
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.5rem]">
                Exporting <span className={`${theme.accentText} inline sm:inline-block sm:min-w-[360px] lg:min-w-[400px]`}>{typewriterText}<span className="animate-blink">|</span></span><br />
                Supplying the world.
              </h1>
            </div>

            {/* Right side: Subtext and Buttons */}
            <div className="max-w-md lg:mb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className={`mb-8 text-base leading-relaxed sm:text-lg md:text-xl ${theme.textMuted}`}>
                Premium grains, spices, coffee, and lentils.<br />Certified quality. Trusted global partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className={`${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-8 py-3.5 font-medium transition text-center rounded-sm`}>
                  Browse catalog
                </Link>
                <Link href="/export-capabilities" className={`bg-transparent border theme-border theme-secondary px-8 py-3.5 font-medium transition text-center rounded-sm`}>
                  How we export
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS SECTION */}
      <section className="py-20 border-t theme-border">
        {/* ... (Keep existing trust logos code identical) ... */}
      </section>

      {/* PERFORMANCE STATS SECTION (Staggered Scroll) */}
      <section className={`py-16 sm:py-20 lg:py-24 ${theme.surface}`} ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Export performance at a glance</h2>
            <p className={`text-lg ${theme.textMuted}`}>Industry-leading reliability and scale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-2xl ${theme.bg} border ${theme.border} text-center transition-all duration-700 delay-100 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className={`${theme.textMuted} font-medium tracking-wide uppercase text-sm mb-2`}>On-time shipments</div>
              <div className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${theme.accentText}`}>95%</div>
            </div>
            <div className={`p-8 rounded-2xl ${theme.bg} border ${theme.border} text-center transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className={`${theme.textMuted} font-medium tracking-wide uppercase text-sm mb-2`}>Exports annually</div>
              <div className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${theme.accentText}`}>2,400</div>
            </div>
            <div className={`p-8 rounded-2xl ${theme.bg} border ${theme.border} text-center transition-all duration-700 delay-300 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className={`${theme.textMuted} font-medium tracking-wide uppercase text-sm mb-2`}>Tons shipped monthly</div>
              <div className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${theme.accentText}`}>1.2M</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24">
        {/* ... (Keep existing testimonials code identical) ... */}
      </section>

      {/* FEATURE GRID SECTION (Staggered Scroll + Enhanced Image Hover) */}
      <section className={`py-16 sm:py-20 lg:py-24 ${theme.surface} border-t ${theme.border}`} ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-16 transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Your trusted export source</span>
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">Premium crops. Delivered worldwide.</h2>
            <p className={`max-w-2xl text-base leading-7 sm:text-xl ${theme.textMuted}`}>
              Supplying certified grains, spices, coffee, tea, and lentils to global importers. Explore our catalog and export services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 - Large Image Card */}
            <Link 
              href="/products/premium-rice" 
              className={`lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden ${theme.bg} border ${theme.border} group cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-100 ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} block`}
            >
              <div className="aspect-video lg:aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 theme-accent-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                <img 
                  src={basmatiImage} 
                  alt="Premium Basmati Rice" 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110 transition-all duration-700 ease-out" 
                />
              </div>
              <div className="relative z-20 p-6 sm:p-8">
                <span className="inline-block px-3 py-1 theme-secondary rounded-full text-xs tracking-wider uppercase mb-4 group-hover:theme-button transition-colors">Grains</span>
                <h3 className="text-2xl font-semibold mb-2 group-hover:theme-accent transition-colors">Certified grains, global supply</h3>
                <p className={theme.textMuted}>Rice, wheat, and specialty grains for international buyers.</p>
              </div>
            </Link>

            {/* Feature 2 - Small Image Card */}
            <Link 
              href="/products/whole-spices" 
              className={`rounded-2xl overflow-hidden ${theme.bg} border ${theme.border} group cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-200 ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} block`}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 theme-accent-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                <img 
                  src={turmericImage} 
                  alt="Turmeric" 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-1 group-hover:brightness-110 transition-all duration-700 ease-out" 
                />
              </div>
              <div className="p-6 relative z-20">
                <span className="inline-block px-3 py-1 theme-secondary rounded-full text-xs tracking-wider uppercase mb-4 group-hover:theme-button transition-colors">Spices</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:theme-accent transition-colors">Whole spice excellence</h3>
                <p className={`text-sm ${theme.textMuted}`}>Pure, expertly processed spices for export.</p>
              </div>
            </Link>

            {/* Feature 3 - Small Image Card */}
            <Link 
              href="/products/herbs" 
              className={`rounded-2xl overflow-hidden ${theme.bg} border ${theme.border} group cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-300 ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} block`}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 theme-accent-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                <img 
                  src={moringaImage} 
                  alt="Moringa Powder" 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110 transition-all duration-700 ease-out" 
                />
              </div>
              <div className="p-6 relative z-20">
                <span className="inline-block px-3 py-1 theme-secondary rounded-full text-xs tracking-wider uppercase mb-4 group-hover:theme-button transition-colors">Herbs</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:theme-accent transition-colors">Clean herbal powders</h3>
                <p className={`text-sm ${theme.textMuted}`}>Pure herbal ingredients for export.</p>
              </div>
            </Link>

            {/* Feature Text Blocks */}
            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} theme-hover-border cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-[400ms] ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">Flexible export options</h3>
              <p className={`text-sm ${theme.textMuted}`}>Custom shipping and incoterms for every order.</p>
            </div>
            
            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} theme-hover-border cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-[500ms] ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">End-to-end logistics</h3>
              <p className={`text-sm ${theme.textMuted}`}>Efficient handling from origin to port.</p>
            </div>

            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} theme-hover-border cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-[600ms] ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">Global compliance</h3>
              <p className={`text-sm ${theme.textMuted}`}>Certified processes for international standards.</p>
            </div>

            <div className={`rounded-2xl p-6 ${theme.bg} border ${theme.border} theme-hover-border cursor-pointer ${theme.surfaceHover} transition-all duration-700 delay-[700ms] ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex flex-col justify-center`}>
              <h3 className="text-lg font-semibold mb-2">Scalable supply chain</h3>
              <p className={`text-sm ${theme.textMuted}`}>Consistent volume for large-scale buyers.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}