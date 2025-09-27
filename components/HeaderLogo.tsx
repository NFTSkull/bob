import Image from "next/image";
import logo from "@/public/header.png";

export function HeaderLogo() {
  return (
    <Image
      src={logo}
      alt="BobCoperation Logo"
      width={200}
      height={56}
      priority
      sizes="(max-width: 768px) 140px, 200px"
      className="h-14 w-auto"
    />
  );
}

export function FooterLogo() {
  return (
    <Image
      src={logo}
      alt="BobCoperation Logo"
      width={200}
      height={56}
      sizes="(max-width: 768px) 100px, 200px"
      className="h-10 w-auto"
    />
  );
}
