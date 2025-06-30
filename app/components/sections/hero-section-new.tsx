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
        <div className="container mx-auto py-16">
          <div className="flex justify-between items-end gap-4 text-left">
            <span className="cursor-default text-7xl font-bold leading-normal tracking-wide text-white">
              <TextAnimate animation="slideLeft" by="character" once>
                Empowering Innovation Through
              </TextAnimate>
              <TextAnimate animation="slideLeft" by="character" once>
                Intelligent Solutions
              </TextAnimate>
            </span>
            <div className="cursor-default">
              <InteractiveHoverButton className="pointer">
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
