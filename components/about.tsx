"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-14 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className=" mb-3">
        Originally, I was a mechanic, but I always wanted to be a{" "}
        <span className="font-medium">Programmer</span>. For a while, I studied
        computer science, but shortly after I started, I fell in{" "}
        <span className="underline">love</span> with{" "}
        <span className="font-medium">web development</span>. Out of necessity
        and passion, I studied on my own, diving deeper into what I now know to
        be <span className="font-medium">Full Stack Web Development</span>.
        Along my journey, I found aid in amazing courses on platforms like{" "}
        <span className="underline italic">Udemy</span>,{" "}
        <span className="underline italic">Codecademy</span>, and the talented
        folks at <span className="underline italic">Developers Institute</span>.
        My favorite part of programming happened to be the same as in mechanics,{" "}
        <span className="font-medium underline">
          finding, analyzing, and solving complex problems
        </span>
        . I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Python, Node.js, and Sanity
        </span>
        . I am also proficient with{" "}
        <span className="underline italic">TypeScript</span> and{" "}
        <span className="underline italic">Prisma</span>. I am always looking
        out for new technologies to learn and am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="underline">full stack developer</span>.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        video games, reading literature, and writing.{" "}
        {`I'm currently working on my own `}
        <span className="font-medium">book</span>.
      </p>
    </motion.section>
  );
}
