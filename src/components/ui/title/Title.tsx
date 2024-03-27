import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, className, subtitle }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`antialiased text-4xl font-semibold my-10`}>{title}</h1>
      {subtitle && <h2 className={`text-xl my-10`}>{subtitle}</h2>}
    </div>
  );
};
