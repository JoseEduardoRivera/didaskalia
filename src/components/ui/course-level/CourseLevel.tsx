import React from "react";

interface Props {
  level: "easy" | "medium" | "hard";
}
export default function CourseLevel({ level }: Props) {
  let color = "";
  let label = "";

  switch (level) {
    case "easy":
      color = "bg-green-500";
      label = "Easy";
      break;
    case "medium":
      color = "bg-orange-500";
      label = "Medium";
      break;
    case "hard":
      color = "bg-red-500";
      label = "Hard";
      break;
    default:
      color = "bg-green-500";
      label = "Easy";
      break;
  }
  return (
    <div
      className={`text-sm sm:text-base rounded-full px-2 py-1 ${color} text-white text-xs font-semibold`}
    >
      {label}
    </div>
  );
}
