"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle, Code, Database, Smartphone, Monitor, Cloud, Layers, PlayIcon } from "lucide-react"

const SoftwareAgencyHero = () => {
  return (
    <section className="container py-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl px-8 lg:px-16 py-16 border border-blue-100 dark:border-gray-700 overflow-hidden relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center relative z-10">
          {/* Left side content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforming
                <span className="text-blue-600 block">Ideas into</span>
                <span className="text-indigo-600">Software Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                We build custom web applications, mobile apps, and enterprise software that solve real business problems
                and drive growth for companies worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                className="group bg-blue-600  text-blue-100 group-hover:bg-blue-100 group-hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 text-blue-100 transition-colors duration-300 group-hover:text-blue-600" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    {/* The icon color will change when the button (group) is hovered */}
                    <Play className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300 ml-1" />
                  </div>
                  <span>View Our Work</span>
                </div>
              </Button>

            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Agile Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - MUCH LARGER geometric shapes with individual hover effects */}
          <div className="relative h-96 lg:h-[600px]">
            {/* Main 3D cube with Code icon - Individual hover effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
              <div className="relative">
                {/* Cube faces */}
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl transform rotate-12 transition-all duration-500 flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-3xl">
                  <Code className="w-28 h-28 text-white transition-all duration-500 group-hover:scale-110" />
                </div>
                {/* Cube shadow/depth */}
                <div className="absolute top-4 left-4 w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl -z-10 transform rotate-12 transition-all duration-500 group-hover:top-6 group-hover:left-6"></div>
              </div>
            </div>

            {/* Smartphone Circle - Individual hover effect */}
            <div className="absolute top-0 right-0 group cursor-pointer">
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:translate-x-2">
                <Smartphone className="w-20 h-20 text-white transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Database Square - Individual hover effect */}
            <div className="absolute bottom-0 left-0 group cursor-pointer">
              <div className="w-44 h-44 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg transform rotate-45 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-[50deg] group-hover:translate-x-2 group-hover:-translate-y-2">
                <Database className="w-20 h-20 text-white transform -rotate-45 transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Monitor Rectangle - Individual hover effect */}
            <div className="absolute top-0 left-0 group cursor-pointer">
              <div className="w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:translate-x-2 group-hover:translate-y-2">
                <Monitor className="w-16 h-16 text-white transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Cloud Rectangle - Individual hover effect */}
            <div className="absolute bottom-0 right-0 group cursor-pointer">
              <div className="w-52 h-52 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl shadow-lg transform -rotate-12 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <Cloud className="w-24 h-24 text-white transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Layers Rectangle - Individual hover effect */}
            <div className="absolute top-1/2 right-0 group cursor-pointer">
              <div className="w-36 h-36 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-x-2">
                <Layers className="w-16 h-16 text-white transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Connecting lines/dots - Static */}
            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareAgencyHero
