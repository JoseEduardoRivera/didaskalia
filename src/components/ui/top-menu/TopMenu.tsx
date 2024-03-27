"use client";
import { useUIStore } from "@/context";
import { categoriesUrlLinks } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";

const categories = categoriesUrlLinks;

export const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 py-5 justify-between items-center w-full backdrop-blur-md">
      <button
        onClick={() => openSideMenu()}
        className="m-2 p-2 rounded-md transition-all hover:bg-didaskalia-yellow"
      >
        <IoMenuOutline className=" w-7 h-7" />
      </button>
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <span className="antialiased font-bold">Didaskalia</span>
          <span> | Learning</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="m-2 p-2 rounded-3xl transition-all hover:bg-didaskalia-yellow font-bold"
        >
          Categories
        </button>
        {isOpen && (
          <div className="flex flex-col bg-black rounded-md">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="m-2 p-2 rounded-3xl transition-all hover:bg-didaskalia-yellow font-bold"
              >
                {category.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* search, cart, menu */}
      <div className="flex items-center">
        {/* Copiar el enfoque de el drawer */}
        <button className="mx-2">
          <IoSearchOutline className="h-7 w-7" />
        </button>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-green-700">
              3
            </span>
            <IoCartOutline className="h-7 w-7" />
          </div>
        </Link>
      </div>
    </nav>
  );
};
