"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

import bannerImage from "@/public/boat.png";
import cardImage1 from "@/public/Innovat.png";
import cardImage2 from "@/public/secure.png";
import cardImage3 from "@/public/intel.png";
import cardImage4 from "@/public/user-first.png";

export function AboutSection() {
  return (
    <div id="about-section" className="bg-black lg:pt-16 lg:pb-8 h-fit overflow-hidden">
      <div className="lg:pt-30 lg:pb-16 h-fit flex items-center bg-black">
        <div className="max-w-6xl mx-auto p-8 h-fit relative animate-fade-in bg-[#272727]">
          <div className="flex lg:flex-row flex-col items-center gap-16">
            <div className="text-center lg:relative absolute lg:-top-36 -top-0 w-[500px] animate-slide-in-left animation-delay-300">
              <Image
                src={bannerImage}
                alt="WAVELOOP Team"
                height={0}
                width={0}
                className="w-full h-full object-cover shadow-lg opacity-20 lg:opacity-100 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center mb-16 animate-slide-in-right animation-delay-500">
              <p className="text-xl text-gray-300 max-w-3xl text-start mb-4 animate-fade-in-up animation-delay-700">
                Who We Are
              </p>
              <h2 className="text-4xl font-bold text-white mb-6 text-start animate-fade-in-up animation-delay-900">
                Creators of intelligent <br />
                technology.
              </h2>
              <p className="text-md text-gray-300 max-w-3xl  animate-fade-in-up animation-delay-1100 text-justify">
                We are <strong>WAVELOOP</strong>,<br />A future driven tech
                company crafting secure, user first solutions. We merge
                creativity with innovation to build bold AI platforms and
                seamless digital experiences. At our core, we are thinkers,
                builders, and problem solvers shaping a smarter digital world.
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 lg:top-[-40] gap-8 px-8">
            <div className="border-1 border-gray-600 p-8 rounded-lg flex flex-col items-center text-center h-fit animate-fade-in-up animation-delay-1300 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
              <BorderBeam
                duration={5}
                size={300}
                className="from-transparent via-white to-transparent"
              />
              <Image
                src={cardImage1}
                width={0}
                height={0}
                alt="Innovative"
                className="w-auto h-20 object-cover mb-6 animate-bounce-subtle"
              />
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300">
                Innovative
              </h3>
              {/* <p className="text-gray-300 text-sm">
                We turn bold ideas into real-world digital solutions that spark
                progress.
              </p> */}
            </div>
            <div className="border-1 border-gray-600 p-8 rounded-lg flex flex-col items-center text-center h-fit animate-fade-in-up animation-delay-1500 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
              <BorderBeam
                duration={5}
                size={300}
                reverse
                className="from-transparent via-white to-transparent"
              />
              <Image
                src={cardImage2}
                alt="Secure"
                height={0}
                width={0}
                className="w-auto h-20 object-cover mb-6 animate-bounce-subtle animation-delay-200"
              />
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 ">
                Secure
              </h3>
              {/* <p className="text-gray-300 text-sm">
                Built-in protection through future-ready cybersecurity at every
                layer.
              </p> */}
            </div>
            <div className="border-1 border-gray-600 p-8 rounded-lg flex flex-col items-center text-center h-fit animate-fade-in-up animation-delay-1700 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
              <BorderBeam
                duration={5}
                size={300}
                className="from-transparent via-white to-transparent"
              />
              <Image
                src={cardImage3}
                alt="Intelligent"
                height={0}
                width={0}
                className="w-auto h-20 object-cover mb-6 animate-bounce-subtle animation-delay-400"
              />
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 ">
                Intelligent
              </h3>
              {/* <p className="text-gray-300 text-sm">
                Systems that adapt, automate and elevate user experiences.
              </p> */}
            </div>
            <div className="border border-gray-600 p-8 rounded-lg flex flex-col items-center text-center h-fit animate-fade-in-up animation-delay-1900 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
              <BorderBeam
                duration={5}
                size={300}
                reverse
                className="from-transparent via-white to-transparent"
              />
              <Image
                src={cardImage4}
                alt="User-First"
                height={0}
                width={0}
                className="w-auto h-20 object-cover mb-6 animate-bounce-subtle animation-delay-600"
              />
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 ">
                User First
              </h3>
              {/* <p className="text-gray-300 text-sm">
                Designed with people in mind. Intuitive, accessible, and
                impactful
              </p> */}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes bounceSubtle {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 1s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 1s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-bounce-subtle {
            animation: bounceSubtle 2s ease-in-out infinite;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-300 {
            animation-delay: 0.3s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          .animation-delay-700 {
            animation-delay: 0.7s;
          }
          .animation-delay-900 {
            animation-delay: 0.9s;
          }
          .animation-delay-1100 {
            animation-delay: 1.1s;
          }
          .animation-delay-1300 {
            animation-delay: 1.3s;
          }
          .animation-delay-1500 {
            animation-delay: 1.5s;
          }
          .animation-delay-1700 {
            animation-delay: 1.7s;
          }
          .animation-delay-1900 {
            animation-delay: 1.9s;
          }

          /* Initial state for animated elements */
          .animate-fade-in,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-fade-in-up {
            opacity: 0;
          }
        `}</style>
      </div>
    </div>
  );
}
