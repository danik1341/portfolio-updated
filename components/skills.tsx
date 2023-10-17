"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { getSkills } from "@/sanity/utils/sanity-utils";
import { Skill } from "@/sanity/type/skill";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [skillsData, setSkillsData] = useState<Skill[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchData();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className=" mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className=" flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData &&
          skillsData.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill.title}
            </motion.li>
          ))}
      </ul>
    </section>
  );
}
