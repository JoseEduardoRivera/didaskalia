import { notFound } from "next/navigation";
import { initialData } from "@/seed/course-seed";
import { Title } from "../../../../components/ui/title/Title";
import { CourseGrid } from "@/components";

interface Props {
  params: {
    id: string;
  };
}

const seedCourses = initialData.courses;

const categories = [
  { name: "technology" },
  { name: "business" },
  { name: "arts" },
  { name: "languages" },
  { name: "lifestyle" },
];

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const courses = seedCourses.filter(
    (course) => course.category.toLowerCase() === id
  );

  if (!categories.some((category) => category.name === id)) {
    notFound();
  }

  return (
    <>
      <div className="mt-28 sm:px-4">
        <Title title={`${id} courses`} subtitle="Check tthese courses" />
        <CourseGrid courses={courses} />
      </div>
    </>
  );
}
