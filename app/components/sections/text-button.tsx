import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TextButton = () => {
  return (
    <Link href="/contact-us">
      <section className="w-full py-20 md:py-24 lg:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <button className="group flex items-center justify-center gap-6 text-left transition-all duration-300 hover:underline focus:outline-none focus:underline mx-auto">
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
              <span className="block text-black">Have a Project?</span>
              <span className="block text-black">Then Click Me &</span>
              <span className="block text-black">
                Tell Us About Your Project.
              </span>
            </div>
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
          </button>
        </div>
      </section>
    </Link>
  );
};

export default TextButton;
