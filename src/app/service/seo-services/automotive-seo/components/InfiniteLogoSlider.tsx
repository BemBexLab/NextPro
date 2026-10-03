import React from "react";

// 1. Update this array with your actual logo data
const logos = [
  { id: 1, name: "Acme Corp", src: "/images/RepairPalCertified_Logo.webp" },
  { id: 2, name: "Globex", src: "/images/images 12.jpg" },
  { id: 3, name: "Soylent", src: "/images/images 11.jpg" },
  { id: 4, name: "Initech", src: "/images/images 2.png" },
//   { id: 5, name: "Umbrella", src: "/images/images 1.png" },
  { id: 6, name: "Hooli", src: "/images/client 03.png" },
  { id: 7, name: "Vehement", src: "/images/client 02.png" },
  { id: 8, name: "Massive Dyn", src: "/images/client 01.png" },
//   {
//     id: 9,
//     name: "Acme Corp",
//     src: "/images/b6b3d71224ec19fd9eb615cfe24f6a29.jpg",
//   },
//   {
//     id: 10,
//     name: "Globex",
//     src: "/images/ab9e21a0f73112583af1c954fe1521f2.jpg",
//   },
//   {
//     id: 11,
//     name: "Soylent",
//     src: "/images/aa0a95cfc90b2b33a57828d2d5606b79.jpg",
//   },
//   {
//     id: 12,
//     name: "Initech",
//     src: "/images/300f90c19a507cc0d71021666c6d95be.jpg",
//   },
//   {
//     id: 13,
//     name: "Umbrella",
//     src: "/images/89d6fc7bec8b343e548c0a7136ca0a6d.jpg",
//   },
//   {
//     id: 14,
//     name: "Hooli",
//     src: "/images/50cbc223485847ee4aa5438a3d752978.jpg",
//   },
  {
    id: 15,
    name: "Vehement",
    src: "/images/9eb21f_552d8adb33084a16810eff2b0c62da47-mv2.png",
  },
];

const InfiniteLogoSlider = () => {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-gray-50 w-full overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <div className="mb-10 flex items-center justify-center gap-4 border-b border-blue-100 pb-8 text-center sm:mb-12 sm:pb-10">
          <span className="mt-1 h-12 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-700 to-cyan-400 sm:h-16" />
          <h2 className="max-w-4xl text-center text-2xl font-bold leading-tight tracking-tight text-[#072d7f] sm:text-3xl lg:text-4xl">
            Our Recent Automotive SEO Clientele
          </h2>
        </div>
      </div>

      {/* Slider Container with fading edges */}
      <div className="fade-edges relative">
        {/* Track: no gap, items sit flush */}
        <div className="animate-scroll flex w-max">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              // Container: Increased height to h-32, increased horizontal padding to px-8
              className="flex-shrink-0 flex items-center justify-center h-32 w-auto rounded-lg shadow-sm transition-all duration-300 ease-out px-8"
            >
              {/* Logo image: Increased max height to max-h-24, increased max width to max-w-64 */}
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-24 max-w-64 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteLogoSlider;
