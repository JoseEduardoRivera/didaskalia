import React from "react";
import { IoMdStarOutline, IoMdTrendingUp } from "react-icons/io";
import CourseLevel from "../ui/course-level/CourseLevel";

interface Props {
  title: string;
  description: string;
  category: string;
  level: "easy" | "medium" | "hard";
  rating: number;
  purchases: number;
  uploadedAt: string | Date;
}
export function CourseInfo({
  category,
  description,
  title,
  uploadedAt,
  level,
  rating,
  purchases,
}: Props) {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-200 mb-2">{description}</p>
      <div className="flex items-center text-sm text-gray-200 mb-2">
        <span className="mr-2 font-bold">Category:</span>
        <span className="px-2 py-1 font-bold bg-didaskalia-yellow rounded-full">
          {category}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-200 mb-2">
        <span className="mr-2 font-bold">Level:</span>
        <CourseLevel level={level} />
      </div>
      <div className="text-sm text-gray-200">
        <span className="mr-2 font-bold">Updated At:</span>
        {new Date(uploadedAt).toLocaleDateString()}
      </div>
      <div className="flex items-center my-2">
        <IoMdStarOutline color="yellow" className="w-5 h-5 mr-1" />
        <span>{rating}</span>
        <div className="ml-1 flex items-center">
          <IoMdTrendingUp color="grey" className="w-5 h-5 mr-1" />
          <span>{purchases}</span>
        </div>
      </div>
    </div>
  );
}
