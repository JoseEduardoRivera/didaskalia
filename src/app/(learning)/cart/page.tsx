import Image from "next/image";
import Link from "next/link";
import { fortmatPrice } from "@/utils";
import { initialData } from "@/seed/course-seed";
import { IoTrashBinOutline } from "react-icons/io5";
import { CourseRow, Title } from "@/components";

const coursesInCart = [
  initialData.courses[0],
  initialData.courses[1],
  initialData.courses[2],
  initialData.courses[3],
];
export default function CartPage() {
  return (
    <>
      <div className="flex justify-center items-center mb-10 px-0 sm:px-5 mt-20">
        <div className="flex flex-col w-[1200px] ">
          <Title title="Cart " />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Carrito */}
            <div className="flex flex-col mt-2">
              <span className="text-xl">Check your cart before pay.</span>
              {/* Items del carrito */}
              {coursesInCart.map((course, index) => (
                <div
                  className="grid grid-cols-[150px,1fr,auto] sm:w-full items-center my-2"
                  key={course.slug}
                >
                  <Link href={`/course/${course.slug}`} className="mr-5">
                    <Image
                      src={`/courses/${course.image}`}
                      className="rounded"
                      alt={course.name}
                      width={150}
                      height={100}
                    />
                  </Link>
                  <div className="flex flex-col mr-3">
                    <p className="flex-grow">{course.name}</p>
                    <Link
                      href={`/profile/${course.author}`}
                      className="text-sm text-gray-600"
                    >
                      {course.author}
                    </Link>
                    <p className="font-bold">{fortmatPrice(course.price)}</p>
                  </div>
                  <div className="px-6 bg-red-700 flex items-center h-full cursor-pointer hover:opacity-50">
                    <IoTrashBinOutline size={20} />
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-didaskalia-white rounded-xl p-7 sm:absolute sm:top-40 sm:right-10">
              <h2 className="text-2xl mb-2 text-black">Your Resume</h2>
              <div className="border-[1px] border-gray-700 my-2 rounded" />
              <div className="grid grid-cols-2">
                <span className="text-black">No. Courses:</span>
                <span className="text-right text-black">3 Course(s)</span>
                <span className="text-black">Total Price:</span>
                <span className="text-right text-black">$ 100</span>
                <span className="text-black">Taxes (15%):</span>
                <span className="text-right text-black">$ 15</span>
                <span className="text-2xl mt-5 font-bold text-black">
                  Total:
                </span>
                <span className="text-right mt-5 mb-5 text-2xl font-bold text-black">
                  $ 115
                </span>
              </div>
              <div className="text-center">
                <Link
                  href={"/"}
                  className="hover:opacity-50 transition-all duration-150 p-2 font-bold shadow-lg rounded-md bg-black"
                >
                  Continue to pay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 sm:px-5">
        <CourseRow
          title="Increase your knowledge adding these courses"
          courses={coursesInCart}
        />
      </div>
    </>
  );
}
