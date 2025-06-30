"use client";

export function AboutSection() {
  return (
    <div
      className="px-20 py-30 min-h-screen flex items-center"
      style={{ backgroundColor: "#000511" }}
    >
      <div
        className="max-w-6xl mx-auto p-8 relative animate-fade-in"
        style={{ backgroundColor: "#272727" }}
      >
        <div className="flex flex-row items-center mb-16 gap-16">
          <div className="text-center mb-4 absolute -top-16 left-8 w-96 animate-slide-in-left animation-delay-300">
            <img
              src="/boat2.png"
              alt="WAVELOOP Team"
              className="w-full h-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center mb-16 ml-[450px] animate-slide-in-right animation-delay-500">
            <p className="text-xl text-gray-300 max-w-3xl text-start mb-4 animate-fade-in-up animation-delay-700">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 text-start animate-fade-in-up animation-delay-900">
              Creators of intelligent <br />
              technology.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl text-start animate-fade-in-up animation-delay-1100">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1300 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
            <img
              src="/innovat.png"
              alt="Innovative"
              className="w-auto h-20 object-cover mb-6 animate-bounce-subtle"
            />
            <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300">
              Innovative
            </h3>
            <p className="text-gray-300 text-sm">
              We turn bold ideas into real-world digital solutions that spark
              progress.
            </p>
          </div>
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1500 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
            <img
              src="/secure.png"
              alt="Secure"
              className="w-auto h-20 object-cover mb-6 animate-bounce-subtle animation-delay-200"
            />
            <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 ">
              Secure
            </h3>
            <p className="text-gray-300 text-sm">
              Built-in protection through future-ready cybersecurity at every
              layer.
            </p>
          </div>
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1700 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
            <img
              src="/intel.png"
              alt="Intelligent"
              className="w-auto h-20 object-cover mb-6 animate-bounce-subtle animation-delay-400"
            />
            <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 ">
              Intelligent
            </h3>
            <p className="text-gray-300 text-sm">
              Systems that adapt, automate and elevate user experiences.
            </p>
          </div>
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full animate-fade-in-up animation-delay-1900 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
            <img
              src="/user-first.png"
              alt="User-First"
              className="w-auto h-20 object-cover mb-6 animate-bounce-subtle animation-delay-600"
            />
            <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 ">
              User-First
            </h3>
            <p className="text-gray-300 text-sm">
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
      `}</style>
    </div>
  );
}
