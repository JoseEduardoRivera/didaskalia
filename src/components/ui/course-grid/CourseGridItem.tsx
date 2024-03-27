import { Course } from "@/interfaces";
import { fortmatPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdStarOutline, IoMdTrendingUp } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CourseLevel from "../course-level/CourseLevel";

interface Props {
  course: Course;
}

export const CourseGridItem = ({ course }: Props) => {
  const formattedPrice = fortmatPrice(course.price);

  return (
    <div className="rounded-md overflow-hidden fade-in relative">
      <div className="relative">
        <Link href={`/course/${course.slug}`}>
          <Image
            width={500}
            height={500}
            src={`/courses/${course.image}`}
            alt={`${course.slug}-image`}
            className="w-full object-cover hover:opacity-50 transition-all"
          />
        </Link>
        <div className="absolute top-0 right-0 m-2">
          <MdOutlineAddShoppingCart
            color="white"
            className="w-8 h-8 hover:bg-green-600 hover:rounded-lg transition-all"
          />
        </div>
        <div className="absolute top-0 left-0 m-2">
          <CourseLevel level={course.level} />
        </div>
      </div>
      <div className="p-1 flex flex-col">
        <Link href={`/profile/${course.author}`}>
          <span className="text-slate-400 text-sm hover:opacity-55 transition-all">
            {course.author}
          </span>
        </Link>
        <span className="font-bold">{course.name}</span>
        <div className="flex items-center">
          <IoMdStarOutline color="yellow" className="w-5 h-5 mr-1" />
          <span>{course.rating}</span>
          <div className="ml-1 flex items-center">
            <IoMdTrendingUp color="grey" className="w-5 h-5 mr-1" />
            <span>{course.purchases}</span>
          </div>
        </div>

        <span className="text-white text-2xl font-bold">{formattedPrice}</span>
      </div>
    </div>
  );
};
