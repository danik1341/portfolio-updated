import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import redditCloneImg from "@/public/redditClone.png";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Military Service - Ground equipment mechanic",
    location: "Israeli Air Force",
    description:
      "Acquired great analytic skills, the ability to work under stressful conditions and great teamwork. Troubleshooting and analyzing different issues, finding unique solutions depending on the tasks at hand.",
    icon: React.createElement(BsFillAirplaneEnginesFill),
    date: "08/2016 - 04/2019",
  },
  {
    title: "Java",
    location: "The Open University",
    description: "Java A course",
    icon: React.createElement(LuGraduationCap),
    date: "09/2020 - 03/2021",
  },
  {
    title: "C# Master Class",
    location: "Udemy",
    description: "Full Mass Class Course of C#",
    icon: React.createElement(CgWorkAlt),
    date: "04/2022 - 06/2022",
  },
  {
    title: "Full Stack Engineer",
    location: "Codecademy.com",
    description: "Frontend and Backend full course",
    icon: React.createElement(FaReact),
    date: "12/2022 - 03/2023",
  },
  {
    title: "Full Stack Web Development, Python and JavaScript program",
    location: "Developers Institute, TLV Coding Bootcamp",
    description: "DI's Python and Web development",
    icon: React.createElement(FaReact),
    date: "12/2022 - 03/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Reddit Clone",
    description:
      "As part of my Fullstack Codecademy course, I made a fully working and deployed Reddit clone app, using at that time the most up to date frameworks and methods for a seamless Reddit application.",
    tags: ["React", "Next.js", "ChakraUI", "Recoil", "Firebase V9"],
    imageUrl: redditCloneImg,
  },
  {
    title: "Reddit Clone TEST 2",
    description:
      "As part of my Fullstack Codecademy course, I made a fully working and deployed Reddit clone app, using at that time the most up to date frameworks and methods for a seamless Reddit application.",
    tags: ["React", "Next.js", "ChakraUI", "Recoil", "Firebase V9"],
    imageUrl: redditCloneImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
