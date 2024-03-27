import { Course } from "@/interfaces";
import React from "react";

interface Props {
  course: Course;
}

export function CourseButtons({}: Props) {
  return (
    <div className="flex flex-row justify-center sm:justify-end">
      <button className="p-4 bg-gray-400 mx-2 hover:opacity-80 transition-all font-bold">
        Add to cart
      </button>
      <button className="p-4 bg-green-600 mx-2 hover:opacity-80 transition-all font-bold">
        Add to WishList
      </button>
    </div>
  );
}
