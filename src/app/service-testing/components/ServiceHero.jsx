import React from "react";

const ServiceHero = () => {
  return (
    <section
      className="w-full min-h-[730px] h-auto lg:h-[730px] bg-cover bg-center bg-no-repeat py-10 md:py-16 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/service-testing/Local-SEO-Agency-LocalMighty.webp')",
      }}
    >
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-12 gap-6 md:gap-8 items-start">
        <div className="col-span-12 lg:col-span-7 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mt-8 md:mt-20 lg:mt-40 leading-tight drop-shadow-md">
            Dominate Your Local Market With Expert Local SEO Services
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl max-w-[720px] text-slate-100/90">
            Our local SEO services help your business win visibility in Google
            Maps, rank higher in local search, and turn high-intent searches
            into real calls and customers. With focused SEO, GEO, and AEO
            strategies powered by AI insights, we position your brand ahead in
            Maps and AI search, not just traditional rankings.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-[#0b63b8] hover:bg-[#075aa6] text-white font-semibold px-6 py-3 rounded-lg shadow w-full sm:w-auto">
              See Results
              <span className="ml-3 inline-block">›</span>
            </button>

            <button className="border border-white/40 text-white px-6 py-3 rounded-lg backdrop-blur-sm w-full sm:w-auto">
              Why Us
              <span className="ml-3 inline-block">›</span>
            </button>
          </div>
        </div>

        <aside className="col-span-12 mt-6 md:mt-8 lg:col-span-5">
          <div className="bg-[#F2F3F5] rounded-xl p-4 sm:p-6 shadow-xl max-w-[420px] lg:ml-auto mx-auto lg:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                className="col-span-1 p-3 rounded-md border border-gray-200 bg-white text-sm sm:text-base"
                placeholder="First Name"
              />
              <input
                className="col-span-1 p-3 rounded-md border border-gray-200 bg-white text-sm sm:text-base"
                placeholder="Last Name"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-200 bg-white text-sm sm:text-base"
                placeholder="Email Address"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-200 bg-white text-sm sm:text-base"
                placeholder="Website URL"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-200 bg-white text-sm sm:text-base"
                placeholder="Phone"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <textarea
                className="w-full p-3 rounded-md border border-gray-200 bg-white h-24 sm:h-28 text-sm sm:text-base"
                placeholder="Message"
              />
            </div>

            <div className="mt-3 sm:mt-4 border rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="relative w-5 h-5 appearance-none bg-white border-2 border-gray-300 rounded cursor-pointer checked:bg-white checked:border-black checked:before:content-['✓'] checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-black checked:before:font-bold checked:before:text-sm"
                />
                <span className="text-xs sm:text-sm">I'm not a robot</span>
              </label>

              <div className="w-20 h-10 sm:w-24 sm:h-12 bg-gray-100 flex items-center justify-center text-xs text-gray-500 self-end sm:self-auto">
                reCAPTCHA
              </div>
            </div>

            <button className="mt-4 sm:mt-5 w-full bg-[#0b63b8] text-white py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#075aa6] transition-colors">
              Send
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceHero;