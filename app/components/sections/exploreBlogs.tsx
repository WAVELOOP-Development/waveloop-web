import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const ExploreBlogs = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-8 md:px-20 py-8 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-8 z-20 relative mb-12 md:mb-0">
            <h2 className="hidden lg:block text-4xl md:text-7xl font-bold text-[#021443] leading-tight">
              Explore Our<br />Blogs
            </h2>
            <h2 className="lg:hidden text-center text-4xl md:text-7xl font-bold text-[#021443] leading-tight">
              Explore Our Blogs
            </h2>
            {/* Card positioned strategically */}
            <div className="bg-[#021443] text-white rounded-3xl p-8 md:p-10 max-w-lg shadow-2xl transform md:translate-x-16 md:translate-y-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Explore Ideas<br />
                That Inspire Innovation
              </h3>
              <p className="text-base text-gray-200 mb-8 leading-relaxed">
                Get insights, trends, and expert takes on tech, AI, security &
                everything shaping the digital future.<br />
                <span className="font-medium">Straight from the minds at WAVELOOP.</span>
              </p>
              <Button 
                variant="ghost" 
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <ArrowRight size={24} />
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-3/5 md:absolute md:right-0 md:top-0 h-[400px] md:h-full z-10">
            <div className="lg:relative top-1/3 left-0 right-0 lg:top-0  absolute h-full w-full">
              <Image
                src="/blog.jpg"
                alt="Modern workspace with laptop and creative setup"
                fill
                className="object-cover rounded-3xl md:rounded-l-3xl md:rounded-r-none"
                priority
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/30 rounded-3xl md:rounded-l-3xl md:rounded-r-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreBlogs
