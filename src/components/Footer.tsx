"use client"; // Add this directive at the very top
import { useEffect, useState } from "react";
import Link from "next/link"; // Use Next.js's Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Flipped from "@/components/Flipped";
import "./Flipped.css";

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show button after scrolling 300px
      } else {
        setShowButton(false); // Hide button when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="">
      <div className="my-6">
        <h2 className="text-5xl capitalize font-bold mt-16 mb-10 font-[Cambria] text-zinc-800 w-fit m-auto text-center">
          Order of Service
        </h2>
        <Flipped />
      </div>

      <div className="bg-zinc-100 text-zinc-800 pt-16 mt-6">
        <div className=" max-lg:w-[95%] w-[75%] m-auto">
          <div className="flex max-sm:flex-col space-x-4 xl:space-x-32 border-b-3 border-zinc-300 pb-6">
            <article className="sm:w-[45%]">
              <h2 className="text-2xl font-bold my-6 font-[serif]">About Us</h2>
              <p className="text-sm font-[sans-serif] leading-6 tracking-wide">
                Holiness and Truth Tabernacle is a non-denominational local
                sovereign assembly of bible believers. We believe the full
                gospel of Jesus Christ as restored through the ministry of God’s
                prophet messenger to the last gentile church age – Bro. William
                Marrion Branham (Malachi 4:5-6, Revelation 10:7 and Luke 17:30).
              </p>
            </article>

            <article className="  ">
              <h2 className="text-2xl font-bold my-6 font-[serif]">
                Quick Links
              </h2>
              <ul className="flex flex-col capitalize space-y-2 text-sm font-[sans-serif]">
                <Link
                  href={"/"}
                  className="hover:line-through hover:text-[#c9b781]"
                >
                  Home
                </Link>

                <Link
                  href={"/assembly"}
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  Our Assembly
                </Link>
                <Link
                  href={"/sermons"}
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  Sermons
                </Link>
                <Link
                  href={"/branham"}
                  className=" transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  William Braham
                </Link>
                <Link
                  href={"/vgr"}
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  Voice Of God Recordings
                </Link>
                <Link
                  href={"/contact"}
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  Contact Us
                </Link>
              </ul>
            </article>

            <article>
              <h2 className="text-2xl font-bold my-6 font-[serif]">
                Our Contact
              </h2>
              <ul className="flex flex-col  space-y-2 text-sm font-[sans-serif]">
                <a
                  href="tel:+2348034009486"
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  +234 803 400 9486
                </a>
                <a
                  href="tel:+2348163959742"
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  +234 816 395 9742
                </a>
                <a
                  href="mailto:eaglemusical@gmail.com"
                  className="transition-all duration-300 hover:line-through hover:text-[#c9b781]"
                >
                  eaglemusical@gmail.com
                </a>
              </ul>
            </article>
          </div>

          <div className="flex max-sm:flex-col justify-between  justify-items-center items-center text-center py-8">
            <article className="space-x-3">
              <a href="https://web.facebook.com/holinesstruthtabernacle/?_rdc=1&_rdr#">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="icon bg-zinc-200 rounded-full p-3 transition-colors duration-300 hover:bg-[#dccda0]"
                />
              </a>
              <a href="https://www.youtube.com/@HolinessAndTruthTabernacle">
                {" "}
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="icon bg-zinc-200 rounded-full p-3 transition-colors duration-300 hover:bg-[#dccda0]"
                />
              </a>
            </article>
            <article>
              <p className="">
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="icon w-3 px-1 "
                />
                Holiness and Truth Tabernacle {new Date().getFullYear()}{" "}
                Allright Reserved
              </p>
            </article>
          </div>

          {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-10 bg-[#d6c590] hover:bg-zinc-300 cursor-pointer text-black px-3 py-1  transition-colors duration-300 shadow-lg"
            >
              <FontAwesomeIcon icon={faArrowUp} className="icon text-sm" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
