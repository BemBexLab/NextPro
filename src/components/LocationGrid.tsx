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

const finalRowStates = states.slice(-4);
const primaryStates = states.slice(0, -4);

const LocationGrid = () => {
  const renderStateButton = (state: string) => (
    <button
      key={state}
      type="button"
      className="flex h-[41px] w-full items-center justify-center rounded-[4px] bg-[#ff2f43] px-3 text-center text-[14px] font-extrabold uppercase leading-none tracking-[-0.02em] text-white shadow-[0_5px_12px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#ed2639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2f43] focus-visible:ring-offset-2"
    >
      {state}
    </button>
  );

  return (
      <section className="bg-white px-5 pt-[62px] text-[#082b4a] sm:px-8 py-20">
        <div className="mx-auto max-w-[1012px] text-center">
          <h2 className="text-[34px] font-bold leading-[1.2] tracking-[-0.035em] sm:text-[36px]">
            Online Services For Businesses Across The USA
          </h2>

          <p className="mx-auto mt-[20px] max-w-[825px] text-[16px] leading-[1.68] tracking-[0.035em] sm:text-[17px]">
            At Websvent, we provide top-notch web design and development services to businesses of all
            sizes, located anywhere in the USA. Our team of experts is dedicated to delivering custom
            solutions that help businesses succeed online. Whether you need a new website or want to
            improve your existing online presence, we&apos;re here to help. Contact us today to learn more about
            our services and how we can help your business grow.
          </p>

          <div className="mt-[40px] grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {primaryStates.map(renderStateButton)}
          </div>

          <div className="mx-auto mt-5 grid max-w-[668px] grid-cols-2 gap-5 sm:grid-cols-4">
            {finalRowStates.map((state) => (
              renderStateButton(state)
            ))}
          </div>
        </div>
      </section>
  );
};

export default LocationGrid;
