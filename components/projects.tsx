"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Project as ProjectType } from "@/sanity/type/project";
import { getProjects } from "@/sanity/utils/sanity-utils";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [projectsData, setProjectsData] = useState<ProjectType[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects();
      setProjectsData(data);
    }

    fetchData();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className=" space-y-2 flex flex-col">
        {projectsData &&
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
