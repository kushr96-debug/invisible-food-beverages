import Link from "next/link";
import { Logo } from "./Logo";

const footerGroups = [
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Team", href: "/about#team" }, { label: "Careers", href: "/contact" }, { label: "Certifications", href: "/export-capabilities#certifications" }, { label: "Contact", href: "/contact" }] },
  { title: "Products", links: [{ label: "Grains", href: "/products/premium-rice" }, { label: "Spices", href: "/products/whole-spices" }, { label: "Herbs", href: "/products/herbs" }, { label: "Pulses", href: "/products/grains-pulses" }, { label: "Oil Seeds", href: "/products/oil-seeds" }] },
  { title: "Exports", links: [{ label: "Logistics", href: "/export-capabilities#logistics" }, { label: "Incoterms", href: "/export-capabilities#incoterms" }, { label: "Global", href: "/export-capabilities#global" }, { label: "Partners", href: "/about#partners" }, { label: "Support", href: "/contact#faq" }] },
];

const socials = [
  { label: "Facebook", icon: "f", href: "https://www.facebook.com" },
  { label: "Instagram", icon: "◎", href: "https://www.instagram.com" },
  { label: "X", icon: "𝕏", href: "https://www.x.com" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com" },
  { label: "YouTube", icon: "▶", href: "https://www.youtube.com" },
];

export function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 text-center lg:grid-cols-[1.1fr_2.4fr] lg:items-start">
          <div className="flex flex-col items-center">
            <Logo />
            <div className="mt-10 flex justify-center gap-5 text-2xl">
              {socials.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label} className="footer-social-link grid h-10 w-10 place-items-center rounded-full transition" target="_blank" rel="noreferrer">{social.icon}</Link>
              ))}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 sm:justify-items-center">
            {footerGroups.map((group) => (
              <div key={group.title} className="flex flex-col items-center">
                <h2 className="text-sm font-bold tracking-[0.22em] text-emerald-50/65">{group.title}</h2>
                <ul className="mt-5 space-y-4 text-base font-semibold text-emerald-50/60">
                  {group.links.map((link) => (
                    <li key={link.label}><Link href={link.href} className="footer-link transition">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom mt-14 flex flex-col items-center gap-6 border-t pt-8 text-center text-sm font-semibold md:flex-row md:justify-center md:gap-12">
          <p>© 2026 Invisible Food and Beverages. All rights reserved.</p>
          <div className="flex justify-center gap-7"><Link className="footer-link" href="/privacy">Privacy</Link><Link className="footer-link" href="/terms">Terms</Link><Link className="footer-link" href="/sitemap">Sitemap</Link></div>
        </div>
      </div>
    </footer>
  );
}
