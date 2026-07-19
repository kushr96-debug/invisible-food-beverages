import Link from "next/link";
import { Logo } from "./Logo";

const footerGroups = [
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Team", href: "/about#team" }, { label: "Careers", href: "/contact" }, { label: "Certifications", href: "/export-capabilities#certifications" }, { label: "Contact", href: "/contact" }] },
  { title: "Products", links: [{ label: "Grains", href: "/products/premium-rice" }, { label: "Spices", href: "/products/whole-spices" }, { label: "Herbs", href: "/products/herbs" }, { label: "Pulses", href: "/products/grains-pulses" }, { label: "Oil Seeds", href: "/products/oil-seeds" }] },
  { title: "Exports", links: [{ label: "Logistics", href: "/export-capabilities#logistics" }, { label: "Incoterms", href: "/export-capabilities#incoterms" }, { label: "Global", href: "/export-capabilities#global" }, { label: "Partners", href: "/about#partners" }, { label: "Support", href: "/contact#faq" }] },
];

const socials = ["f", "◎", "𝕏", "in", "▶"];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#022820] text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_2.4fr]">
          <div>
            <Logo />
            <div className="mt-10 flex gap-5 text-2xl text-emerald-50/70">
              {socials.map((social) => (
                <span key={social} className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white/10 hover:text-[#D4FF00]">{social}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-bold tracking-[0.22em] text-emerald-50/65">{group.title}</h2>
                <ul className="mt-5 space-y-4 text-base font-semibold text-emerald-50/60">
                  {group.links.map((link) => (
                    <li key={link.label}><Link href={link.href} className="transition hover:text-[#D4FF00]">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm font-semibold text-emerald-50/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Invisible Food and Beverages. All rights reserved.</p>
          <div className="flex gap-7"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/sitemap">Sitemap</Link></div>
        </div>
      </div>
    </footer>
  );
}
