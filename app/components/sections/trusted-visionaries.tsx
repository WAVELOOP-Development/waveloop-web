import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const visionaries = [
  {
    name: "Tech Corp",
    username: "@techcorp",
    body: "WaveLoop delivered an exceptional web platform that transformed our digital presence. Outstanding quality and innovation.",
    img: "https://avatar.vercel.sh/techcorp",
  },
  {
    name: "Digital Innovations",
    username: "@diginnovations",
    body: "Their AI-powered solutions revolutionized our business processes. Truly cutting-edge technology implementation.",
    img: "https://avatar.vercel.sh/digital",
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
  {
    name: "AI Ventures",
    username: "@aiventures",
    body: "WaveLoop's cybersecurity expertise protected our critical data assets. Highly recommended for enterprise security.",
    img: "https://avatar.vercel.sh/ai",
  },
  {
    name: "Cyber Shield",
    username: "@cybershield",
    body: "Their UI/UX design transformed our user engagement metrics. Beautiful and intuitive interfaces.",
    img: "https://avatar.vercel.sh/cyber",
  },
];

const firstRow = visionaries.slice(0, visionaries.length / 2);
const secondRow = visionaries.slice(visionaries.length / 2);

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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TrustedVisionariesSection() {
  return (
    <section className="lg:py-16 p-8 bg-white h-fit">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Trusted by Visionaries
          </h2>
          <p className="mt-2 text-sm lg:text-lg w-full text-gray-600 dark:text-gray-300">
            We partner with industry-leading visionaries and innovators who
            trust us to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((visionary) => (
              <VisionaryCard key={visionary.username} {...visionary} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((visionary) => (
              <VisionaryCard key={visionary.username} {...visionary} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
