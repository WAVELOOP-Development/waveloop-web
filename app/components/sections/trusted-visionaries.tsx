import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Link from "next/link";

const visionaries = [
  {
    name: "Hirushi Dilpriya",
    username: "Lecturer, University of Plymouth",
    url: "https://www.linkedin.com/in/hirushi-dilpriya-a5498a215/",
    body: "Thank you so much for adding some value for our event, NSBM Math Master 2025. Anyone who is interested in working on projects, highly recommend the waveloop WAVELOOP",
    img: "/dilpriya.jpeg",
  },
  {
    name: "Diluka Wijesinghe",
    username: "Lecturer, University of Plymouth",
    url: "https://www.linkedin.com/in/diluka-w-682502223/",
    body: "Collaborating with Waveloop has always been a positive experience. Their team is professional, dedicated, and approaches every project with a proactive mindset. They communicate effectively, respond quickly, and consistently go the extra mile to ensure high-quality outcomes. Waveloop is a dependable partner you can trust to deliver results.",
    img: "/diluka.jpeg",
  },
  {
    name: "Athula weerasinghe",
    username: "VP-digital infrastructure at Nations Trust Bank PLC",
    url: "https://www.linkedin.com/in/athula-weerasinghe-bsc-eng-msc-infosec-mba-3205807/",
    body: "Waveloop really simplified our work! Their platform is easy to use, and we've seen a big improvement in how our team operates. Plus, their support is excellent. It's been a worthwhile investment for our business.",
    img: "/athula.jpeg",
  },
  {
    name: "Induwara Wickramasinghe",
    username: "CEO, ION Group (Pvt) Ltd",
    url: "https://www.linkedin.com/in/induwarawickramasinghe/",
    body: "Working with Waveloop was a real pleasure. As a fellow IT provider, I appreciate their technical expertise and commitment to delivering solid solutions. They're not just a vendor; they're a reliable partner. I've seen firsthand their dedication to quality and their ability to adapt, which is essential in today's fast-paced environment. Highly recommend!",
    img: "/induwara.jpg",
  },
];

const firstRow = visionaries.slice(0, visionaries.length);

const VisionaryCard = ({
  img,
  name,
  username,
  url,
  body,
}: {
  img: string;
  name: string;
  username: string;
  url: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 overflow-hidden rounded-xl border p-6 flex flex-col",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className="text-base cursor-default leading-relaxed flex-grow">
        {body}
      </blockquote>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row cursor-pointer  items-center gap-3 mt-6">
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
      </Link>
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
    <section id={id} className="lg:py-16 py-8 bg-white h-fit">
      <div className="max-w-6xl mx-auto">
        <div className="text-start px-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Endorsed by the Bold
          </h2>
          <p className="mt-2 text-sm lg:text-lg w-full text-gray-600 dark:text-gray-300">
            Visionaries and industry leaders trust us to bring their digital
            ideas to life.
          </p>
        </div>

        <div className="relative flex w-full lg:px-8 flex-col items-center justify-center overflow-hidden">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 lg:w-1/8 w-1/16 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 lg:w-1/8 w-1/16 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
