import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const ExploreBlogs = () => {
  return (
    <section className="relative overflow-hidden px-20 py-22 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-20 py-16 md:py-14 max-w-8xl ">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-8 z-20 relative mb-2 md:mb-40">
            <h2 className="text-5xl md:text-7xl font-bold text-[#021443] leading-tight">
              Explore Our<br />
              <span className="text-[#021443]">Blogs</span>
            </h2>

            {/* Card positioned strategically */}
            <div className="bg-[#021443] text-white rounded-3xl p-8 md:p-10 max-w-lg shadow-2xl transform md:translate-x-56 md:translate-y-1">
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
          <div className="w-full md:w-3/5 md:absolute md:right-0 md:top-0 h-[1200px] md:h-[1400px] z-10">
            <div className="relative h-full w-full">
              <Image
                src="/blog.jpg"
                alt="Modern workspace"
                width={850}
                height={2000}
                className="object-cover rounded-3xl"
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
