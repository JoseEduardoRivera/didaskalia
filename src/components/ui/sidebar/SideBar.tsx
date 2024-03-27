"use client";
import { useUIStore } from "@/context";
import { categoriesUrlLinks } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import {
  IoBookOutline,
  IoCloseCircleOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoBookmarksSharp,
} from "react-icons/io5";

const categories = categoriesUrlLinks;

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const handleCategoryClick = () => {
    setIsOpen(false); // Cerrar el menú cuando se hace clic en una categoría
    closeMenu(); // Cerrar el menú lateral
  };

  return (
    <div className="">
      {/* Background  */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen opacity-30 z-10 bg-black" />
      )}
      {/* blur */}
      {isSideMenuOpen && (
        <div
          onClick={() => closeMenu()}
          className="fade-in fixed w-screen top-0 left-0 h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}
      {/* sidemenu */}

      <nav
        className={clsx(
          "fixed p-5 left-0 top-0 w-[500px] h-screen bg-black z-20 shadow-2xl transform transition-all duration-300",
          {
            "-translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseCircleOutline
          size={40}
          className="absolute top-5 left-5 cursor-pointer"
          onClick={() => closeMenu()}
        />
        {/* Menu */}
        {/* Divider */}
        <div className="w-full h-px bg-slate-400 mt-20 rounded" />
        <button
          className="ml-2 mt-4 mb-2 sm:hidden items-center flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoBookmarksSharp size={20} />
          <span className="ml-2 text-base">Categories</span>
        </button>
        {isOpen && (
          <div className="flex flex-col bg-black rounded-md">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                onClick={() => handleCategoryClick()}
                className="mx-2 my-1 p-2  rounded-3xl transition-all hover:bg-didaskalia-yellow font-bold  border-b-2 border-didaskalia-yellow duration-200"
              >
                {category.label}
              </Link>
            ))}
          </div>
        )}
        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-didaskalia-yellow rounded transition-all"
        >
          <IoLogInOutline size={20} />
          <span className="ml-2 text-base">Log In</span>
        </Link>

        {/* Divider */}
        <div className="w-full h-px bg-slate-400 my-10 rounded" />
        <span className="font-bold">User Settings</span>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-didaskalia-yellow rounded transition-all"
        >
          <IoBookOutline size={20} />
          <span className="ml-2 text-base">My Courses</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-didaskalia-yellow rounded transition-all"
        >
          <IoPersonOutline size={20} />
          <span className="ml-2 text-base">Profile</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-didaskalia-yellow rounded transition-all"
        >
          <IoLogOutOutline size={20} />
          <span className="ml-2 text-base">Log Out</span>
        </Link>
        <div className="w-full h-px bg-slate-400 my-10 rounded" />
        <span className="font-bold">Admin Settings</span>
        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-didaskalia-yellow rounded transition-all"
        >
          <IoTicketOutline size={20} />
          <span className="ml-2 text-base">Purchases</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-didaskalia-yellow rounded transition-all"
        >
          <IoPeopleOutline size={20} />
          <span className="ml-2 text-base">Users</span>
        </Link>
      </nav>
    </div>
  );
};
