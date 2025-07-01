"use client";

export function AboutSection() {
  return (
    <div
      className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-16 md:py-20 lg:py-30 min-h-screen flex items-center"
      style={{ backgroundColor: "#000511" }}
    >
      <div
        className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 relative animate-fade-in"
        style={{ backgroundColor: "#272727" }}
      >
        {/* Main content section - responsive layout */}
        <div className="flex flex-col lg:flex-row items-center mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-8 md:gap-16">
          {/* Image section */}
          <div className="text-center mb-4 lg:absolute lg:-top-16 lg:left-8 w-full sm:w-80 md:w-96 animate-slide-in-left animation-delay-300">
            <img
              src="/boat2.png"
              alt="WAVELOOP Team"
              className="w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Text content */}
          <div className="text-center lg:text-left mb-8 sm:mb-12 md:mb-16 lg:ml-[450px] animate-slide-in-right animation-delay-500">
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-4 animate-fade-in-up animation-delay-700">
              Who We Are
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up animation-delay-900">
              Creators of intelligent <br className="hidden sm:block" />
              technology.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl animate-fade-in-up animation-delay-1100">
              We are WAVELOOP,
              <br /> A future-focused tech company building smart, secure,
              user-first solutions. Our mission is to bridge creativity and
              functionality through innovation. From AI-powered platforms to
              seamless mobile experiences, we bring bold ideas to life with
              purpose and precision. At our core, we are thinkers, builders and
              problem-solvers, passionate about shaping a smarter digital world.
            </p>
          </div>
        </div>

        {/* Cards grid - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="border-1 border-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1300 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="/innovat.png"
              alt="Innovative"
              className="w-auto h-16 sm:h-20 object-cover mb-4 sm:mb-6 animate-bounce-subtle"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 transition-colors duration-300">
              Innovative
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              We turn bold ideas into real-world digital solutions that spark
              progress.
            </p>
          </div>
          <div className="border-1 border-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1500 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="/secure.png"
              alt="Secure"
              className="w-auto h-16 sm:h-20 object-cover mb-4 sm:mb-6 animate-bounce-subtle animation-delay-200"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 transition-colors duration-300">
              Secure
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Built-in protection through future-ready cybersecurity at every
              layer.
            </p>
          </div>
          <div className="border-1 border-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1700 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="/intel.png"
              alt="Intelligent"
              className="w-auto h-16 sm:h-20 object-cover mb-4 sm:mb-6 animate-bounce-subtle animation-delay-400"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 transition-colors duration-300">
              Intelligent
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Systems that adapt, automate and elevate user experiences.
            </p>
          </div>
          <div className="border-1 border-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1900 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="/user-first.png"
              alt="User-First"
              className="w-auto h-16 sm:h-20 object-cover mb-4 sm:mb-6 animate-bounce-subtle animation-delay-600"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 transition-colors duration-300">
              User-First
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Designed with people in mind. Intuitive, accessible, and impactful
            </p>
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

        /* Mobile-specific styles */
        @media (max-width: 640px) {
          .animate-slide-in-left,
          .animate-slide-in-right {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}
