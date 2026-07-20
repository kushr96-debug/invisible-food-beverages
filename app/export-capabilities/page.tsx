import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Export Capabilities", 
  description: "Export logistics, documentation, and supply capabilities." 
};

// Centralized theme variables
const theme = {
  bg: "theme-page",
  surface: "theme-surface",
  border: "theme-border",
  textMain: "theme-text",
  textMuted: "theme-muted",
  accentText: "theme-accent",
  btnBg: "theme-button",
  btnBgHover: "",
  btnText: "",
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${theme.accentText} mb-6`}>
          Export capabilities
        </p>
        <h1 className="mb-8 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
          Premium crops. Disciplined logistics. Delivered worldwide.
        </h1>
        <p className={`max-w-3xl text-lg leading-relaxed sm:text-xl ${theme.textMuted}`}>
          We support buyers with export-ready product coordination, flexible packaging discussions, and practical shipment planning across core agricultural categories.
        </p>
      </section>

      {/* CAPABILITIES GRID (Matches Screenshot 1) */}
      <section id="logistics" className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 sm:pb-20 md:grid-cols-3 lg:px-8 lg:pb-24">
        {capabilities.map(([title, body]) => (
          <div key={title} className={`rounded-2xl border ${theme.border} ${theme.surface} p-8 md:p-10 shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className={`leading-relaxed ${theme.textMuted}`}>{body}</p>
          </div>
        ))}
      </section>

      {/* ADDITIONAL INFO SECTIONS */}
      <section id="incoterms" className="border-y theme-border py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 items-center">
          <div>
            <p className={`text-sm font-bold uppercase tracking-widest ${theme.accentText} mb-4`}>
              Incoterms
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Flexible trade conversations</h2>
          </div>
          <p className={`text-lg leading-relaxed sm:text-xl ${theme.textMuted}`}>
            Our team can discuss buyer-preferred arrangements such as FOB, CIF, and other agreed shipping terms depending on product, destination, and volume.
          </p>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className={`mx-auto max-w-4xl rounded-3xl border theme-active-border theme-accent-soft-bg p-6 text-center sm:p-10 lg:p-12`}>
          <h2 className="text-4xl font-bold mb-6">Compliance-minded exports</h2>
          <p className={`text-lg leading-relaxed sm:text-xl ${theme.textMuted}`}>
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