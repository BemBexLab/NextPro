import React from "react";

const ClaimFreeCall = () => {
  return (
    <section className="w-full">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        <div className="bg-[#0749A7] text-white rounded-2xl px-8 py-12 md:py-20 flex flex-col items-center text-center">
          <h2 className="text-[40px] font-medium leading-tight mb-6">
            Ready To Grow Your Business With Web Founders USA?
          </h2>
          <p className="text-lg md:text-2xl mb-8 opacity-90">
            Book your free consultation and see how we deliver real results.
          </p>

          <a
            href="#"
            className="bg-white h-[50px] text-[#0749A7] flex items-center justify-center font-medium rounded-xl px-8 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            Claim Your Free Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClaimFreeCall;

