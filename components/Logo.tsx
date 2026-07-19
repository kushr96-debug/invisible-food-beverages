import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3 text-white transition" aria-label="Invisible Food & Beverages home">
      <span className={`relative shrink-0 ${compact ? "h-10 w-40" : "h-14 w-48 sm:w-64"}`}>
    <Image 
      src="/logo_img.png" 
      alt="Invisible Food & Beverages" 
      fill 
      priority 
      sizes={compact ? "160px" : "256px"} 
      className="object-contain transition duration-500 group-hover:opacity-80" 
    />
     </span>
    </Link>
  );
}
