import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

const reviewItems = [
  'Your website and existing search visibility',
  'Current rankings and target keywords',
  'Website content and page structure',
  'Technical SEO setup',
  'Competitor websites and strategies',
  'Local search presence',
];

const services = [
  'Local SEO',
  'Technical SEO',
  'On-Page SEO',
  'Keyword Research',
  'SEO Content Optimization',
  'Google Business Profile Optimization',
  'Competitor Analysis',
  'SEO Audits',
  'Internal Linking',
  'Schema Markup',
  'Conversion-Focused SEO',
];

export default function AlexandriaServices() {
  return (
    <div className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}>
      
      {/* Subtle Grid Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-15 md:px-12">
        
        {/* Header */}
        <header className="my-10 border-b-2 border-black pb-8">
          <h2 className="max-w-6xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
            Our Alexandria SEO Services Include
          </h2>
        </header>

        {/* Intro */}
        <section className="mb-10 max-w-3xl">
          <p className="text-xl font-medium leading-relaxed tracking-tight text-black md:text-2xl">
            Our SEO services in Alexandria are designed to improve the areas of your website and online presence that influence organic search performance. We begin by reviewing:
          </p>
        </section>

        {/* Review Items Grid */}
        <section className="mb-15 border-t border-black pt-12 md:pt-16">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {reviewItems.map((item, index) => (
              <div key={index} className="group flex items-start gap-6">
                <span className="font-mono text-sm text-[#999999] transition-colors group-hover:text-[#0033CC]">
                  0{index + 1}
                </span>
                <p className="flex-1 text-lg font-medium leading-snug tracking-tight text-black md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="">
          <div className="mb-12 flex items-baseline gap-6 md:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0033CC] whitespace-nowrap">
              Services
            </span>
            <div className="flex-1 h-px bg-black" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#666666]">
              {services.length.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Services Grid - Dense Editorial Layout */}
          <div className="grid grid-cols-1 border-t border-l border-black md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative border-r border-b border-black p-6 transition-colors hover:bg-black hover:text-white md:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#999999] transition-colors group-hover:text-white">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs text-[#999999] transition-colors group-hover:text-white">
                    —
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-black transition-colors group-hover:text-white md:text-3xl">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}