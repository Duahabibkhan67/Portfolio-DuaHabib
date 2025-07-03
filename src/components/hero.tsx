'use client';

import Link from "next/link";
import Typewriter from "./typewriter"; 
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import Image from "next/image";
import { SiFreelancer } from "react-icons/si";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[url('/dot-pattern.png')] bg-cover bg-center bg-no-repeat py-10 px-6 md:px-20 gap-8">

      {/* Left content */}
      <div className="bg-black bg-opacity-60 p-6 rounded-xl w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-5xl bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent font-bold mb-4">
          <Typewriter />
        </h1>

        <p className="text-white text-lg md:text-xl mb-6">
          I am a Web Developer, exploring the intersection of business and technology
          through cloud-applied generative AI engineering.
        </p>

        <div className="flex flex-wrap gap-4 justify-start">
          <Link href="https://www.linkedin.com/in/dua-habib-497557301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <p className="text-gray-300 text-3xl hover:bg-purple-800 hover:shadow-purple-700 hover:text-white hover:scale-110 transition-transform duration-300 border-2 border-purple-700 rounded-full p-3">
              <FaLinkedinIn />
            </p>
          </Link>
          <Link href="https://github.com/Duahabib67">
            <p className="text-gray-300 text-3xl hover:bg-purple-800 hover:text-white hover:scale-110 transition-transform duration-300 border-2 border-purple-700 rounded-full p-3">
              <FiGithub />
            </p>
          </Link>
          <Link href="https://www.fiverr.com/duadeveloper2?public_mode=true">
            <p className="text-gray-300 text-3xl hover:bg-purple-800 hover:text-white hover:scale-110 transition-transform duration-300 border-2 border-purple-700 rounded-full p-3">
              <SiFiverr />
            </p>
          </Link>
          <Link href="https://www.freelancer.com/u/Duahabib">
            <p className="text-gray-300 text-3xl hover:bg-purple-800 hover:text-white hover:scale-110 transition-transform duration-300 border-2 border-purple-700 rounded-full p-3">
              <SiFreelancer />
            </p>
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01daf2251c79136a5f">
            <p className="text-gray-300 text-3xl hover:bg-purple-800 hover:text-white hover:scale-110 transition-transform duration-300 border-2 border-purple-700 rounded-full p-3">
              <FaUpwork />
            </p>
          </Link>
        </div>
      </div>

      {/* Profile image */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 mt-11 rounded-full shadow-xl shadow-purple-400">
        <Image
          src="/portfolioimg.jpg"
          alt="profile"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-purple-700"
        />
      </div>

    </section>
  );
}
