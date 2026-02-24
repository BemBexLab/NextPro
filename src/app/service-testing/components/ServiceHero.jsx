import React from "react";

const ServiceHero = () => {
  return (
    <section
      className="w-full min-h-[730px] bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/service-testing/Local-SEO-Agency-LocalMighty.webp')",
      }}
    >
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-7 text-white">
          <h1 className="text-4xl font-bold mt-10 leading-tight drop-shadow-md">
            Professional SEO Services Built on Strategy, Trust & Results - Web Founders USA
          </h1>

          <p className="mt-6 text-md md:text-xl max-w-[720px] text-slate-100/90">
            At Web Founders USA, every step we take is based on real results, not quick fixes. Our approach combines sharp SEO audit services.
            <br />
            <br />
            Imagine clearer online positioning, steady traffic growth, and a smarter site structure, all built without tricks. The work stays grounded in what lasts, whether it's fine-tuning product pages or guiding strategy through professional SEO services. 
            <br />
            <br />
            You can make real changes by working hard, being open about how you do things, and planning ahead. That's how presence grows, not all at once, but little by little.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#0b63b8] hover:bg-[#075aa6] text-white font-semibold px-6 py-3 rounded-lg shadow">
              See Results
              <span className="ml-3 inline-block">›</span>
            </button>

            <button className="border border-white/40 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
              Why Us
              <span className="ml-3 inline-block">›</span>
            </button>
          </div>
        </div>

        <aside className="col-span-12 mt-8 lg:col-span-5">
          <div className="bg-[#F2F3F5] rounded-xl p-6 shadow-xl max-w-[420px] mx-auto lg:ml-auto">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="col-span-1 p-3 rounded-md border border-gray-200 bg-white"
                placeholder="First Name"
              />
              <input
                className="col-span-1 p-3 rounded-md border border-gray-200 bg-white"
                placeholder="Last Name"
              />
            </div>

            <div className="mt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-200 bg-white"
                placeholder="Email Address"
              />
            </div>

            <div className="mt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-200 bg-white"
                placeholder="Website URL"
              />
            </div>

            <div className="mt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-200 bg-white"
                placeholder="Phone"
              />
            </div>

            <div className="mt-4">
              <textarea
                className="w-full p-3 rounded-md border border-gray-200 bg-white h-28"
                placeholder="Message"
              />
            </div>

            <div className="mt-4 border rounded-md p-3 flex items-center justify-between">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="relative w-5 h-5 appearance-none bg-white border-2 border-gray-300 rounded cursor-pointer checked:bg-white checked:border-black checked:before:content-['✓'] checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-black checked:before:font-bold checked:before:text-sm"
                />
                <span className="text-sm">I'm not a robot</span>
              </label>

              <div className="w-24 h-12 bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                reCAPTCHA
              </div>
            </div>

            <button className="mt-5 w-full bg-[#0b63b8] text-white py-3 rounded-full font-semibold">
              Send
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceHero;
