import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

import logoImage from "@/public/logo-primary-T-white.png";

export default function Footer() {
  return (
    <footer className="text-white bg-[#000511]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div>
              <Image
                src={logoImage}
                alt="WaveLoop Logo"
                width={0}
                height={80}
                className="h-20 w-auto mb-8 mx-auto lg:mx-0"
              />
              <p className="text-gray-400 text-sm sm:text-base text-center lg:text-left max-w-md mb-4 mx-auto lg:mx-0">
                Empowering businesses with innovative solutions and cutting edge
                technology.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4">
                Wanna Stay Connected?
              </h3>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link
                  href="https://www.instagram.com/waveloop.dev/"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/waveloop-dev/"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://github.com/WAVELOOP-Development"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/people/Wave-Loop/61575550298347/"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about-section"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Innovative Software Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Cybersecurity & Data Protection
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    Cloud-Based Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    AI and Machine Learning Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} WaveLoop. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors text-center sm:text-right"
          >
            Terms & Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
