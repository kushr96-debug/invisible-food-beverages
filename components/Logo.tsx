import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3 text-white transition" aria-label="Invisible Food & Beverages home">
      <span className={`relative shrink-0 overflow-hidden rounded-xl border border-[#D4FF00]/20 bg-[#022820] shadow-lg shadow-black/20 ${compact ? "h-12 w-40" : "h-14 w-48 sm:w-56"}`}>
        <Image src="/logo.svg" alt="Invisible Food & Beverages" fill priority sizes={compact ? "160px" : "224px"} className="object-cover transition duration-500 group-hover:scale-105" />
      </span>
    </Link>
  );
}
