import { Metadata } from "next";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";

export const metadata: Metadata = {
  title: "Careers | Waveloop",
  description:
    "Join our team at Waveloop. Exciting career opportunities coming soon.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <TextAnimate
              animation="slideLeft"
              by="word"
              className="lg:text-6xl text-4xl font-bold py-4 text-center"
              once
            >
              Join Our Team
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="word"
              className="lg:text-xl text-sm text-gray-600 max-w-2xl mx-auto text-center"
              once
            >
              Be part of something extraordinary. We are building the future of
              technology, and we want talented individuals to join us on this
              journey.
            </TextAnimate>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className=" bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-2 flex justify-center">
              <Image
                src="/icon-default-T.png"
                alt="Careers Banner"
                width={150}
                height={75}
                className="object-cover mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Coming Soon...
            </h2>

            <p className="text-lg leading-8 text-gray-600 mb-8">
              We are currently preparing exciting career opportunities for
              passionate individuals who want to make a difference. Our careers
              portal will be launching soon with various positions across
              engineering, design, marketing, and more.
            </p>

            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Want to be the first to know?
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to get notified when we launch our careers page and
                new positions become available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Preview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Join Waveloop?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover what makes our workplace special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m0 0a12.078 12.078 0 01-1.5.189m4.5 0a12.078 12.078 0 001.5-.189m-1.5.189V18m0 0h3m-3 0h-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation First
              </h3>
              <p className="text-gray-600">
                Work on cutting-edge projects that push the boundaries of
                technology and create real impact.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Join a diverse team of talented professionals who support each
                others growth and success.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Growth & Learning
              </h3>
              <p className="text-gray-600">
                Continuous learning opportunities, mentorship programs, and
                clear career progression paths.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
