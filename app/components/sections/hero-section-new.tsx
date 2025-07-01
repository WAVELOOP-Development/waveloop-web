import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import React from "react";

const HeroSectionNew = () => {
  return (
    <div className="relative">
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-screen object-cover"
      >
        <source src="./intro_3.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute flex justify-start items-end inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-4 text-left">
            <span className="cursor-default text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-normal tracking-wide text-white max-w-full lg:max-w-4xl">
              <TextAnimate animation="slideLeft" by="character" once>
                Empowering Innovation
              </TextAnimate>
              <br className="block sm:hidden" />
              <TextAnimate animation="slideLeft" by="character" once>
                Through
              </TextAnimate>
              <br className="block sm:hidden" />
              <TextAnimate animation="slideLeft" by="character" once>
                Intelligent Solutions
              </TextAnimate>
            </span>
            <div className="cursor-default self-start lg:self-end">
              <InteractiveHoverButton className="pointer text-sm sm:text-base">
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
