import Image from "next/image";
import Link from "next/link";
import { getServiceById } from "./subservices";

function formatHtml(value) {
  return {
    __html: (value || "").toString().replace(/\n/g, "<br/>"),
  };
}

export default function ExpertsPage({ params }) {
  const serviceId = params?.id || "seo-services";
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <p className="mt-4">We couldn&apos;t find the service you&apos;re looking for.</p>
        <div className="mt-6">
          <Link href="/service" className="text-[#072d7f] underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const certifications = [
    { logo: "/service-testing/GA-certified.webp", alt: "Google Analytics certification" },
    { logo: "/service-testing/images-300x82.webp", alt: "SEO partner certification" },
    { logo: "/service-testing/hubspot.webp", alt: "HubSpot certification" },
    { logo: "/service-testing/google-digital-garage-1.webp", alt: "Google Digital Garage certification" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <h2 className="mb-6 text-center text-4xl font-medium text-[#0b63b8] md:text-5xl">
          SEO That Brings Nearby Customers
        </h2>

        <p className="mx-auto mb-12 max-w-[900px] text-center text-md text-gray-600">
          Getting seen online does not require fancy tricks for small shops. The
          important thing is to appear when neighbors search in the area, which
          is exactly what small business Search Engine Optimization experts focus
          on. Simple steps work better than complicated plans. Real outcomes,
          stable rates, and no extended contracts are what you can expect from
          some suppliers.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.logo}
              className="flex min-h-[120px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-8"
            >
              <Image
                src={cert.logo}
                alt={cert.alt}
                width={220}
                height={80}
                sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 80vw"
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {service.sub_categories?.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center md:mb-20">
              <h2 className="text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                <span className="text-4xl font-medium leading-tight text-[#0b63b8] md:text-5xl">
                  Explore Related Services
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Dive deeper into specific offerings related to this service.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {service.sub_categories.map((sub) => {
                const Icon = sub.icon || service.icon;

                return (
                  <Link
                    key={sub.id}
                    href={`/service/${service.id}/${sub.id}`}
                    className="group rounded-[30px] bg-[#072d7f] p-6 text-white transition-all duration-300 hover:border-[#072d7f] md:p-8"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-transparent bg-[rgba(255,255,255,0.10)] transition-all duration-300 group-hover:border-[#DE2F04] md:mb-6 md:h-16 md:w-16">
                      {Icon ? (
                        <Icon className="h-6 w-6 text-[#f84318] md:h-8 md:w-8" />
                      ) : (
                        <Image
                          src={sub.hero?.image || service.hero?.image}
                          alt={sub.title}
                          width={32}
                          height={32}
                          sizes="32px"
                          className="h-6 w-6 object-contain md:h-8 md:w-8"
                        />
                      )}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-white md:mb-3 md:text-xl">
                      <span className="bg-gradient-to-r from-[#ffb199] to-[white] bg-clip-text text-transparent">
                        {sub.title.split(" ")[0]}
                      </span>{" "}
                      {sub.title.split(" ").slice(1).join(" ")}
                    </h3>

                    <p
                      className="mb-4 text-xs leading-relaxed text-white md:mb-6 md:text-sm"
                      dangerouslySetInnerHTML={formatHtml(
                        sub.desc || sub.introParagraphs?.[0] || "",
                      )}
                    />

                    <span className="inline-flex items-center justify-end font-semibold text-white">
                      Explore service <span className="ml-2">&rarr;</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto mt-20 flex w-[92%] max-w-[1200px] justify-center py-20">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl font-normal leading-tight text-gray-900">
              Real SEO Results Not Just Rankings
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We do <strong>Search engine optimization services</strong> that get
              you real money, qualified leads, and steady traffic, not just pretty
              reports. We offer <strong>Professional SEO solutions</strong> to both
              small and large businesses that can grow with them. With our Organic
              growth services, we want to help your site grow over time. With our
              on-page SEO services, we want to make it easier to use. And with our
              technical Ranking improvement strategy, we want to make it better.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              ["Local Businesses", "Supported", "400+"],
              ["Leads Generated", "Through SEO", "1200K+"],
              ["Average Organic", "Growth Delivered", "1,000%+"],
              ["Revenue Influenced", "via SEO", "$200k+"],
            ].map(([lineOne, lineTwo, value]) => (
              <div
                key={`${lineOne}-${value}`}
                className="rounded-lg border border-gray-200 bg-gray-50 p-8"
              >
                <p className="mb-4 text-center font-semibold text-gray-800">
                  {lineOne}
                  <br />
                  {lineTwo}
                </p>
                <div
                  className="mx-auto mb-6 h-1 w-24"
                  style={{ background: "linear-gradient(to right, #9333ea, #dc2626)" }}
                />
                <p className="text-center text-5xl font-bold text-[#0b63b8]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
