import React from "react";
import Image from "next/image";
import { fortmatPrice } from "@/utils";
import Link from "next/link";

interface Props {
  author: string;
  price: number;
}

export function CourseMainInfo({ author, price }: Props) {
  const formatPrice = fortmatPrice(price);

  return (
    <div className="mt-4">
      <div className="flex flex-row items-center">
        <Image
          src={"/imgs/userDefault.png"}
          alt={`${author}-image`}
          width={50}
          height={50}
        />
        <Link
          href={`/profile/${author}`}
          className="ml-2 font-bold cursor-pointer text-xl"
        >
          {author}
        </Link>
      </div>
      <div className="font-bold text-3xl sm:text-3xl mt-2 p-4 border-2 border-white text-center">
        {formatPrice}
      </div>
    </div>
  );
}
