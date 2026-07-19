import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Export Capabilities", 
  description: "Export logistics, documentation, and supply capabilities." 
};

// Centralized theme variables
const theme = {
  bg: "bg-[#091612]",
  surface: "bg-[#132620]",
  border: "border-white/10",
  textMain: "text-white",
  textMuted: "text-gray-400",
  accentText: "text-[#D4FF00]",
  btnBg: "bg-[#D4FF00]",
  btnBgHover: "hover:bg-[#bce000]",
  btnText: "text-[#091612]",
};

const capabilities = [
  ["Sourcing & grading", "Supplier coordination, product sorting, grading, and buyer-specific packing conversations."],
  ["Documentation", "Commercial invoice, packing list, certificate coordination, and destination-specific paperwork support."],
  ["Shipment planning", "Container planning, freight coordination, and timeline alignment with importer requirements."],
];

export default function ExportCapabilitiesPage() {
  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} pt-20`}>
      
      {/* HERO SECTION (Matches Screenshot 1) */}
      <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${theme.accentText} mb-6`}>
          Export capabilities
        </p>
        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl mb-8">
          Premium crops. Disciplined logistics. Delivered worldwide.
        </h1>
        <p className={`max-w-3xl text-xl leading-relaxed ${theme.textMuted}`}>
          We support buyers with export-ready product coordination, flexible packaging discussions, and practical shipment planning across core agricultural categories.
        </p>
      </section>

      {/* CAPABILITIES GRID (Matches Screenshot 1) */}
      <section id="logistics" className="mx-auto grid max-w-7xl gap-6 px-4 pb-24 sm:px-6 md:grid-cols-3 lg:px-8">
        {capabilities.map(([title, body]) => (
          <div key={title} className={`rounded-2xl border ${theme.border} ${theme.surface} p-8 md:p-10 shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className={`leading-relaxed ${theme.textMuted}`}>{body}</p>
          </div>
        ))}
      </section>

      {/* ADDITIONAL INFO SECTIONS */}
      <section id="incoterms" className="border-y border-white/5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 items-center">
          <div>
            <p className={`text-sm font-bold uppercase tracking-widest ${theme.accentText} mb-4`}>
              Incoterms
            </p>
            <h2 className="text-4xl font-bold">Flexible trade conversations</h2>
          </div>
          <p className={`text-xl leading-relaxed ${theme.textMuted}`}>
            Our team can discuss buyer-preferred arrangements such as FOB, CIF, and other agreed shipping terms depending on product, destination, and volume.
          </p>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border border-[#D4FF00]/20 bg-[#D4FF00]/5 p-12 text-center max-w-4xl mx-auto`}>
          <h2 className="text-4xl font-bold mb-6">Compliance-minded exports</h2>
          <p className={`text-xl leading-relaxed ${theme.textMuted}`}>
            We coordinate quality documentation and certification requirements early in the quotation process so buyers can evaluate product fit before shipment planning.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="global" className="px-4 pb-32 text-center sm:px-6 lg:px-8">
        <Link href="/contact" className={`inline-flex rounded-xl ${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-10 py-5 font-bold text-lg transition shadow-xl`}>
          Plan an export order
        </Link>
      </section>
      
    </div>
  );
}