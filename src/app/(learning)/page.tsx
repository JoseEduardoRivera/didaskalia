"use client";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { initialData } from "@/seed/course-seed";
import { CourseGrid } from "@/components";
import { CourseRow } from "../../components/ui/course-row/CourseRow";

const courses = initialData.courses;

export default function Home() {
  const [splineHeight, setSplineHeight] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setSplineHeight(window.innerHeight); // Asignar la altura de la ventana al componente de Spline
    }

    handleResize(); // Llamar la función una vez para establecer la altura inicial
    window.addEventListener("resize", handleResize); // Agregar el evento de cambio de tamaño
    return () => window.removeEventListener("resize", handleResize); // Limpiar el efecto en el desmontaje del componente
  }, []);

  return (
    <div className="">
      {/* Ajustar la altura del Spline según la altura disponible */}
      {splineHeight && (
        <Spline
          scene="https://prod.spline.design/xlK3Xld-IFAcehSx/scene.splinecode"
          style={{ height: splineHeight }}
        />
      )}

      <div className="bg-black py-10 px-0 sm:px-10">
        <div className="text-center py-5">
          <h1 className="font-bold text-4xl">DIDASKALIA | LEARNING</h1>
          <h2 className="font-bold text-2xl">Todos nuestros cursos</h2>
        </div>
        <CourseGrid courses={courses} />
      </div>
      <div className="p-5">
        <CourseRow courses={courses} title="Recent Uploaded" />
      </div>
    </div>
  );
}
