import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function AlexandriaSEOIntro() {
  return (
    <div
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-16 md:px-12 md:pb-24">
        <main>
          {/* Heading */}
          <header className="mb-16">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
              SEO Services in{" "}
              <span
                className="relative inline text-[#0033CC]"
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 90%, #000000 85%)",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                Alexandria, VA
              </span>
            </h2>
          </header>

          {/* Main Paragraph */}
          <section className="border-l-4 border-[#0033CC] pl-6 md:pl-10">
            <p className="text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl lg:text-4xl">
              Our SEO services in Alexandria VA are designed to improve your
              website's visibility for relevant searches and connect your
              business with people actively looking for your products or
              services.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}