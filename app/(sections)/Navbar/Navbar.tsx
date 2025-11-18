"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {navbarData} from "./navbarData"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ffffff] text-[#222222]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src={navbarData.logo.src}
            alt={navbarData.logo.alt}
            width={121}
            height={34}
            priority
          />
        </Link>

        {/* Center Links */}
        <ul className="hidden [@media(min-width:820px)]:flex space-x-10">
          {navbarData.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#222222] font-medium text-[14px] md:text-[15px] transition-colors duration-200 hover:text-[#1668E8]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="[@media(min-width:820px)]:hidden text-[#222222]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#ffffff] [@media(min-width:820px)]:hidden">
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
