"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { catalogData, getProductImage, makeSlug } from "@/lib/products";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const featuredCategoryIds = ["premium-rice", "grains-pulses", "whole-spices"];
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Export", href: "/export-capabilities" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const menuColumns = featuredCategoryIds.map((categoryId) => {
  const category = catalogData.find((item) => item.id === categoryId) ?? catalogData[0];
  const products = (category.items ?? category.subcategories?.flatMap((sub) => sub.items) ?? []).slice(0, 3);

  return {
    title: category.id === "premium-rice" ? "Grains" : category.id === "grains-pulses" ? "Lentils" : "Spices",
    href: `/products/${category.id}`,
    image: category.image,
    products: products.map((name) => ({
      name,
      href: `/products/${category.id}/${makeSlug(name)}`,
      desc: category.summary,
      image: getProductImage(name, category),
    })),
  };
});

function DownArrow() {
  return (
    <svg className="h-4 w-4 transition duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-navbar sticky top-0 z-50 border-b shadow-2xl backdrop-blur">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 py-3 sm:min-h-20 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3 sm:gap-4">
          <Logo />
          <ThemeToggle />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <div className="group">
            <Link href="/products" className="nav-link flex items-center gap-2 text-sm font-semibold transition" aria-haspopup="true">
              Products
              <DownArrow />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full w-[min(92vw,1120px)] -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid gap-6 overflow-hidden rounded-3xl border border-emerald-300/10 bg-[#042b24] p-8 shadow-2xl shadow-black/35 ring-1 ring-white/5 lg:grid-cols-3">
                {menuColumns.map((column) => (
                  <div key={column.title} className="relative overflow-hidden rounded-2xl border border-white/5 bg-emerald-950/40 p-6">
                    <Image src={column.image} alt="" fill sizes="33vw" className="object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#03251f]/95 via-[#03251f]/88 to-[#07523f]/75" />
                    <div className="relative">
                      <Link href={column.href} className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-100/65 transition hover:text-emerald-200">
                        {column.title}
                      </Link>
                      <div className="mt-7 space-y-5">
                        {column.products.map((product) => (
                          <Link key={product.name} href={product.href} className="group/item -m-2 flex gap-4 rounded-2xl p-2 transition hover:bg-white/5 focus:bg-white/5 focus:outline-none">
                            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-emerald-200/20 bg-white/10">
                              <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover transition-transform duration-500 group-hover/item:scale-125" />
                            </span>
                            <span>
                              <span className="block text-lg font-extrabold leading-tight text-white transition group-hover/item:text-emerald-300">{product.name}</span>
                              <span className="mt-1 block text-sm leading-6 text-emerald-50/70">{product.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="nav-link text-sm font-semibold transition">{link.label}</Link>)}
        </div>
        <button
          type="button"
          className="nav-menu-button inline-flex h-11 w-11 items-center justify-center rounded-xl border transition md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-5 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      <div className={`${isOpen ? "grid" : "hidden"} mobile-nav-panel border-t px-4 pb-5 md:hidden`}>
        <Link onClick={closeMenu} href="/products" className="rounded-2xl bg-[#D4FF00] px-5 py-3 text-center font-bold text-[#091612]">Browse products</Link>
        <div className="mt-4 grid gap-2">
          {catalogData.map((category) => (
            <Link onClick={closeMenu} key={category.id} href={`/products/${category.id}`} className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-emerald-50/80 transition hover:border-[#D4FF00]/40 hover:text-[#D4FF00]">
              {category.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
          {navLinks.map((link) => <Link onClick={closeMenu} key={link.href} href={link.href} className="rounded-xl px-4 py-3 font-semibold text-emerald-50/80 transition hover:bg-white/5 hover:text-[#D4FF00]">{link.label}</Link>)}
        </div>
      </div>
    </header>
  );
}
