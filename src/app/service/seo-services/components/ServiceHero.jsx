import Image from "next/image";
import Link from "next/link";

export default function ServiceHero() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      <Image
        src="/service-testing/Local-SEO-Agency-LocalMighty.webp"
        alt="SEO services hero background"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative mx-auto grid w-[92%] max-w-[1200px] grid-cols-12 items-start gap-8">
        <div className="col-span-12 text-white lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/90">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">{">"}</li>
              <li>
                <Link href="/service" className="transition-colors hover:text-white">
                  Service
                </Link>
              </li>
              <li aria-hidden="true">{">"}</li>
              <li className="font-medium text-white">SEO Services</li>
            </ol>
          </nav>

          <h1 className="mt-10 text-4xl font-bold leading-tight drop-shadow-md">
            Professional SEO Services Built on Strategy, Trust & Results - Web
            Founders USA
          </h1>

          <p className="mt-6 max-w-[720px] text-md text-slate-100/90 md:text-xl">
            At{" "}
            <a className="font-semibold text-white hover:underline" href="/">
              Web Founders USA
            </a>
            , every step we take is based on real results, not quick fixes. Our
            approach combines sharp <strong>SEO audit services</strong>.
            <br />
            <br />
            Imagine clearer online positioning, steady traffic growth, and a
            smarter site structure, all built without tricks. The work stays
            grounded in what lasts, whether it&apos;s fine-tuning product pages or
            guiding strategy through <b>Professional SEO solutions</b>.
            <br />
            <br />
            You can make real changes by working hard, being open about how you
            do things, and planning ahead. That&apos;s how presence grows, not all at
            once, but little by little.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact-us"
              className="rounded-lg bg-[#0b63b8] px-6 py-3 font-semibold text-white shadow hover:bg-[#075aa6]"
            >
              Contact Us
              <span className="ml-3 inline-block">&gt;</span>
            </Link>

            <Link
              href="/about-us"
              className="rounded-lg border border-white/40 px-6 py-3 text-white backdrop-blur-sm"
            >
              About Us
              <span className="ml-3 inline-block">&gt;</span>
            </Link>
          </div>
        </div>

        <aside className="col-span-12 mt-15 lg:col-span-5">
          <div className="mx-auto max-w-[420px] rounded-xl bg-[#F2F3F5] p-6 shadow-xl lg:ml-auto">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="col-span-1 rounded-md border border-gray-200 bg-white p-3"
                placeholder="First Name"
              />
              <input
                className="col-span-1 rounded-md border border-gray-200 bg-white p-3"
                placeholder="Last Name"
              />
            </div>

            <div className="mt-4">
              <input
                className="w-full rounded-md border border-gray-200 bg-white p-3"
                placeholder="Email Address"
              />
            </div>

            <div className="mt-4">
              <input
                className="w-full rounded-md border border-gray-200 bg-white p-3"
                placeholder="Website URL"
              />
            </div>

            <div className="mt-4">
              <input
                className="w-full rounded-md border border-gray-200 bg-white p-3"
                placeholder="Phone"
              />
            </div>

            <div className="mt-4">
              <textarea
                className="h-38 w-full rounded-md border border-gray-200 bg-white p-3"
                placeholder="Message"
              />
            </div>

            <button className="mt-10 w-full rounded-full bg-[#0b63b8] py-3 font-semibold text-white">
              Send
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
