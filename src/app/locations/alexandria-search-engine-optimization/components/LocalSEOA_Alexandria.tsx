import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const localServices = [
  "Google Business Profile optimization",
  "Local keyword research",
  "Location page optimization",
  "Local citations",
  "NAP consistency",
  "Local directory optimization",
  "Google Maps optimization",
  "Local content creation",
  "Review strategy",
  "Local competitor analysis",
];

export default function LocalSEOA_Alexandria() {
  return (
    <div
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:px-12 md:pb-24">

        <main>
          {/* Heading */}
          <header className="mb-16 md:mb-20">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
              Local SEO{" "}
              <span
                className="relative inline text-[#0033CC]"
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 90%, #000000 85%)",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                Alexandria VA
              </span>
            </h2>
          </header>

          {/* Intro Paragraph */}
          <section className="mb-20 border-l-4 border-[#0033CC] pl-6 md:pl-10">
            <p className="max-w-6xl text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl lg:text-4xl">
              Local SEO in Alexandria, VA helps businesses become more visible when nearby customers search for products and services. A strong local SEO strategy can improve your presence across Google Search and Google Maps while making it easier for potential customers to discover and contact your business.
            </p>
          </section>

          {/* Services Section */}
          <section className="">
            <div className="mb-12 flex items-baseline gap-6 md:mb-16">
              <span className="font-mono whitespace-nowrap text-xs uppercase tracking-widest text-[#0033CC]">
                Our local SEO strategy may include
              </span>
              <div className="h-px flex-1 bg-black" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#666666]">
                {localServices.length.toString().padStart(2, "0")}
              </span>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 border-l border-t border-black md:grid-cols-2 lg:grid-cols-3">
              {localServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-4 border-b border-r border-black p-6 transition-colors hover:bg-[#111111] hover:text-white md:p-8"
                >
                  <span className="font-mono text-xs text-[#999999] transition-colors group-hover:text-[#666666]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 text-lg font-semibold leading-tight tracking-tight md:text-xl">
                    {service}
                  </h3>
                  <span className="font-mono text-xs text-[#999999] transition-transform group-hover:translate-x-1 group-hover:text-[#666666]">
                    →
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