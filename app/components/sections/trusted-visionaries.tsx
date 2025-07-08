import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const visionaries = [
  {
    name: "Hirushi Dilpriya",
    username: "@hirushi-dilpriya",
    body: "WaveLoop delivered an exceptional web platform that transformed our digital presence. Outstanding quality and innovation.",
    img: "/dilpriya.jpeg",
  },
  {
    name: "Diluka Wijesinghe",
    username: "@diluka-w",
    body: "Their AI-powered solutions revolutionized our business processes. Truly cutting-edge technology implementation.",
    img: "/diluka.jpeg",
  },
  {
    name: "Future Systems",
    username: "@futuresys",
    body: "The mobile app they built exceeded all expectations. Perfect blend of functionality and user experience.",
    img: "https://avatar.vercel.sh/future",
  },
  {
    name: "Cloud Dynamics",
    username: "@clouddynamics",
    body: "Their cloud infrastructure solutions provided us with unmatched scalability and security.",
    img: "https://avatar.vercel.sh/cloud",
  },
];

const firstRow = visionaries.slice(0, visionaries.length);

const VisionaryCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 flex flex-col",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className="text-base leading-relaxed flex-grow">
        {body}
      </blockquote>
      <div className="flex flex-row items-center gap-3 mt-6">
        <Image
          className="rounded-full"
          width={48}
          height={48}
          alt=""
          src={img}
        />
        <div className="flex flex-col gap-1">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
    </figure>
  );
};

interface TrustedVisionariesSectionProps {
  id?: string;
}

export function TrustedVisionariesSection({
  id,
}: TrustedVisionariesSectionProps) {
  return (
    <section id={id} className="lg:py-16 p-8 bg-white h-fit">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Endorsed by the Bold
          </h2>
          <p className="mt-2 text-sm lg:text-lg w-full text-gray-600 dark:text-gray-300">
            Visionaries and industry leaders trust us to bring their digital
            ideas to life.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((visionary) => (
              <VisionaryCard key={visionary.username} {...visionary} />
            ))}
          </Marquee>
          {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((visionary) => (
              <VisionaryCard key={visionary.username} {...visionary} />
            ))}
          </Marquee> */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
