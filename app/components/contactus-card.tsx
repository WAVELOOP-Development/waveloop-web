import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function ContactUsCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-[24rem] lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 lg:rounded-xl shadow-lg overflow-hidden lg:pt-0 pt-8">
      <div className="flex-1 p-8 sm:p-12 lg:p-16 text-center lg:text-left pb-16">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
          Let&apos;s Take Your Digital{" "}
          <span className="text-blue-600 ">Strategy,</span> to the{" "}
          <span className="text-blue-600 ">Next Level</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-md mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Partner with us to unlock your business potential through innovative
          digital solutions.
          <span className="text-blue-600 font-medium"> Get in touch</span> and
          let&apos;s discuss how we can elevate your digital presence.
        </p>
        <Link href="/contact-us" className="inline-block">
          <InteractiveHoverButton className="px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-lg">
            Start Your Project
          </InteractiveHoverButton>
        </Link>
      </div>
      <div className="w-full lg:w-2/5 h-64 lg:h-full relative">
        <Image
          src="/pexels-camcasey-1157255.jpg"
          alt="Professional team collaboration and digital strategy consultation"
          fill
          className="object-cover rounded-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/5" />
      </div>
    </div>
  );
}

export default ContactUsCard;
