import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { copy } from "../i18n/copy";

function Navbar({ lang, setLang }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const items = [
    { id: "home", label: t.nav.home },
    { id: "lineup", label: t.nav.lineup },
    { id: "schedule", label: t.nav.schedule },
    { id: "venue", label: t.nav.venue },
    { id: "links", label: t.nav.links },
    { id: "about", label: t.nav.about },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/10 text-primary">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo / Title */}
        <button
          onClick={() => scrollTo("home")}
          className="font-black tracking-tight text-lg"
          aria-label="Go to top"
        >
          NOC WALPURGII
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              className="text-xs font-black uppercase tracking-widest text-primary hover:bg-contrastHover px-2 py-1 rounded transition-colors"
            >
              {it.label}
            </button>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("pl")}
              className={`text-xs font-bold px-2 py-1 border rounded ${
                lang === "pl" ? "bg-primary text-white" : "bg-white"
              }`}
            >
              PL
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-bold px-2 py-1 border rounded ${
                lang === "en" ? "bg-primary text-white" : "bg-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile: lang + burger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "pl" ? "en" : "pl")}
            className="text-xs font-bold px-2 py-1 border rounded"
            aria-label="Toggle language"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 border-t border-black/10 bg-white">
          <div className="flex flex-col gap-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="text-left text-sm font-bold uppercase py-2 border-b border-black/5 hover:bg-contrastHover rounded transition-colors"
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;