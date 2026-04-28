import { useEffect, useRef, useState } from "react";
import { copy } from "../i18n/copy";
import bands from "../data/bands";
import BandCard from "../components/BandCard";
import BandModal from "../components/BandModal";
import Poster from "../images/poster.png";
import VenuePhoto from "../images/venue_1.webp";

function Home({ lang }) {
  const t = copy[lang];

  const festivalLinks =
    lang === "pl"
      ? [
          { label: "Facebook", url: "https://www.facebook.com/noc.walpurgii" },
          { label: "Refuse Records", url: "https://refusemusic.net/" },
          { label: "Emancypunx", url: "https://www.facebook.com/people/Emancypunx/61574813534432/" },
        ]
      : [
          { label: "Facebook", url: "https://www.facebook.com/noc.walpurgii" },
          { label: "Refuse Records", url: "https://refusemusic.net/" },
          { label: "Emancypunx", url: "https://www.facebook.com/people/Emancypunx/61574813534432/" },
        ];

  const venue = {
    name: "VooDoo Club",
    address: "Aleja Prymasa Tysiąclecia 48A, 01-242 Warszawa",
    mapEmbed:
      "https://maps.google.com/maps?ll=52.224318,20.959135&z=18&t=m&hl=en&gl=EN&mapclient=embed&cid=2095563351924620070&output=embed",
    description: {
      pl: `VooDoo Club to alternatywna przestrzeń w Warszawie o powierzchni ponad 500 m², zlokalizowana przy Aleji Prymasa Tysiąclecia 48A (dawne Bema 65). Klub oferuje szeroki wybór wydarzeń — od imprez klubowych i koncertów po burleskę oraz spotkania środowisk BDSM.

Miejsce dysponuje profesjonalną obsługą, ochroną oraz nagłośnieniem i oświetleniem. Do dyspozycji są dwie sceny (Stage 1 i Stage 2) z zapleczem, barem i backstage’em, a klub umożliwia również wynajem na koncerty, festiwale oraz eventy prywatne.`,
      en: `VooDoo Club is an alternative cultural space in Warsaw with over 500 m², located at Aleja Prymasa Tysiąclecia 48A (formerly Bema 65). The venue hosts a wide range of events — from club nights and concerts to burlesque shows and BDSM community gatherings.

The club provides professional staff, security, as well as high-quality sound and lighting. It features two stages (Stage 1 and Stage 2) with facilities including a bar and backstage areas, and it is also available for rent for concerts, festivals, and private events.`,
    },
  };

  const [selectedBand, setSelectedBand] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lineupRef = useRef(null);

  const scrollLineup = (dir) => {
    lineupRef.current?.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" className="scroll-mt-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-widest text-white/70 mb-3">{t.hero.kicker}</p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">{t.hero.title}</h1>
            <p className="text-2xl md:text-3xl font-black mt-2">{t.hero.subtitle}</p>

            <div className="mt-6 text-sm text-white/80 space-y-1">
              <p>VooDoo Club, Warszawa</p>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="button"
              onClick={() => setPosterOpen(true)}
              className="w-full max-w-[360px] focus:outline-none"
              aria-label="Open poster in full size"
            >
              <img
                src={Poster}
                alt="Noc Walpurgii poster"
                className="w-full object-contain rounded-lg border border-white/20 bg-white/10 hover:opacity-90 transition"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-10 px-4 bg-primary/50 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.sections.aboutTitle}</h2>

          <div className="space-y-6">
            <div className="w-full overflow-hidden rounded-lg border border-black/10 bg-black/5">
              <img
                src="https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/558863477_122149637510827117_2248463521515712768_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lWrcokJQhBAQ7kNvwE7MCYX&_nc_oc=AdnDr-S8Lc4vT3xTGj7hIFlZJcgyFn_SqY4YSaCajvRiUH6CDJZ9BYAqtshy3uXdRMSLlYbYkHO8_yR8shUMLF_v&_nc_zt=23&_nc_ht=scontent-ber1-1.xx&_nc_gid=V66z5M--PjJ7qwL_lwtTkg&oh=00_AfpaL7Bzc7k5txwmG_yWts92JxC2uR2iuGLwsaSzDZJp4g&oe=69724C2E"
                alt="About section image"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="text-sm leading-relaxed text-justify">
              {lang === "pl" ? (
                <>
                  <p className="font-bold mb-3 text-left">Emancypunx i Refuse prezentują:</p>
                  <p className="font-black text-lg mb-4 text-left">NOC WALPURGII FESTIWAL</p>
                  <p>Festiwal Noc Walpurgii powraca do Warszawy, aby uczcić 30-lecie swojego istnienia! Tegoroczna edycja odbędzie się 30 kwietnia 2026 roku w klubie VooDoo.</p>
                </>
              ) : (
                <>
                  <p className="font-bold mb-3 text-left">Emancypunx & Refuse present:</p>
                  <p className="font-black text-lg mb-4 text-left">NOC WALPURGII 2026 — 30 YEARS!</p>
                  <p>
                    Noc Walpurgii Festival returns to Warsaw to celebrate its 30th anniversary! This year’s edition will take place on{" "}
                    <strong>30 April 2026</strong> at <strong>VooDoo Club</strong>.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="scroll-mt-24 py-10 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.nav.programme}</h2>
          <div className="text-sm text-black/70">Już wkrótce! // Coming soon!</div>
        </div>
      </section>

      {/* LINE-UP */}
      <section id="lineup" className="scroll-mt-24 py-10 px-4 bg-primary/50 to-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-black">{t.sections.lineupTitle}</h2>

            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollLineup("left")} className="px-3 py-2 border border-black/20 rounded hover:bg-black hover:text-white" aria-label="Scroll left">
                ←
              </button>
              <button onClick={() => scrollLineup("right")} className="px-3 py-2 border border-black/20 rounded hover:bg-black hover:text-white" aria-label="Scroll right">
                →
              </button>
            </div>
          </div>

          <div ref={lineupRef} className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {[...bands]
              .sort((a, b) => a.name.localeCompare(b.name, "pl", { sensitivity: "base" }))
              .map((band) => (
                <BandCard key={band.id} band={band} onClick={() => setSelectedBand(band)} />
              ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section id="venue" className="scroll-mt-24 py-10 px-4 bg-primary/50 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.sections.venueTitle}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="w-full overflow-hidden rounded-lg border border-black/10 bg-black/5">
              <img src={VenuePhoto} alt="VooDoo Club venue" className="w-full h-full object-cover" />
            </div>

            <div>
              <h3 className="text-xl font-black uppercase tracking-wide">{venue.name}</h3>
              <p className="text-sm text-black/70 mt-2">{venue.address}</p>
              <p className="text-sm leading-relaxed text-black/80 mt-4 whitespace-pre-line text-justify">{venue.description?.[lang]}</p>

              <div className="mt-5 w-full aspect-[16/9] overflow-hidden rounded-lg border border-black/10">
                <iframe title="VooDoo Club map" src={venue.mapEmbed} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARENESS */}
      <section id="awareness" className="scroll-mt-24 py-10 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.nav.awareness}</h2>
          <div className="text-sm text-black/70">Już wkrótce! // Coming soon!</div>
        </div>
      </section>

      {/* TICKETS */}
      <section id="tickets" className="scroll-mt-24 py-10 px-4 bg-primary/50 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.nav.tickets}</h2>
          <div className="text-sm text-black/70">Już wkrótce! // Coming soon!</div>
        </div>
      </section>

      {/* FLYER GALLERY */}
      <section id="flyergallery" className="scroll-mt-24 py-10 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.nav.flyergallery}</h2>
          <div className="text-sm text-black/70">Już wkrótce! // Coming soon!</div>
        </div>
      </section>

      {/* HERSTORY */}
      <section id="herstory" className="scroll-mt-24 py-10 px-4 bg-primary/50 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.nav.herstory}</h2>
          <div className="text-sm text-black/70">Już wkrótce! // Coming soon!</div>
        </div>
      </section>

      {/* LINKS */}
      <section id="links" className="scroll-mt-24 py-10 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.sections.linksTitle}</h2>

          <ul className="space-y-3">
            {festivalLinks.map((item) => (
              <li key={item.url}>
                <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:opacity-80 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="scroll-mt-24 py-10 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-6">{t.sections.scheduleTitle}</h2>
          <div className="text-sm text-black/70">Już wkrótce! // Coming soon!</div>
        </div>
      </section>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 md:hidden bg-black text-white rounded-full p-3 shadow-lg hover:bg-black/80 transition"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {selectedBand && <BandModal band={selectedBand} lang={lang} onClose={() => setSelectedBand(null)} />}
    </>
  );
}

export default Home;
