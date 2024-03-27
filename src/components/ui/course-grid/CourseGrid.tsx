import { Course } from "@/interfaces";
import React from "react";
import { CourseGridItem } from "./CourseGridItem";

interface Props {
  courses: Course[];
}

export const CourseGrid = ({ courses }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-10 mb-10">
      {courses.map((course) => (
        <CourseGridItem key={course.slug} course={course} />
      ))}
    </div>
  );
};
