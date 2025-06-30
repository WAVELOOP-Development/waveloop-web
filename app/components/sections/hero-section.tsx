"use client";

import { TextAnimate } from "@/components/magicui/text-animate";

// import Image from "next/image";
// import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
// import { AuroraText } from "@/components/magicui/aurora-text";

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/intro_final.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Text overlay in bottom left */}
      <div className="absolute bottom-16 left-16 z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <TextAnimate animation="slideUp" by="word" once>
            Empowering businesses with innovative solutions and cutting-edge
            technology.
          </TextAnimate>
        </h2>
      </div>

      {/* <div className="flex flex-row items-start justify-between w-full h-full">
        <div className="flex flex-col gap-4 text-left">
          <span className="cursor-default text-4xl font-bold leading-normal tracking-wide text-[#BFC1C1]">
            <TextAnimate animation="slideLeft" by="character" once>
              Empowering
            </TextAnimate>
            <TextAnimate animation="slideLeft" by="character" once>
              Innovation
            </TextAnimate>
            <TextAnimate animation="slideLeft" by="character" once>
              Through
            </TextAnimate>
            <TextAnimate animation="slideLeft" by="character" once>
              Intelligent
            </TextAnimate>
            <TextAnimate animation="slideLeft" by="character" once>
              Solutions
            </TextAnimate>
          </span>
          <div className="cursor-default">
            <InteractiveHoverButton className="pointer">
              Wanna Know Us?
            </InteractiveHoverButton>
            ;
          </div>
        </div>
        <div>
          <p className="relative top-[-30] text-[300px] font-extralight leading-none tracking-[90px] text-[#BFC1C1]">
            WAVE
          </p>
        </div>
      </div> */}
      {/* <div className="flex flex-row items-start justify-between w-full h-full">
        <h1 className="text-[400px] font-semibold leading-none tracking-normal w-full text-[#BFC1C1]">
          <AuroraText>LOOP</AuroraText>
        </h1>
        <div className="relative top-[-60] flex flex-col text-center items-center gap-4 justify-center w-full h-full">
          <span className="text-xl font-bold text-center leading-tight text-[#BFC1C1]">
            Keep
            <br />
            Scrolling
            <br />
            Through
            <br />
            To
            <br />
            Discover
          </span>
          <Image src="./arrow.svg" alt="Description" width={9} height={500} />
        </div>
      </div> */}
    </div>
  );
}
