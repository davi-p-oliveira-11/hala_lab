"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


// Navbar.tsx (data section)
interface LinkItem {
  label: string;
  href: string;
  src?: string;
}

interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface NavbarData {
  logo: {
    src: string;
    alt: string;
  };
  links: LinkItem[];
  cta: CTAButton;
}

const navbarData: NavbarData = {
  logo: {
    src: "/images/logo.svg",
    alt: "Stract Mixland Logo",
  },
  links: [
    { label: "Pricing", href: "#pricing" },
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#resources" },
  ],
  cta: {
    text: "Get Started",
    href: "#cta",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212] text-white z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src={navbarData.logo.src}
            alt={navbarData.logo.alt}
            width={74}
            height={24}
            className="w-[74px] h-6"
            priority
          />
        </Link>

        {/* Center Links */}
        <ul className="hidden [@media(min-width:820px)]:flex space-x-10">
          {navbarData.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white font-semibold text-[14px] md:text-[15px] transition-colors duration-200 hover:text-[#1668E8]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="[@media(min-width:820px)]:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#121212] [@media(min-width:820px)]:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm">
            {navbarData.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#1668E8] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
