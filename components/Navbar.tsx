import Image from "next/image";
import Link from "next/link";
import { catalogData, getProductImage, makeSlug } from "@/lib/products";
import { Logo } from "./Logo";

const featuredCategoryIds = ["premium-rice", "grains-pulses", "whole-spices"];

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
      image: getProductImage(name, category)
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
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-400/10 bg-[#062720]/95 text-white shadow-2xl shadow-emerald-950/25 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <div className="group">
            <Link href="/products" className="flex items-center gap-2 text-sm font-semibold text-emerald-50/85 transition hover:text-emerald-300" aria-haspopup="true">
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
                          <Link key={product.name} href={product.href} className="flex gap-4 rounded-2xl p-2 -m-2 transition hover:bg-white/5 focus:bg-white/5 focus:outline-none">
                            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-emerald-200/20 bg-white/10">
                              <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover" />
                            </span>
                            <span>
                              <span className="block text-lg font-extrabold leading-tight text-white transition group-hover:text-white">{product.name}</span>
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
          <Link href="/about" className="text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">About</Link>
          <Link href="/contact" className="text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">Contact Us</Link>
          <Link href="/blog" className="text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">Blog</Link>
        </div>
        <Link href="/products" className="rounded-md border border-emerald-100/20 px-3 py-2 text-sm font-semibold text-emerald-50 md:hidden">Catalog</Link>
      </nav>
    </header>
  );
}