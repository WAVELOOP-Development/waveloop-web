import { Meteors } from "@/components/magicui/meteors";
import { NavigationMenuDemo } from "../components/navbar";

export default function Home() {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <div className="absolute z-10 flex justify-center w-full items-center top-8 left-0 right-0">
          <NavigationMenuDemo />
        </div>
        <Meteors number={30} />
        <span className="pointer-events-none tracking-[5px] whitespace-pre-wrap bg-gradient-to-b from-blue-500 to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          WAVELOOP
        </span>
        <span className="text-lg tracking-[26px] mt-4 text-blue-950">
          Waves of Inovation
        </span>
      </div>
    </>
  );
}
