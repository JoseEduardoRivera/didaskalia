import { Section } from "@/interfaces";
import React from "react";

interface Props {
  sections: Section[];
}

export function CourseContent({ sections }: Props) {
  return (
    <div className="p-4">
      <span className="my-7 font-bold text-2xl">COURSE CONTENT</span>
      {sections.map((section, index) => (
        <div
          key={index}
          className="p-2 border-yellow-400 border-2 flex flex-col"
        >
          <span className="sm:ml-10 font-bold">{section.name} </span>
          <span className="sm:ml-10 text-sm text-gray-400">
            Classes in this section: {section.classes.length}
          </span>
        </div>
      ))}
    </div>
  );
}
