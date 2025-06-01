import Link from "next/link"; // Use Next.js's Link
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Sermons: React.FC = () => {
  return (
    <div>
      <div className='bg-[url("/images/book-bg2.jpg")] w-[100%] 2xl:h-[600px] max-xl:h-[450px] opacity-90 bg-no-repeat bg-cover bg-center'></div>
      <nav className="py-6 px-52 max-lg:px-32 max-md:px-18 max-sm:px-8 bg-zinc-100">
        <div className="flex max-md:flex-col justify-between  justify-items-center items-center pb-3">
          {" "}
          <p className="text-4xl capitalize font-bold font-[Cambria] text-zinc-800">
            Sermons
          </p>
          <article className="text-sm font-medium">
            <Link
              href={"/"}
              className="text-[#c2a95f] transition-colors duration-300 hover:text-black"
            >
              Home{" "}
            </Link>
            <span> / Sermons</span>
          </article>
        </div>
        <form action="" className="flex bg-white ">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full border-[1px] border-zinc-300  py-2 px-6 "
          />
          <span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="icon -ml-10 py-4"
            />
          </span>
        </form>
      </nav>
      <section className="my-20">
        {" "}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 w-[70%] max-md:w-[80%] m-auto gap-6">
          <article className="relative group transition-all duration-300 hover:border-[6px] hover:border-[#c9b781] shadow-2xl">
            <Link href={"/sermondetails"} className=" relative">
              <Image
                src="/images/sermon-card.jpeg"
                alt="Sermon"
                width={416} // Specify the intended width
                height={380}
                className="h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-30"></div>
              <blockquote className="absolute bottom-6 text-center text-white font-[Cambria] px-3 tracking-tight">
                <h2 className="uppercase font-bold text-xl leading-5">
                  Prayer: The most powerful weapon given to man by God
                </h2>
                <br />
                <h6 className="lowercase text-lg leading-5">
                  Wed. Prayer Meeting 12/02/25_Rev. Joshua ADEWUMI
                </h6>
              </blockquote>
            </Link>
          </article>
          <article className="relative group transition-all duration-300 hover:border-[6px] hover:border-[#c9b781] shadow-2xl">
            <a href="#" className=" relative">
              <Image
                src="/images/sermon-card.jpeg"
                alt="Sermon"
                width={416} // Specify the intended width
                height={380}
                className="h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-30"></div>
              <blockquote className="absolute bottom-6 text-center text-white font-[Cambria] px-3 tracking-tight">
                <h2 className="uppercase font-bold text-xl leading-5">
                  Prayer: The most powerful weapon given to man by God
                </h2>
                <br />
                <h6 className="lowercase text-lg leading-5">
                  Wed. Prayer Meeting 12/02/25_Rev. Joshua ADEWUMI
                </h6>
              </blockquote>
            </a>
          </article>
          <article className="relative group transition-all duration-300 hover:border-[6px] hover:border-[#c9b781] shadow-2xl">
            <a href="#" className=" relative">
              <Image
                src="/images/sermon-card.jpeg"
                alt="Sermon"
                width={416} // Specify the intended width
                height={380}
                className="h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-30"></div>
              <blockquote className="absolute bottom-6 text-center text-white font-[Cambria] px-3 tracking-tight">
                <h2 className="uppercase font-bold text-xl leading-5">
                  Prayer: The most powerful weapon given to man by God
                </h2>
                <br />
                <h6 className="lowercase text-lg leading-5">
                  Wed. Prayer Meeting 12/02/25_Rev. Joshua ADEWUMI
                </h6>
              </blockquote>
            </a>
          </article>
          <article className="relative group transition-all duration-300 hover:border-[6px] hover:border-[#c9b781] shadow-2xl">
            <a href="#" className=" relative">
              <Image
                src="/images/sermon-card.jpeg"
                alt="Sermon"
                width={416} // Specify the intended width
                height={380}
                className="h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-30"></div>
              <blockquote className="absolute bottom-6 text-center text-white font-[Cambria] px-3 tracking-tight">
                <h2 className="uppercase font-bold text-xl leading-5">
                  Prayer: The most powerful weapon given to man by God
                </h2>
                <br />
                <h6 className="lowercase text-lg leading-5">
                  Wed. Prayer Meeting 12/02/25_Rev. Joshua ADEWUMI
                </h6>
              </blockquote>
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
