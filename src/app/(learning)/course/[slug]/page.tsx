import {
  CourseButtons,
  CourseContent,
  CourseInfo,
  CourseMainInfo,
} from "@/components";
import { initialData } from "@/seed/course-seed";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: Props) {
  const { slug } = params;

  const course = initialData.courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div>
      {/* CONTENIDO PRINCIPAL */}
      <div className="mt-28 p-4 grid grid-flow-row gap-3 sm:grid-flow-col">
        <div className="sm:col-span-2">
          <div className="rounded-md bg-slate-300">
            <Image
              src={`/courses/${course.image}`}
              alt={`${course.slug}-course-image`}
              className=" w-full h-full"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <CourseMainInfo author={course.author} price={course.price} />
        </div>
        <div className=" sm:col-span-4">
          <CourseButtons course={course} />
          <CourseInfo
            category={course.category}
            description={course.description}
            title={course.name}
            uploadedAt={course.uploadedAt}
            level={course.level}
            purchases={course.purchases}
            rating={course.rating}
          />
          <CourseContent sections={course.sections} />
        </div>
      </div>
      {/* COMENTARIOS */}
      <div className="p-4 my-2">
        <p>READ ABOUT THEIR OPINION</p>
      </div>
    </div>
  );
}
