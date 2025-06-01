"use client"; // Add this directive at the very top
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; // Use Next.js's Link
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-10   container-overlay sm:hidden`}
      ></div>
      <nav className="flex fixed top-0 z-10 sm:opacity-95  w-full bg-stone-700  justify-between  justify-items-center  items-center ">
        <Link href={"/"} className="w-28 mx-4 cursor-pointer">
          <Image
            src="/images/church-logo.png"
            alt="Church Logo"
            width={120} // Specify the intended width
            height={60} // Specify the intended height
            objectFit="contain" // Or other object-fit options like cover, fill, etc.
            priority={true} // For critical above-the-fold images like the logo on the homepage
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="fixed right-0 z-20 block sm:hidden bg-[#d6c590] px-9 py-[14px]"
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="icon text-stone-800 text-3xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="icon text-black text-4xl"
            />
          )}
        </button>

        <div
          className={`${
            isOpen ? "max-sm:translate-x-0 " : "max-sm:translate-x-full "
          } transition-transform duration-500 ease-in-out  max-sm:bg-[#d6c590]  overflow-hidden flex max-sm:flex-col max-sm:fixed max-sm:h-[100%] top-0 max-sm:right-0  items-center max-sm:font-medium  z-10  grow-1 justify-items-center justify-center `}
        >
          <h1 className=" text-sm text-stone-800 font-[Cambria] absolute top-5 left-4 sm:hidden">
            Holiness and Truth Tabernacle
          </h1>
          <article className="flex max-sm:mt-20 max-sm:px-6 max-sm:flex-col max-sm:text-stone-800 max-sm:font-[Cambria] text-white font-bold text-lg sm:text-[9px] md:text-xs lg:text-sm  max-sm:space-y-3 lg:space-x-10 space-x-2 m-auto">
            <Link
              href={"/"}
              className="relative inline-block  after:block after:absolute after:w-0 after:h-[3px] after:bg-[#d6c590] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full pb-3 tracking-wider"
            >
              HOME
            </Link>

            <Link
              href={"/assembly"}
              className="relative inline-block  after:block after:absolute after:w-0 after:h-[3px] after:bg-[#d6c590] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full pb-3 tracking-wider"
            >
              OUR ASSEMBLY
            </Link>
            <Link
              href={"/sermons"}
              className="relative inline-block  after:block after:absolute after:w-0 after:h-[3px] after:bg-[#d6c590] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full pb-3 tracking-wider"
            >
              SERMONS
            </Link>
            <Link
              href={"/branham"}
              className="relative inline-block  after:block after:absolute after:w-0 after:h-[3px] after:bg-[#d6c590] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full pb-3 tracking-wider"
            >
              WILLIAM BRANHAM
            </Link>
            <Link
              href={"/vgr"}
              className="relative inline-block  after:block after:absolute after:w-0 after:h-[3px] after:bg-[#d6c590] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full pb-3 tracking-wider"
            >
              VOICE OF GOD RECORDINGS
            </Link>
          </article>
          <Link
            href={"/contact"}
            className="sm:bg-[#d6c590] max-sm:bg-stone-800 lg:py-7 py-6 max-sm:py-2 max-sm:mb-2 lg:px-10 max-sm:px-20 px-4 lg:text-xl text-xs max-sm:text-lg max-sm:text-white   sm:text-amber-950 font-mono font-semibold cursor-pointer max-sm:tracking-widest"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
