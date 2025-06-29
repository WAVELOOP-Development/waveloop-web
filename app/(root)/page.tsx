import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
    <div className="container m-auto pt-30 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-row items-start justify-between w-full h-full">
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
          <p className="relative top-[-30] text-[300px] font-normal leading-none tracking-[90px] text-[#BFC1C1]">
            WAVE
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-between w-full h-full">
        <h1 className="text-[400px] font-normal leading-none tracking-normal w-full text-[#BFC1C1]">
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
      </div>
    </div>
  );
}
