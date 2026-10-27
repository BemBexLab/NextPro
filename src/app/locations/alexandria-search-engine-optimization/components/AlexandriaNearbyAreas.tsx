import { Inter, JetBrains_Mono } from "next/font/google";
import { MapPin } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const nearbyAreas = [
  "Alexandria Knolls",
  "Alexandria Overlook",
  "Alexandria Gateway",
  "Beverley Hills",
  "Brookville-Seminary Valley",
  "Clover-College Park",
  "Fort Ellsworth",
  "Hillwood",
  "Longview Hill",
  "Seminary West",
  "Seminary Ridge",
  "Strawberry Hill",
  "West Old Town",
  "North Old Town",
  "Old Town South",
  "Old Town West",
  "Southwest Quadrant",
  "Yates Gardens",
  "Founders Park",
  "Braddock Station",
  "Cameron Mews",
  "Duke Street",
  "Landmark-Van Dorn",
  "Quaker Ridge",
  "Quaker Village",
  "Rosemont Station",
  "Shuters Hill",
  "Stevenson Square",
  "Potomac Greens",
  "Potomac West",
  "Wellington",
  "Wapleton",
  "Ford's Landing",
  "Governors Hill",
  "Burgundy Village",
  "Edsall Park",
  "Landmark Malls area",
  "Arlington, VA",
  "Crystal City, Arlington, VA",
  "Shirlington, Arlington, VA",
  "Bailey's Crossroads, VA",
  "Lincolnia, VA",
  "Annandale, VA",
  "Springfield, VA",
  "Franconia, VA",
  "Kingstowne, VA",
  "Huntington, VA",
  "Mount Vernon, VA",
  "Belle Haven, VA",
  "Fort Hunt, VA",
  "Falls Church, VA",
  "Fairfax, VA",
  "McLean, VA",
  "Tysons, VA",
  "National Landing, VA",
  "Washington, DC",
  "Oxon Hill, MD",
  "National Harbor, MD",
  "Fort Washington, MD",
];

export default function AlexandriaNearbyAreas() {
  return (
    <div
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:px-12 md:pb-24">

        <main>
          {/* Heading */}
          <header className="mb-16 md:mb-24">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
              Our neighbourhoods of{" "}
              <span
                className="relative inline text-[#0033CC]"
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 90%, #000000 85%)",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                Alexandria, Virginia 
              </span>
              {" "}For SEO Services
            </h2>
          </header>

          {/* Main Section */}
          <section className="border-l-4 border-[#0033CC] pl-6 md:pl-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {nearbyAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 text-base font-medium tracking-tight text-black sm:text-lg"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-[#0033CC] sm:h-5 sm:w-5" />
                  <span>
                    {area}
                    {index < nearbyAreas.length - 1 ? "," : ""}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}