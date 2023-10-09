"use client";

import Image from "next/image";
import React from "react";
import profilePic from "@/public/profilePic.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className=" relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className=" text-4xl absolute bottom-0 -right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">{`Hello, I'm Daniel.`}</span>
        {` I'm an aspiring `}
        <span className=" font-bold underline">Full Stack Developer</span> with
        a strong foundation in front-end and back-end technologies. Specializing
        in <span className=" font-bold italic">TypeScript</span> and{" "}
        <span className=" font-bold italic">Python</span>.
        {/* Dedicated to honing
        my skills through hands-on projects. I bring a passion for crafting{" "}
        <span className=" font-bold underline">
          seamless user-focused web experiences
        </span>
        . */}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className=" flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className=" bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
        >
          Contact me here{" "}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className=" bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer border border-black/10"
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 group-hover:rotate-[360deg] transition" />
        </a>

        <a
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/daniel-yakovizki-336905233/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10"
          target="_blank"
          href="https://github.com/danik1341"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
