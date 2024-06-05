import Image from "next/image";

export const Sidebar = ({ isSidebarOpen }: any) => {
  return (
    <nav
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } pt-4 pb-6 bg-transparent rounded-xl shadow-md lg:hidden`}
    >
      <div className="flow-root">
        <div className="flex flex-col px-6 -my-2 space-y-1">
          <Image src="/image/logo.png" width={40} height={33} alt="logo" />
          <a
            href="#"
            className="inline-flex py-2 text-base font-semibold text-gray-700 transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
          >
            Home{" "}
          </a>
          <a
            href="#"
            className="inline-flex py-2 text-base font-semibold text-gray-700 transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
          >
            Book{" "}
          </a>
          <a
            href="#"
            className="inline-flex py-2 text-base font-semibold text-gray-700 transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
          >
            Guests{" "}
          </a>
          <a
            href="#"
            className="inline-flex py-2 text-base font-semibold text-gray-700 transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
          >
            Events
          </a>
          <a
            href="#"
            className="inline-flex py-2 text-base font-semibold text-gray-700 transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
          >
            Services
          </a>
          <a
            href="#"
            className="inline-flex py-2 text-base font-semibold text-gray-700 transition-all duration-200  hover:text-amber-500 focus:text-blue-600"
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};
