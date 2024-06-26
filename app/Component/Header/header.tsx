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
    <header className="pb-6 bg-white mr-1   border-b-gray-100 lg:pb-0 w-auto">
      <div className="px-4   sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center   w-3/12 mr-80 ">
            {" "}
            <Image src="/image/acme.png" alt="Logo" width={15} height={10} />
            <h1 className="font-bold text-xl text-black transition-all duration-200 ml-4  hover:text-gray-100 focus:text-gray-800">
              AcmeCo
            </h1>
          </div>
          <button
            type="button"
            className=" -ml-12 text-black   transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100  hover:text-gray-300"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "x" : "||"}
          </button>

          <nav className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-gray-300 focus:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-gray-300 focus:text-blue-600"
            >
              Book
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-gray-300 focus:text-blue-600"
            >
              Guests
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-gray-300 focus:text-blue-600"
            >
              Events
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-gray-300 focus:text-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="text-base font-semibold text-black transition-all duration-200  hover:text-gray-300 focus:text-blue-600"
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
