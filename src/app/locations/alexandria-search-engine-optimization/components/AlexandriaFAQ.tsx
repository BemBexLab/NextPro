import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const faqs = [
  {
    question: "What is Alexandria SEO?",
    answer:
      "Alexandria SEO is the process of optimizing a business website and online presence to improve visibility for relevant searches from customers in Alexandria, Virginia, and surrounding areas.",
  },
  {
    question: "What does an Alexandria SEO company do?",
    answer:
      "An SEO company can provide keyword research, local SEO, technical SEO, on-page optimization, content optimization, competitor analysis, SEO audits, and Google Business Profile optimization.",
  },
  {
    question: "How can local SEO help my Alexandria business?",
    answer:
      "Local SEO can help your business become more visible for location-based searches and connect with customers searching for your services nearby.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO timelines vary depending on your website, competition, industry, target keywords, content, authority, and the amount of optimization required. SEO is generally an ongoing process rather than a one-time activity.",
  },
];

export default function AlexandriaFAQ() {
  return (
    <div
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-5 pb-16 md:px-12 md:pb-24">
        <main>
          {/* Heading */}
          <header className="mb-16 md:mb-24">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
              Frequently{" "}
              <span
                className="relative inline text-[#0033CC]"
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 90%, #000000 85%)",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                Asked Questions
              </span>
            </h2>
          </header>

          {/* FAQ List */}
          <section className="border-t-2 border-black">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group grid grid-cols-1 gap-6 border-b border-black py-10 transition-colors hover:bg-[#F4F4F0] md:grid-cols-12 md:gap-8 md:py-14"
              >
                {/* Question Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-5xl font-semibold leading-none tracking-tighter text-[#0033CC] transition-colors group-hover:text-black md:text-7xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Question */}
                <div className="md:col-span-10">
                  <h3 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-black md:text-3xl lg:text-4xl">
                    {faq.question}
                  </h3>
                  <div className="mb-6 h-px w-full bg-black" />
                  <p className="max-w-4xl text-base leading-relaxed tracking-tight text-[#333333] md:text-lg lg:text-xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}