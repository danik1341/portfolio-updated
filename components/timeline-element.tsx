import { useTheme } from "@/context/theme-context";
import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineElementProps {
  item: {
    date: string;
    icon: React.CElement<{}, React.Component<{}, any, any>>;
    title: string;
    location: string;
    description: string;
  };
}

export default function TimelineElement({ item }: TimelineElementProps) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { theme } = useTheme();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
          fontSize: "1.5rem",
        }}
        date={item.date}
        icon={item.icon}
        visible={inView}
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-zinc-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
