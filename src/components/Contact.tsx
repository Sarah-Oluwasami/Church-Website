import Link from "next/link"; // Use Next.js's Link
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <div>
      <div className='bg-[url("/images/contact-bg.jpeg")] w-[100%] 2xl:h-[600px] max-xl:h-[450px] opacity bg-no-repeat bg-center bg-cover -mt-10'></div>
      <nav className="flex max-md:flex-col justify-between  justify-items-center items-center py-8 px-52 max-lg:px-32 max-md:px-18 max-sm:px-8 bg-zinc-100">
        <p className="text-4xl capitalize font-bold font-[Cambria] text-zinc-800">
          Contact Us
        </p>
        <article className="text-sm font-medium">
          <Link
            href={"/"}
            className="text-[#c2a95f] transition-colors duration-300 hover:text-black"
          >
            Home{" "}
          </Link>
          <span> / Contact Us</span>
        </article>
      </nav>

      <section className="w-[79%] flex max-xl:flex-col space-y-10 m-auto space-x-10 my-20 font-[Cambria] ">
        <img
          src="/images/contact-img.jpg"
          alt=""
          className="w-96 max-xl:w-full shadow-2xl rounded-2xl object-fit"
        />
        <div className="border-b-2 border-zinc-400">
          <h1 className="font-bold text-3xl pb-4 text-zinc-800">
            Contact Information
          </h1>
          <div className="flex max-md:flex-col space-y-10 max-md:py-6 space-x-10">
            <blockquote className="flex space-x-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="icon rounded-full p-4 mt-1 bg-[#dccda0]"
              />
              <article>
                <h2 className="text-sm pb-3">CALL US</h2>
                <ul className="flex flex-col  space-y-2 text-sm font-[sans-serif] font-medium">
                  <a href="tel:+2348034009486">+234 803 400 9486</a>
                  <a href="tel:+2348163959742">+234 816 395 9742</a>
                  <a href="tel:+2348063129025">+234 806 312 9025</a>
                  <a href="tel:+2348062768045">+234 806 276 8045</a>
                </ul>
              </article>
            </blockquote>
            <blockquote className="flex space-x-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon rounded-full p-4 mt-1 bg-[#dccda0]"
              />
              <article>
                <h2 className="text-sm pb-2">SEND A MAIL</h2>
                <a
                  href=""
                  className="text-sm font-[sans-serif] font-medium underline"
                >
                  {" "}
                  eaglemusical@gmail.com
                </a>
              </article>
            </blockquote>
            <blockquote className="flex space-x-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="icon rounded-full p-4 mt-1 bg-[#dccda0]"
              />
              <article>
                <h2 className="text-sm pb-2">OUR ADDRESS</h2>
                <a href="" className="text-sm font-[sans-serif] font-medium">
                  Behind El-shaddai Comprehensive <br />
                  High School, Atiba Area, <br />
                  Osogbo, Osun State.
                </a>
              </article>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
