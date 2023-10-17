"use client";

import SectionHeading from "@/components/section-heading";
import { Project } from "@/sanity/type/project";
import { getProject } from "@/sanity/utils/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [projectData, setProjectData] = useState<Project | null>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getProject(slug);
      console.log(data);
      setProjectData(data);
    }

    fetchData();
  }, [slug]);

  return (
    <main className=" flex flex-col items-center px-4 py-4 pb-6">
      <SectionHeading>
        {projectData ? projectData.title : "Loading..."}
      </SectionHeading>

      {projectData && (
        <>
          <div className=" rounded-lg shadow-2xl aspect-video w-[18rem] sm:w-[28.25rem] md:w-[35.25rem] lg:w-[48rem] relative">
            <Image
              src={projectData.images[index].url}
              alt={projectData.title}
              quality={95}
              fill
              objectFit="cover"
              className=" rounded-lg"
            />
          </div>

          <div className="flex items-center justify-center sm:justify-normal gap-y-3 sm:gap-3 mt-5 relative flex-wrap">
            {projectData.images.map((img, i) => (
              <Image
                key={i}
                src={img.url}
                alt="smallImg"
                className={
                  i === index
                    ? " bg-gray-900/50 rounded-lg w-[10.5rem] aspect-[5/3] dark:bg-white/30 cursor-pointer"
                    : " rounded-lg w-[10.5rem] aspect-[5/3] cursor-pointer"
                }
                quality={60}
                width={150}
                height={150}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>

          <div className="flex flex-row items-center justify-center  w-full gap-5 py-8 text-lg font-bold underline sm:text-2xl">
            <Link
              href={projectData.githubLink}
              className=" dark:hover:text-white/70 hover:text-gray-700/70"
              target="_blank"
            >
              Github Link
            </Link>
            <Link
              href={projectData.demoLink}
              className=" dark:hover:text-white/70 hover:text-gray-700/70"
              target="_blank"
            >
              Demo Link
            </Link>
          </div>

          <div className="mt-2 p-10 bg-gray-300 dark:bg-gray-600 rounded-lg w-3/4">
            <p className="leading-relaxed text-gray-700 dark:text-white/70">
              {projectData.description}
            </p>
          </div>

          <div className="py-5 sm:py-10">
            <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {projectData.tags.map((tag, index) => (
                <li
                  className=" bg-black/[0.7] px-3 py-1 text-sm sm:text-lg uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
