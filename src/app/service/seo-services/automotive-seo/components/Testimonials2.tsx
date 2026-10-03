import React from 'react'
import { FaStar, FaStarHalfAlt, FaArrowRight } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    text: 'Web Founders USA transformed our online presence. Their team delivered a stunning website that increased our conversions by 40%. Highly recommended!',
    rating: 5,
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLab',
    text: 'Exceptional service from start to finish. The attention to detail and creative approach made all the difference for our brand.',
    rating: 5,
    initials: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Bloom Co.',
    text: 'Working with Web Founders USA was a game-changer. They understood our vision and brought it to life beautifully.',
    rating: 5,
    initials: 'ER'
  }
]

const StarRating = ({ rating, size = 'text-4xl' }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          return <FaStar key={star} className={`${size} text-amber-500`} />
        } else if (star <= rating) {
          return <FaStarHalfAlt key={star} className={`${size} text-amber-500`} />
        } else {
          return <FaStar key={star} className={`${size} text-gray-300`} />
        }
      })}
    </div>
  )
}

const Testimonials2 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full border-[20px] border-blue-200/30" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full border-[15px] border-blue-200/20" />
      <div className="absolute top-[50px] right-[100px] w-[120px] h-[120px] rounded-full bg-red-200/15" />
      <div className="absolute bottom-[100px] left-[100px] w-[200px] h-[200px] rounded-full bg-blue-100/40" />

      <div className="relative z-10 max-w-9xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side - Rating Card (WIDER) */}
        <div className="w-full lg:w-1/2 bg-red-500 flex justify-center">
          <div className="bg-white shadow-xl p-10 sm:p-14 relative overflow-hidden max-w-2xl w-full">
            
            {/* Top Right Dot Grid */}
            <div className="absolute top-6 right-6 grid grid-cols-4 gap-1.5">
              {[...Array(16)].map((_, i) => (
                <div key={`tr-${i}`} className="w-2 h-2 rounded-full bg-blue-200/60" />
              ))}
            </div>

            {/* Bottom Left Dot Grid */}
            <div className="absolute bottom-6 left-6 grid grid-cols-4 gap-1.5">
              {[...Array(16)].map((_, i) => (
                <div key={`bl-${i}`} className="w-2 h-2 rounded-full bg-blue-200/60" />
              ))}
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Web Founders {""}
              <span className="text-red-600">USA</span>
            </h2>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-6xl font-bold text-slate-900 leading-none">
                4.8
              </span>
              <StarRating rating={4.8} size="text-4xl" />
            </div>

            <p className="text-xl text-slate-500 mb-2">
              Based on <span className="text-red-600 font-semibold">625</span> reviews
            </p>

            <p className="text-xl text-slate-500 mb-10">
              powered by{' '}
              <span className="font-semibold text-xl">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </p>

            <button className="flex items-center justify-center gap-4 bg-slate-900 text-white rounded-full py-2 px-4 max-w-full font-semibold text-lg hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-lg group">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <FcGoogle className="text-xl" />
              </div>
              Review us on Google
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side - Testimonials */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              What Our Clients Say
            </h3>
            <p className="text-slate-500 text-lg">
              Don't just take our word for it. Here is what our clients have to say about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                  <StarRating rating={testimonial.rating} size="text-sm" />
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials2
