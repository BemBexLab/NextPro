import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function AlexandriaPhilosophy() {
  return (
    <div 
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-12">

        {/* Main Content */}
        <main>   
          {/* Heading */}
          <header className="mb-16 md:mb-24">
            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
              Why Choose{' '}
              <span className="relative inline-block text-[#0033CC]">
                Alexandria SEO
                <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-black" />
              </span>{' '}
              Web Founders USA Agency?
            </h2>
          </header>

          {/* Content Blocks */}
          <div className="space-y-16 md:space-y-20">
            
            {/* Paragraph 1: The Manifesto (Larger, Bold) */}
            <section className="border-l-4 border-black pl-6 md:pl-10">
              <p className="text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl lg:text-4xl">
                Our approach is based on research, transparency, and continuous optimization rather than shortcuts.
              </p>
            </section>

            {/* Paragraph 2: The Reality Check */}
            <section className="relative">
              <div className="mb-6 flex items-baseline gap-6">
                <span className="font-mono whitespace-nowrap text-xs uppercase tracking-widest text-[#0033CC]">
                  [ 01 ] The Reality
                </span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <p className="max-w-4xl text-lg leading-relaxed tracking-tight text-[#222222] md:text-xl lg:text-2xl">
                We don't promise guaranteed Google rankings because no legitimate SEO agency in Alexandria, VA can control Google's search results. Instead, we focus on the factors we can influence: website quality, technical SEO, content relevance, local optimization, search intent, and the overall user experience.
              </p>
            </section>

            {/* Paragraph 3: The Investment */}
            <section className="relative">
              <div className="mb-6 flex items-baseline gap-6">
                <span className="font-mono whitespace-nowrap text-xs uppercase tracking-widest text-[#0033CC]">
                  [ 02 ] The Investment
                </span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <p className="max-w-4xl text-lg leading-relaxed tracking-tight text-[#222222] md:text-xl lg:text-2xl">
                We also believe businesses should understand what their SEO investment is doing. Our recommendations are therefore connected to specific SEO opportunities rather than vague promises about “getting more traffic.”
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}