"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from "./timeline-element";
import { Experience } from "@/sanity/type/experience";
import { getExperience } from "@/sanity/utils/sanity-utils";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

interface formattedData {
  icon: React.CElement<{}, React.Component<{}, any, any>>;
  _id: string;
  title: string;
  location: string;
  description: string;
  date: string;
}

type IconMap = {
  [key: string]: React.CElement<{}, React.Component<{}, any, any>>;
};

const iconMap: IconMap = {
  BsFillAirplaneEnginesFill: <BsFillAirplaneEnginesFill />,
  LuGraduationCap: <LuGraduationCap />,
  CgWorkAlt: <CgWorkAlt />,
  FaReact: <FaReact />,
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [experiencesData, setExperiencesData] = useState<
    formattedData[] | null
  >([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getExperience();
      const formattedData = data.map((item) => {
        const IconComponent = iconMap[item.icon];
        return {
          ...item,
          icon: IconComponent,
        };
      });
      setExperiencesData(formattedData);
    }

    fetchData();
  }, []);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData &&
          experiencesData.map((item, index) => {
            return <TimelineElement key={index} item={item} />;
          })}
      </VerticalTimeline>
    </section>
  );
}
