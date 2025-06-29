export function AboutSection() {
  return (
    <div
      className="px-20 py-30 min-h-screen flex items-center"
      style={{ backgroundColor: "#000511" }}
    >
      <div
        className="max-w-6xl mx-auto p-8 relative"
        style={{ backgroundColor: "#272727" }}
      >
        <div className="flex flex-row items-center mb-16 gap-16">
          <div className="text-center mb-4 absolute -top-16 left-8 w-96">
            <img
              src="/boat2.png"
              alt="WAVELOOP Team"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="text-center mb-16 ml-[450px]">
            <p className="text-xl text-gray-300 max-w-3xl text-start mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 text-start">
              Creators of intelligent <br />
              technology.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl text-start">
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
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full">
            <img
              src="/innovat.png"
              alt="Innovative"
              className="w-auto h-20 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Innovative
            </h3>
            <p className="text-gray-300 text-sm">
              We turn bold ideas into real-world digital solutions that spark
              progress.
            </p>
          </div>
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full">
            <img
              src="/secure.png"
              alt="Secure"
              className="w-auto h-20 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Secure</h3>
            <p className="text-gray-300 text-sm">
              Built-in protection through future-ready cybersecurity at every
              layer.
            </p>
          </div>
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full">
            <img
              src="/intel.png"
              alt="Intelligent"
              className="w-auto h-20 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Intelligent
            </h3>
            <p className="text-gray-300 text-sm">
              Systems that adapt, automate and elevate user experiences.
            </p>
          </div>
          <div className="border-1 border-white p-8 rounded-lg flex flex-col items-center text-center h-full">
            <img
              src="/user-first.png"
              alt="User-First"
              className="w-auto h-20 object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              User-First
            </h3>
            <p className="text-gray-300 text-sm">
              Designed with people in mind. Intuitive, accessible, and impactful
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
