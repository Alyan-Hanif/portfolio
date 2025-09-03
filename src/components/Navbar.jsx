"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full top-0 z-40 bg-[#e7e8e2] backdrop-blur">
      <div className="mx-auto flex items-center justify-between p-4">
        <a href="#home" className="font-bold text-xl text-[#3f3f3d]">
          Full Stack Developer
        </a>
        <nav className="hidden md:flex gap-2">
          <a href="#services" className="text-[#3f3f3d]">
            Services
          </a>
          <a href="#works" className="text-[#3f3f3d]">
            Works
          </a>
          <a href="#about" className="text-[#3f3f3d]">
            About
          </a>
          <a href="#contact" className="text-[#3f3f3d]">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-[#3f3f3d]"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#e7e8e2] p-4">
          <a className="block py-1 text-[#3f3f3d]" href="#services">
            Services
          </a>
          <a className="block py-1 text-[#3f3f3d]" href="#works">
            Works
          </a>
          <a className="block py-1 text-[#3f3f3d]" href="#about">
            About
          </a>
          <a className="block py-1 text-[#3f3f3d]" href="#contact">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
