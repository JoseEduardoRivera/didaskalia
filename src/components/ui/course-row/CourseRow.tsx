// courserow.tsx
import { Course } from "@/interfaces";
import React from "react";
import { Title } from "../title/Title";
import { CourseRowItem } from "./CourseRowItem";

interface Props {
  title: string;
  courses: Course[];
}

export function CourseRow({ courses, title }: Props) {
  return (
    <div className="mb-10">
      <Title title={title} />
      <div className="overflow-x-auto">
        <div className="inline-flex gap-4 sm:gap-10">
          {courses.map((course) => (
            <CourseRowItem key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
