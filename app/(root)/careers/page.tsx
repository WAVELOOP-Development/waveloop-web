"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 lg:pt-32 bg-white">
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
              className="lg:text-lg text-md text-gray-600 max-w-2xl mx-auto text-center"
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
            {/* <div className="flex justify-center">
              <Image
                src="/icon-default-T.png"
                alt="Careers Banner"
                width={150}
                height={75}
                className="object-cover mx-auto"
              />
            </div> */}
            <motion.article
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className=""
            >
              <AuroraText
                colors={["#155dfc", "#8950FA"]}
                className="font-bold py-16 tracking-tight lg:text-6xl text-4xl mb-8"
              >
                &quot;COMING SOON...&quot;
              </AuroraText>
            </motion.article>

              <TextAnimate
              animation="slideLeft"
              by="word"
              className="lg:text-lg text-md text-gray-600 mb-8"
              once
            >
              We are currently preparing exciting career opportunities for
              passionate individuals who want to make a difference. Our careers
              portal will be launching soon with various positions across
              engineering, design, marketing, and more.
            </TextAnimate>
          

            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Want to be the first to know?
              </h3>
              <p className="text-gray-600 lg:text-lg text-md mb-6">
                Subscribe to get notified when we launch our careers page and
                new positions become available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <button className="rounded-lg bg-blue-600 px-6 w-full cursor-pointer py-3 text-white font-medium hover:bg-blue-700 transition-colors">
                  <Link href="/contact-us">Contact Us</Link>
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
            <h2 className="lg:text-6xl py-4 font-bold tracking-tight text-gray-900 text-4xl">
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
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#155dfc"
                >
                  <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
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
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#155dfc"
                >
                  <path d="M0-240v-56.33q0-40.05 42.33-65.19 42.34-25.15 111.25-25.15 12.45 0 23.93.5 11.49.5 22.49 2.27-10 18.57-15 38.11-5 19.55-5 40.79v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-21.91-4.5-41.29t-14.17-37.56q11-1.82 22.28-2.32 11.29-.5 23.06-.5 69 0 111.16 24.68Q960-337.31 960-296.33V-240H780Zm-471.67-66.67H652v-4q-3.33-31.33-52.17-52Q551-383.33 480-383.33t-119.83 20.66Q311.33-342 308.33-310v3.33ZM153.04-420q-30.04 0-51.54-21.54T80-493.33q0-30.67 21.54-52 21.54-21.34 51.79-21.34 30.67 0 52 21.34 21.34 21.33 21.34 52.29 0 30.04-21.34 51.54Q184-420 153.04-420Zm653.34 0q-30.05 0-51.55-21.54-21.5-21.54-21.5-51.79 0-30.67 21.55-52 21.54-21.34 51.79-21.34 30.66 0 52 21.34Q880-524 880-493.04q0 30.04-21.33 51.54-21.34 21.5-52.29 21.5ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.23-66.67q22.77 0 37.94-15.4 15.16-15.4 15.16-38.16 0-22.77-15.26-37.94-15.27-15.16-37.84-15.16-22.56 0-38.06 15.26-15.5 15.27-15.5 37.84 0 22.56 15.4 38.06 15.4 15.5 38.16 15.5Zm.1 240ZM480-600Z" />
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
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#155dfc"
                >
                  <path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z" />
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
