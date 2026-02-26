import React from "react";

const OurPartners = () => {
  const logoPartners = [
    { logo: "/service-testing/chatgpt-logo-black-700x350.webp" },
    { logo: "/service-testing/claude-logo-black-300x149.webp" },
    { logo: "/service-testing/GA-certified.webp" },
    { logo: "/service-testing/gemini-logo-black-300x149.webp" },
    {
      logo: "/service-testing/Bing_logo_dark_gray_RGB.1379355071-768x295.webp",
    },
    { logo: "/service-testing/image18.png" },
    { logo: "/service-testing/image13.png" },
    { logo: "/service-testing/image16.png" },
    { logo: "/service-testing/image14.png" },
    { logo: "/service-testing/image1-150x150.png" },
    { logo: "/service-testing/image20.png" },
    { logo: "/service-testing/image11.png" },
    { logo: "/service-testing/image12.png" },
    { logo: "/service-testing/image26.png" },
    { logo: "/service-testing/image28.png" },
    { logo: "/service-testing/BuzzSumo_Logo-1024x189.png" },
    { logo: "/service-testing/image23.png" },
    { logo: "/service-testing/image22.png" },
  ];

  // Split into 3 rows
  const perRow = Math.ceil(logoPartners.length / 3);
  const rows = [0, 1, 2].map((i) =>
    logoPartners.slice(i * perRow, (i + 1) * perRow),
  );

  return (
    <section className="w-full bg-white py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column - Fixed heading */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-start justify-start pr-6">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#6EE07F] block"></span>
            <span className="px-4 py-2 rounded-full border-2 border-[#083A81] text-[#083A81] font-medium text-sm">
              Our Partners
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            AI-Driven
            <br />
            SEO Tools
            <br />
            Behind Your
            <br />
            Results
          </h3>
        </div>

        {/* Right column - Animated carousel rows */}
        <div className="col-span-1 lg:col-span-9">
          <style>{`
            .carousel-viewport {
              overflow: hidden;
              position: relative;
            }
            
            .carousel-track {
              display: flex;
              gap: 1rem;
              align-items: center;
              width: fit-content;
            }
            
            .partner-card {
              flex: 0 0 200px;
              width: 200px;
              height: 136px;
              background: #F2F3F5;
              border-radius: 12px;
              padding: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(0,0,0,0.04);
              transition: transform 0.3s ease;
            }

            .partner-card:hover {
              transform: translateY(-5px);
            }

            .partner-card img {
              max-width: 100%;
              max-height: 80px;
              width: auto;
              height: auto;
              object-fit: contain;
            }

            /* Smooth continuous scroll animation */
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .track-1 {
              animation: scroll-left 30s linear infinite;
            }
            
            .track-2 {
              animation: scroll-left 35s linear infinite;
            }
            
            .track-3 {
              animation: scroll-left 40s linear infinite;
            }

            /* Pause on hover */
            .carousel-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="space-y-6">
            {rows.map((row, rowIndex) => {
              // Double the content for seamless looping
              const doubledRow = [...row, ...row];

              return (
                <div key={rowIndex} className="carousel-viewport">
                  <div className={`carousel-track track-${rowIndex + 1}`}>
                    {doubledRow.map((partner, itemIndex) => (
                      <div
                        key={`${rowIndex}-${itemIndex}`}
                        className="partner-card"
                      >
                        <img src={partner.logo} alt="" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
