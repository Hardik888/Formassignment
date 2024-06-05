"use client";
import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "./sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="pb-6 bg-white border border-b-gray-200 lg:pb-0 w-auto">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center   w-3/12 mr-80 ">
            {" "}
            <Image src="/image/acme.png" alt="Logo" width={15} height={10} />
            <h1 className="text-xl font-bold text-gray-800 transition-all duration-200 ml-2  hover:text-amber-500 focus:text-gray-200">
              Acme Co
            </h1>
          </div>
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100  hover:text-amber-500"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "x" : "||"}
          </button>

          <nav className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-amber-500 focus:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
            >
              Book
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
            >
              Guests
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
            >
              Events
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
            >
              Support
            </a>
            <Image
              className=" rounded-sm hover:text-blue-50"
              src="/image/logo.png"
              width={35}
              height={33}
              alt="logo"
            />
          </nav>
        </div>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
    </header>
  );
};

export default Header;
