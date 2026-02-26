import React from "react";

const NavBar = ({
  logoSrc = "/logo.png",
  logoAlt = "logo",
}) => {
  return (
    <header className="w-full flex justify-center py-6">
      <nav className="w-[95%] max-w-[1200px] bg-[#e8eef4] rounded-2xl shadow-md px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden">
              <img
                src={logoSrc}
                alt={logoAlt}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
          <li className="hover:text-slate-900 cursor-pointer">Home</li>
          <li className="flex items-center gap-1 hover:text-slate-900 cursor-pointer">
            Solutions <ChevronDown />
          </li>
          <li className="hover:text-slate-900 cursor-pointer">Industries</li>
          <li className="flex items-center gap-1 hover:text-slate-900 cursor-pointer">
            Locations <ChevronDown />
          </li>
          <li className="flex items-center gap-1 hover:text-slate-900 cursor-pointer">
            Case Studies <ChevronDown />
          </li>
          <li className="hover:text-slate-900 cursor-pointer">About</li>
          <li className="hover:text-slate-900 cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center gap-3 bg-[#0b63b8] text-white font-semibold px-5 py-2 rounded-full shadow-sm">
            <span>Free SEO Audit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-slate-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default NavBar;
