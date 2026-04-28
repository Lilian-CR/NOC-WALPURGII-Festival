import { X } from "lucide-react";
import { FaInstagram, FaBandcamp } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function BandModal({ band, lang, onClose }) {
  if (!band) return null;

  const links = band.links || {};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-lg max-w-[600px] w-full relative rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Band details modal"
      >
        {/* Scroll container (this is what prevents cutting) */}
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Top bar: title left + icons right + close */}
          <div className="flex items-start justify-between gap-4 px-5 pt-5">
            <h2 className="text-2xl font-black uppercase tracking-wide leading-tight text-left text-primary">
              {band.name}
            </h2>

            <div className="flex items-center gap-4">
              {/* Links right */}
              <div className="flex gap-4 items-center text-2xl text-primary">
                {links.instagram && (
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="hover:opacity-70 transition"
                  >
                    <FaInstagram />
                  </a>
                )}

                {links.bandcamp && (
                  <a
                    href={links.bandcamp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Bandcamp"
                    className="hover:opacity-70 transition"
                  >
                    <FaBandcamp />
                  </a>
                )}

                {links.website && (
                  <a
                    href={links.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Website"
                    className="hover:opacity-70 transition"
                  >
                    <FiGlobe />
                  </a>
                )}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="text-black/60 hover:text-black transition p-2"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Photo (horizontal) */}
          <div className="px-5 pt-4">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-black/5">
              <img
                src={band.photo}
                alt={band.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="px-5 pt-4">
            <p className="text-sm leading-relaxed text-black/80 whitespace-pre-line text-justify">
              {band.bio?.[lang] || ""}
            </p>
          </div>

          {/* Media (YouTube OR Bandcamp) */}
{band.bandcampEmbed ? (
  <div className="px-5 pb-5">
    <iframe
      style={{ border: 0, width: "100%", height: "120px" }}
      src={band.bandcampEmbed}
      seamless
      title={`${band.name} Bandcamp`}
    />
  </div>
) : (
  band.youtube && (
    <div className="px-5 pb-5">
      <div className="w-full aspect-video overflow-hidden rounded-lg">
        <iframe
          className="w-full h-full"
          src={band.youtube}
          title={`${band.name} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
)}
        </div>
      </div>
    </div>
  );
}

export default BandModal;
