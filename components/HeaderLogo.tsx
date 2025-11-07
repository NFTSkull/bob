import Image from "next/image";
import headerLogo from "@/public/logobob.png";
import footerLogo from "@/public/logo-hero.png";

export function HeaderLogo() {
  return (
    <Image
      src={headerLogo}
      alt="BOB Coperation Logo"
      width={280}
      height={78}
      priority
      sizes="(max-width: 768px) 180px, 280px"
      className="h-20 w-auto"
    />
  );
}

export function FooterLogo() {
  return (
    <Image
      src={footerLogo}
      alt="BOB Coperation Logo"
      width={200}
      height={56}
      sizes="(max-width: 768px) 100px, 200px"
      className="h-10 w-auto"
    />
  );
}
