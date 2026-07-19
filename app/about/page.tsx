import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us", description: "Learn about Invisible Food & Beverages and our export values." };

export default function AboutPage() {
  return (
    <div className="bg-[#091612] text-white">
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,255,0,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4FF00]">About us</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Elegant sourcing for buyers who need dependable agricultural exports.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">Invisible Food & Beverages connects international importers, distributors, and food manufacturers with carefully sourced Indian grains, spices, herbs, oil seeds, and value-added ingredients.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-24 sm:px-6 md:grid-cols-3 lg:px-8">
        {["Quality-first sourcing", "Clear export coordination", "Long-term buyer relationships"].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20"><h2 className="text-2xl font-semibold">{item}</h2><p className="mt-4 leading-7 text-white/60">Our process balances product integrity, practical documentation, and responsive communication from inquiry to shipment.</p></div>)}
      </section>
      <section id="team" className="bg-[#11231D] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4FF00]">Our team</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end"><h2 className="text-4xl font-semibold md:text-5xl">Specialists in procurement, quality checks, and export readiness.</h2><p className="text-lg leading-8 text-white/65">We work with trusted suppliers and logistics partners to help buyers plan consistent volumes and category expansion.</p></div>
        </div>
      </section>
      <section id="partners" className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold">Built for international partnerships</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">From samples to repeat orders, our goal is to make premium agricultural sourcing refined, transparent, and scalable.</p>
        <Link href="/contact" className="mt-10 inline-flex rounded-xl bg-[#D4FF00] px-8 py-4 font-bold text-[#091612] transition hover:bg-[#ADFF91]">Start a partnership</Link>
      </section>
    </div>
  );
}
