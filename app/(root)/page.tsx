import { NavigationMenuDemo } from "../components/navbar";
import { VideoText } from "@/components/magicui/video-text";

export default function Home() {
  return (
    <>
      <div
        className="px-30 relative flex h-screen w-full flex-row items-center justify-between overflow-hidden"
        style={{ backgroundColor: "#000511" }}
      >
        <div className="absolute z-10 flex justify-center w-full items-center top-8 left-0 right-0">
          <NavigationMenuDemo />
        </div>

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
          <div className="relative h-[1000px] w-[1000px] overflow-hidden ">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
              WAVE
            </VideoText>
          </div>
        </div>
      </div>
    </>
  );
}
