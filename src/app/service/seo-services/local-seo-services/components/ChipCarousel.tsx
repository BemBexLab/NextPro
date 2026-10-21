"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

const serviceAreas = [  "Plumbers",
  "Electricians",
  "HVAC Contractors",
  "AC Repair Services",
  "Appliance Repair Services",
  "Refrigerator Repair",
  "Washing Machine Repair",
  "Handyman Services",
  "Painters",
  "House Cleaning Services",
  "Carpet Cleaning",
  "Pest Control Services",
  "Termite Control",
  "Locksmiths",
  "Garage Door Repair",
  "Roofers",
  "Roofing Contractors",
  "Solar Panel Installation",
  "CCTV Installation",
  "Security System Installation",
  "Water Tank Cleaning",
  "Water Purifier Services",
  "Geyser Repair",
  "Generator Repair",
  "Furniture Repair",
  "Interior Designers",
  "Home Renovation Contractors",
  "Flooring Contractors",
  "Waterproofing Services",
  "Moving and Relocation Services",
  "Dentists",
  "Dental Clinics",
  "Orthodontists",
  "Cosmetic Dentists",
  "Doctors",
  "Family Physicians",
  "Dermatologists",
  "Skin Clinics",
  "Hair Transplant Clinics",
  "Plastic Surgeons",
  "Eye Clinics",
  "Optometrists",
  "Physiotherapists",
  "Chiropractors",
  "Orthopedic Clinics",
  "Gynecologists",
  "Pediatricians",
  "ENT Specialists",
  "Cardiologists",
  "Psychologists",
  "Psychiatrists",
  "Nutritionists",
  "Dietitians",
  "Speech Therapists",
  "Medical Laboratories",
  "Diagnostic Centers",
  "X-Ray Centers",
  "MRI Centers",
  "Ultrasound Clinics",
  "Hospitals",
  "Urgent Care Clinics",
  "Nursing Services",
  "Home Healthcare Services",
  "Rehabilitation Centers",
  "Hearing Aid Centers",
  "Hair Salons",
  "Barbershops",
  "Beauty Parlors",
  "Nail Salons",
  "Spas",
  "Massage Centers",
  "Makeup Artists",
  "Bridal Makeup Artists",
  "Facial Clinics",
  "Laser Hair Removal Clinics",
  "Tattoo Studios",
  "Piercing Studios",
  "Eyelash Extension Services",
  "Eyebrow Studios",
  "Waxing Salons",
  "Skincare Clinics",
  "Med Spas",
  "Hair Coloring Salons",
  "Bridal Salons",
  "Restaurants",
  "Fast Food Restaurants",
  "Pizza Shops",
  "Burger Shops",
  "Chinese Restaurants",
  "Italian Restaurants",
  "Indian Restaurants",
  "Pakistani Restaurants",
  "BBQ Restaurants",
  "Seafood Restaurants",
  "Cafes",
  "Coffee Shops",
  "Bakeries",
  "Cake Shops",
  "Ice Cream Shops",
  "Dessert Shops",
  "Juice Bars",
  "Tea Shops",
  "Catering Services",
  "Food Trucks",
  "Cloud Kitchens",
  "Donut Shops",
  "Sweet Shops",
  "Pizzerias",
  "Breakfast Restaurants",
  "Auto Repair Shops",
  "Car Mechanics",
  "Auto Electricians",
  "Car Dealerships",
  "Used Car Dealers",
  "Car Rental Services",
  "Car Washes",
  "Auto Detailing Services",
  "Tire Shops",
  "Wheel Alignment Shops",
  "Brake Repair Shops",
  "Oil Change Services",
  "Car AC Repair",
  "Auto Body Shops",
  "Dent Removal Services",
  "Windshield Repair",
  "Car Battery Shops",
  "Motorcycle Repair Shops",
  "Motorcycle Dealerships",
  "Towing Services",
  "Roadside Assistance",
  "Driving Schools",
  "Auto Parts Shops",
  "Car Inspection Services",
  "Lawyers",
  "Law Firms",
  "Family Lawyers",
  "Divorce Lawyers",
  "Criminal Defense Lawyers",
  "Immigration Lawyers",
  "Personal Injury Lawyers",
  "Business Lawyers",
  "Real Estate Lawyers",
  "Tax Lawyers",
  "Estate Planning Lawyers",
  "Bankruptcy Lawyers",
  "Notaries",
  "Legal Consultants",
  "Mediators",
  "Real Estate Agents",
  "Real Estate Agencies",
  "Realtors",
  "Property Dealers",
  "Real Estate Brokers",
  "Property Management Companies",
  "Commercial Real Estate Agents",
  "Rental Agencies",
  "Apartment Rental Services",
  "Property Valuation Services",
  "Home Inspection Services",
  "Mortgage Brokers",
  "Real Estate Investment Firms",
  "Building Contractors",
  "Property Maintenance Services",
  "Schools",
  "Private Schools",
  "Preschools",
  "Daycare Centers",
  "Tuition Centers",
  "Coaching Centers",
  "Academies",
  "Language Schools",
  "English Language Institutes",
  "IELTS Academies",
  "Computer Training Centers",
  "IT Training Institutes",
  "Driving Schools",
  "Music Schools",
  "Dance Schools",
  "Art Classes",
  "Martial Arts Academies",
  "Swimming Schools",
  "Tutoring Services",
  "Vocational Training Centers",
  "Test Preparation Centers",
  "Special Education Centers",
  "Gyms",
  "Personal Trainers",
  "Yoga Studios",
  "Pilates Studios",
  "CrossFit Gyms",
  "Boxing Gyms",
  "MMA Training Centers",
  "Swimming Pools",
  "Sports Academies",
  "Fitness Studios",
  "Weight Loss Centers",
  "Dance Fitness Studios",
  "Martial Arts Schools",
  "Nutrition Coaching Centers",
  "Hotels",
  "Motels",
  "Resorts",
  "Guest Houses",
  "Hostels",
  "Bed and Breakfasts",
  "Travel Agencies",
  "Tour Operators",
  "Tourist Guides",
  "Umrah Travel Agencies",
  "Hajj Travel Agencies",
  "Car Hire Services",
  "Airport Transfer Services",
  "Local Tour Companies",
  "Vacation Rental Agencies",
  "Clothing Stores",
  "Shoe Stores",
  "Jewelry Shops",
  "Watch Shops",
  "Mobile Phone Shops",
  "Computer Shops",
  "Electronics Stores",
  "Furniture Stores",
  "Mattress Stores",
  "Hardware Stores",
  "Paint Shops",
  "Grocery Stores",
  "Supermarkets",
  "Department Stores",
  "Gift Shops",
  "Flower Shops",
  "Toy Stores",
  "Bookshops",
  "Stationery Shops",
  "Pet Shops",
  "Optical Shops",
  "Bicycle Shops",
  "Sports Equipment Stores",
  "Kitchenware Shops",
  "Home Decor Stores",
  "Carpet Shops",
  "Building Material Stores",
  "Tile Shops",
  "Sanitary Ware Shops",
  "Mattress Shops",
  "Accountants",
  "Chartered Accountants",
  "Tax Consultants",
  "Bookkeeping Services",
  "Financial Advisors",
  "Insurance Agents",
  "Insurance Agencies",
  "Business Consultants",
  "Management Consultants",
  "HR Consultants",
  "Recruitment Agencies",
  "Marketing Agencies",
  "Digital Marketing Agencies",
  "SEO Agencies",
  "Web Design Agencies",
  "Graphic Designers",
  "Printing Companies",
  "Architects",
  "Engineering Consultants",
  "Surveyors",
  "Translation Services",
  "Notary Services",
  "IT Support Companies",
  "Computer Repair Services",
  "General Contractors",
  "Home Builders",
  "Commercial Builders",
  "Custom Home Builders",
  "Remodeling Contractors",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Concrete Contractors",
  "Foundation Repair",
  "Masonry Contractors",
  "Bricklayers",
  "Plastering Services",
  "Drywall Contractors",
  "Insulation Contractors",
  "Window Installation",
  "Door Installation",
  "Fence Contractors",
  "Deck Builders",
  "Landscaping Contractors",
  "Garden Maintenance",
  "Tree Removal Services",
  "Irrigation Services",
  "Pool Installation",
  "Swimming Pool Repair",
  "Demolition Contractors",
  "Excavation Contractors",
  "Wedding Planners",
  "Event Planners",
  "Wedding Venues",
  "Banquet Halls",
  "Marquee Services",
  "Party Planners",
  "Event Photographers",
  "Wedding Photographers",
  "Videographers",
  "DJs",
  "Event Caterers",
  "Florists",
  "Decoration Services",
  "Birthday Party Venues",
  "Photo Booth Rentals",
  "Wedding Cake Shops",
  "Bridal Boutiques",
  "Event Equipment Rentals",
  "Sound System Rentals",
  "Wedding Invitation Printers",
  "Veterinary Clinics",
  "Animal Hospitals",
  "Pet Groomers",
  "Pet Boarding Services",
  "Dog Trainers",
  "Pet Daycare Centers",
  "Pet Sitters",
  "Dog Walking Services",
  "Pet Supply Stores",
  "Pet Adoption Centers",
  "Pet Training Schools",
  "Insurance Brokers",
  "Life Insurance Agencies",
  "Health Insurance Agencies",
  "Auto Insurance Agencies",
  "Mortgage Companies",
  "Loan Agencies",
  "Credit Unions",
  "Financial Planning Firms",
  "Tax Preparation Services",
  "Payroll Services",
  "Money Transfer Services",
  "Residential Cleaning Companies",
  "Commercial Cleaning Companies",
  "Office Cleaning Services",
  "Deep Cleaning Services",
  "Window Cleaning",
  "Pressure Washing Services",
  "Sofa Cleaning",
  "Mattress Cleaning",
  "Dry Cleaners",
  "Laundry Services",
  "Carpet Cleaning",
  "Janitorial Services",
  "Airbnb Cleaning Services",
  "Post-Construction Cleaning",
  "Chimney Cleaning",
  "Commercial HVAC Contractors",
  "Commercial Electricians",
  "Commercial Plumbers",
  "Industrial Equipment Repair",
  "Forklift Repair Services",
  "Commercial Refrigeration Services",
  "Fire Protection Companies",
  "Fire Alarm Installation",
  "Commercial Security Services",
  "Commercial Pest Control",
  "Commercial Cleaning Companies",
  "Industrial Supply Stores",
  "Welding Services",
  "Metal Fabrication Shops",
  "Sign Manufacturing Companies",
  "Commercial Printing Companies",
  "Commercial Landscaping Services",
  "Childcare Centers",
  "Daycare Services",
  "Senior Care Services",
  "Assisted Living Facilities",
  "Funeral Homes",
  "Cremation Services",
  "Marriage Counseling",
  "Family Counseling Centers",
  "Career Counseling",
  "Personal Concierge Services",
  "Tailoring Shops",
  "Alteration Services",
  "Shoe Repair Shops",
  "Watch Repair Shops",
  "Dry Cleaning Services",
  "Pharmacies",
  "Florists",
  "Laundromats",
  "Storage Facilities",
  "Self-Storage Companies",
  "Coworking Spaces",
  "Event Halls",
  "Banquet Centers",
  "Printing Shops",
  "Sign Shops",
  "Courier Services",
  "Local Delivery Companies",
  "Water Delivery Services",
  "Ice Suppliers",
  "Gas Appliance Repair",
  "Funeral Services",
  "Recycling Centers",
  "Scrap Metal Dealers",
  "Boat Repair Services",
  "Marina Services",];

const ChipCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      aria-labelledby="local-seo-service-areas-heading"
      className="border-y border-slate-200 bg-[#f8fbff] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div>
            <div aria-hidden="true" className="mb-5 h-1 w-12 bg-[#c8102e]" />
            <h2
              id="local-seo-service-areas-heading"
              className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Web Founders Specially Served Local SEO Services
            </h2>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              aria-label={isPaused ? "Resume automatic scrolling" : "Pause automatic scrolling"}
              aria-pressed={isPaused}
              onClick={() => setIsPaused((paused) => !paused)}
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#072d7f] transition-colors hover:border-[#0b63b8] hover:text-[#0b63b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2"
            >
              {isPaused ? (
                <Play aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Pause aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          id="local-seo-service-areas-carousel"
          role="region"
          aria-label="Local SEO services"
          tabIndex={0}
          className="overflow-hidden pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2"
        >
          <div className="space-y-2">
            {[0, 1, 2].map((rowIndex) => {
              const itemsPerRow = Math.ceil(serviceAreas.length / 3);
              const rowItems = serviceAreas.slice(
                rowIndex * itemsPerRow,
                (rowIndex + 1) * itemsPerRow,
              );

              return (
                <div key={rowIndex} className="overflow-hidden">
                  <div
                    className={`flex w-max ${
                      isPaused
                        ? "animate-[local-seo-chip-scroll_180s_linear_infinite] [animation-play-state:paused] motion-reduce:animate-none"
                        : "animate-[local-seo-chip-scroll_180s_linear_infinite] focus-within:[animation-play-state:paused] motion-reduce:animate-none"
                    }`}
                  >
                    {[0, 1].map((copy) => (
                      <ul
                        key={copy}
                        aria-hidden={copy === 1 ? "true" : undefined}
                        className="flex w-max gap-2 pr-2"
                      >
                        {rowItems.map((service, index) => {
                          const itemIndex = rowIndex * itemsPerRow + index;

                          return (
                            <li
                              key={`${copy}-${service}-${itemIndex}`}
                              className="w-48 shrink-0"
                            >
                              <span
                                className={`inline-flex h-16 w-full items-center whitespace-normal break-words rounded-xl border px-3.5 py-2.5 text-left text-sm font-semibold leading-snug tracking-[0.005em] shadow-[0_5px_18px_rgba(7,45,127,0.045)] ${
                                  itemIndex % 12 === 0
                                    ? "border-[#0b63b8] bg-[#0b63b8] text-white"
                                    : itemIndex % 12 === 7
                                      ? "border-[#c8102e]/20 bg-[#fff1f3] text-[#8f1028]"
                                      : itemIndex % 12 === 4
                                        ? "border-[#cfe2f5] bg-[#eaf4fc] text-[#072d7f]"
                                        : "border-slate-200 bg-white text-slate-700"
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`mr-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                                    itemIndex % 12 === 0
                                      ? "bg-[#f6d7df]"
                                      : itemIndex % 12 === 7
                                        ? "bg-[#c8102e]"
                                        : "bg-[#0b63b8]"
                                  }`}
                                />
                                {service}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@keyframes local-seo-chip-scroll { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
};

export default ChipCarousel;
