import Image from "next/image";
import logoHero from "@/public/logo-hero.png";

export function HeaderLogo() {
  return (
    <Image
      src={logoHero}
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
      src={logoHero}
      alt="BOB Coperation Logo"
      width={200}
      height={56}
      sizes="(max-width: 768px) 100px, 200px"
      className="h-10 w-auto"
    />
  );
}
