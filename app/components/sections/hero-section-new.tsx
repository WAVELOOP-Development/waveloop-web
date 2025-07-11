"use client";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import React, { useState } from "react";

const HeroSectionNew = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative">
      {/* Image placeholder */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat z-10"
          style={{
            backgroundImage: "url('/placeholder.png')",
          }}
        />
      )}
      
      <video
        preload="auto"
        loop
        autoPlay={true}
        muted={true}
        playsInline
        controls={false}
        className="w-full h-screen object-cover"
        onLoadedData={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src="/intro_3_E.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute flex justify-start items-end inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent">
        <div className="container mx-auto py-16">
          <div className="flex flex-col justify-between items-center text-left gap-12">
            <div className="flex flex-col gap-2 lg:gap-6">
              <span className="cursor-default lg:text-7xl text-4xl lg:leading-22 leading-10 px-4 lg:px-0 font-semibold text-center tracking-wide text-white">
                <TextAnimate animation="slideLeft" by="word" once>
                  Empowering Innovation Through
                </TextAnimate>
                <TextAnimate animation="slideLeft" by="word" once>
                  Intelligent Solutions
                </TextAnimate>
              </span>
              {/* <span className="cursor-default lg:text-xl text-sm px-4 lg:px-0 font-medium text-center tracking-wide text-gray-300">
                <TextAnimate animation="slideLeft" by="word" once>
                  Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion.
                </TextAnimate>
              </span> */}
            </div>
            <div className="cursor-default">
              <InteractiveHoverButton
                className="pointer"
                onClick={scrollToAbout}
              >
                Wanna Know Us?
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionNew;
