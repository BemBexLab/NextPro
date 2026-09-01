const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const bentoLayouts = [
  "lg:col-span-3 lg:row-span-2 sm:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-2 lg:row-span-2 sm:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3 sm:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2 lg:row-span-2 sm:col-span-2",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-3 sm:col-span-2",
];

const LocationGrid = () => {
  const renderStateButton = (state: string, index: number) => (
    <button
      key={state}
      type="button"
      className={`flex min-h-[72px] min-w-0 items-center justify-center rounded-[20px] border border-[#ff7180] bg-gradient-to-br from-[#ff4657] to-[#e92239] px-4 py-3 text-center text-sm font-bold uppercase leading-tight tracking-[-0.02em] text-white shadow-[0_8px_18px_rgba(255,47,67,0.2)] transition-all duration-200 hover:-translate-y-1 hover:from-[#ff5968] hover:to-[#d91b32] hover:shadow-[0_12px_24px_rgba(255,47,67,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2f43] focus-visible:ring-offset-2 lg:min-h-[74px] ${bentoLayouts[index % bentoLayouts.length]}`}
    >
      {state}
    </button>
  );

  return (
      <section className="bg-white px-5 pt-[62px] text-[#082b4a] sm:px-8 py-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="text-[34px] font-bold leading-[1.2] tracking-[-0.035em] sm:text-[36px]">
            Online Services For Businesses Across The USA
          </h2>

          <p className="mx-auto mt-[20px] max-w-[1400px] text-[16px] leading-[1.68] tracking-[0.035em] sm:text-[17px]">
            At WebFoundersUSA, we provide top-notch web design and development services to businesses of all
            sizes, located anywhere in the USA. Our team of experts is dedicated to delivering custom
            solutions that help businesses succeed online. Whether you need a new website or want to
            improve your existing online presence, we&apos;re here to help. Contact us today to learn more about
            our services and how we can help your business grow.
          </p>

          <div className="mx-auto mt-[40px] grid auto-rows-[72px] grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4 lg:auto-rows-[74px] lg:grid-cols-12 lg:gap-5">
            {states.map(renderStateButton)}
          </div>
        </div>
      </section>
  );
};

export default LocationGrid;
