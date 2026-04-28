import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <footer className="bg-primary/90 text-white text-xs md:text-sm py-4 px-4 leading-relaxed">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-center">
        
        {/* Desktop only: Social Icons */}
        {!isMobile && (
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/noc.walpurgii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-70 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        )}

        {/* Copyright (always shown) */}
        <div className="text-xs mx-auto">
          NOC WALPURGII - ©{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
