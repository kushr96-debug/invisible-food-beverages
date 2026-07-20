import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Contact & FAQ", 
  description: "Request an export quote from Invisible Food & Beverages." 
};

// Centralized theme variables
const theme = {
  bg: "theme-page",
  surface: "theme-surface",
  surfaceHover: "theme-surface-hover",
  border: "theme-border",
  textMain: "theme-text",
  textMuted: "theme-muted",
  accentText: "theme-accent",
  btnBg: "theme-button",
  btnBgHover: "",
  btnText: "",
};

const faqs = [
  ["How do I get a quote?", "Send your requirements via our form. We'll reply with a custom quote and shipping details."],
  ["What payment methods do you accept?", "Wire transfer and agreed trade payment terms can be coordinated after buyer verification and order confirmation."],
  ["How can I contact your team?", "Use the form, email sales@invisiblefoodbeverages.com, or call our export desk for urgent shipment planning."],
  ["Can I update my order?", "Yes, our team can review changes before packing or dispatch milestones are finalized."],
  ["What is your refund process?", "Refund and claim handling depends on contract terms, inspection documents, and shipment status."],
];

export default function ContactPage() {
  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} pt-20`}>
      
      {/* FAQ SECTION (Matches Screenshot 2) */}
      <section id="faq" className="mx-auto grid max-w-7xl gap-10 border-b theme-border px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className={`text-sm font-bold uppercase tracking-widest ${theme.textMuted} mb-4`}>
            FAQ
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Export answers, simplified
          </h1>
          <p className={`mb-8 text-lg font-medium sm:mb-10 sm:text-xl ${theme.textMuted}`}>
            Essential info for global buyers.
          </p>
          <Link href="#contact-form" className={`inline-flex rounded-xl ${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-8 py-4 font-bold transition shadow-lg`}>
            Contact
          </Link>
        </div>
        
        <div className="space-y-4">
          {faqs.map(([q, a]) => (
            <details key={q} className={`group rounded-xl border ${theme.border} ${theme.surface} overflow-hidden`}>
              <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-base font-semibold sm:px-8 sm:py-6 sm:text-lg ${theme.textMain} ${theme.surfaceHover} transition-colors marker:hidden`}>
                {q}
                <svg className="w-5 h-5 theme-muted transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className={`px-5 pb-5 pt-1 text-base leading-relaxed sm:px-8 sm:pb-6 sm:pt-2 sm:text-lg ${theme.textMuted}`}>
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-form" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className={`grid gap-10 rounded-3xl border ${theme.border} ${theme.surface} p-5 sm:p-8 md:p-12 lg:grid-cols-[1.5fr_1fr] lg:gap-12`}>
          
          <form className="grid gap-6 md:grid-cols-2 md:gap-7">
            {[
              ["FIRST NAME", "First name"], 
              ["LAST NAME", "Last name"], 
              ["BUSINESS EMAIL", "email@website.com"], 
              ["PHONE NUMBER", "1 (555) 000-0000"]
            ].map(([label, placeholder]) => (
              <label key={label} className="space-y-3 text-sm font-bold tracking-widest theme-muted">
                {label}
                <input 
                  placeholder={placeholder} 
                  className={`w-full rounded-xl border ${theme.border} theme-input px-5 py-4 text-lg theme-text outline-none placeholder:theme-placeholder focus:theme-focus-border transition-colors`} 
                />
              </label>
            ))}
            
            <fieldset className="md:col-span-2">
              <legend className="mb-5 text-sm font-bold tracking-widest theme-muted">BUSINESS TYPE</legend>
              <div className="flex flex-col gap-4 text-base font-medium theme-text sm:flex-row sm:flex-wrap sm:gap-8 sm:text-lg">
                {["Importer", "Distributor", "Retailer", "Other"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input name="businessType" type="radio" className="h-5 w-5 accent-lime-500 bg-transparent border-gray-600" />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>
            
            <label className="space-y-3 text-sm font-bold tracking-widest theme-muted md:col-span-2">
              MESSAGE
              <textarea 
                placeholder="Type your message..." 
                rows={5} 
                className={`w-full rounded-xl border ${theme.border} theme-input px-5 py-4 text-lg theme-text outline-none placeholder:theme-placeholder focus:theme-focus-border transition-colors`} 
              />
            </label>
            
            <button className={`w-full rounded-xl sm:w-fit ${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-10 py-4 text-lg font-bold transition shadow-lg`}>
              Submit
            </button>
          </form>
          
          <aside className="flex flex-col justify-between gap-12 py-6 lg:pl-8 lg:border-l theme-border">
            <div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Contact details</h2>
              <p className={`text-xl leading-relaxed ${theme.textMuted}`}>For export or partnership queries, use the information below.</p>
            </div>
            <div className="space-y-6 text-base font-medium sm:space-y-8 sm:text-xl">
              <div className="flex gap-4 items-start">
                <span className={theme.accentText}>☏</span>
                <p>+1 (555) 000-0000</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className={theme.accentText}>✉</span>
                <p>sales@invisiblefb.com</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className={theme.accentText}>⌖</span>
                <p>101 Web Lane<br />San Francisco, CA, USA</p>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}