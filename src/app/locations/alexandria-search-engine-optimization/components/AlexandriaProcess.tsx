import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

const processSteps = [
  {
    number: '01',
    title: 'Website & SEO Audit',
    description: "We analyze your website's technical health, content, structure, indexing, internal links, existing visibility, and important SEO opportunities.",
  },
  {
    number: '02',
    title: 'Keyword Research',
    description: 'We identify commercial, local, informational, and long-tail keywords relevant to your services and target customers.',
  },
  {
    number: '03',
    title: 'Competitor Analysis',
    description: 'We study competing websites to understand their keyword targeting, content, website structure, local presence, and potential gaps that your business can address.',
  },
  {
    number: '04',
    title: 'SEO Strategy',
    description: 'We organize the research into a practical roadmap covering technical SEO, on-page optimization, content, local search, internal linking, and other relevant improvements.',
  },
  {
    number: '05',
    title: 'Implementation',
    description: "We optimize priority pages and address the issues that can have the greatest impact on your website's organic search performance.",
  },
  {
    number: '06',
    title: 'Monitoring & Improvement',
    description: 'SEO is an ongoing process. We monitor performance, identify new opportunities, and refine the strategy as your website, competitors, and search landscape change.',
  },
];

export default function AlexandriaProcess() {
  return (
    <div className={`relative min-h-screen bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}>
      
      {/* Subtle Grid Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-12">
        
        {/* Header */}
        <header className="border-b-2 border-black pb-8">
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
            Our Alexandria Search Engine Optimization Process
          </h2>
        </header>

        {/* Process Steps - Editorial Row Layout */}
        <div>
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative grid grid-cols-1 gap-6 border-b border-black py-10 transition-colors hover:bg-black hover:text-white md:grid-cols-12 md:gap-8 md:py-14"
            >
              {/* Step Number */}
              <div className="md:col-span-2">
                <span className="font-mono text-5xl font-semibold leading-none tracking-tighter text-[#0033CC] transition-colors group-hover:text-white md:text-7xl">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-black transition-colors group-hover:text-white md:text-3xl lg:text-4xl">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="md:col-span-5">
                <p className="text-base leading-relaxed tracking-tight text-[#333333] transition-colors group-hover:text-[#CCCCCC] md:text-lg">
                  {step.description}
                </p>
              </div>

              {/* Step Index Indicator */}
              <div className="hidden items-center justify-end md:col-span-1 md:flex">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0033CC] transition-colors group-hover:text-white">
                  {String(index + 1).padStart(2, '0')} / {String(processSteps.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Summary Footer */}
        <div className="mt-16 grid grid-cols-1 gap-8 pt-10 md:grid-cols-3 md:mt-10">
          <div>
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#666666]">
              Total Steps
            </span>
            <span className="text-5xl font-semibold tracking-tighter text-[#0033CC] md:text-6xl">
              06
            </span>
          </div>
          <div>
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#666666]">
              Methodology
            </span>
            <span className="text-xl font-medium leading-snug tracking-tight text-black md:text-2xl">
              Systematic, data-driven SEO workflow
            </span>
          </div>
          <div>
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#666666]">
              Location
            </span>
            <span className="text-xl font-medium leading-snug tracking-tight text-[#0033CC] md:text-2xl">
              Alexandria, USA
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}