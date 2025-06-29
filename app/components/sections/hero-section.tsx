import { NavigationMenuDemo } from "../navbar";
import { VideoText } from "@/components/magicui/video-text";

export function HeroSection() {
  return (
    <div
      className="px-20 relative flex min-h-screen w-full flex-col overflow-hidden"
      style={{ backgroundColor: "#000511" }}
    >
      <div className="absolute z-10 flex justify-center w-full items-center top-10 left-0 right-0">
        <NavigationMenuDemo />
      </div>
      <div className="flex flex-row items-center justify-between w-full h-1/2 px-30 pt-45">
        <div className="flex flex-col text-left w-1/3">
          <span
            className="text-5xl font-bold leading-tight"
            style={{ color: "#BFC1C1" }}
          >
            Empowering
            <br />
            Innovation
            <br />
            Through
            <br />
            Intelligent
            <br />
            Solutions
          </span>

          <button
            className="mt-8 px-6 py-3 bg-transparent border-2 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300 w-fit"
            style={{ borderColor: "#BFC1C1", color: "#BFC1C1" }}
          >
            Wanna Know Us?
          </button>
        </div>

        <div className="flex items-center justify-center w-2/3">
          <div className="relative h-[400px] w-[1000px] overflow-hidden">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
              WAVE
            </VideoText>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-1/2 px-30">
        <div className="flex items-center justify-center w-2/3">
          <div className="relative h-[400px] w-[1000px] overflow-hidden">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
              LOOP
            </VideoText>
          </div>
        </div>
        <div className="flex flex-col text-center w-1/3 items-end">
          <span
            className="text-3xl font-bold leading-tight"
            style={{ color: "#BFC1C1" }}
          >
            Keep
            <br />
            Scrolling
            <br />
            To
            <br />
            Discover
          </span>
          <img
            src="/arrow_down.png"
            alt="Arrow pointing down"
            className="mt-6 h-75 w-4 mb-12 items-end mr-15"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-1/2 mb-12 px-30">
        <p className="text-gray-300">Software Solutions</p>
        <p className="text-gray-300">Mobile Application Development</p>
        <p className="text-gray-300">Cybersecurity & Data Protection</p>
      </div>
    </div>
  );
}
