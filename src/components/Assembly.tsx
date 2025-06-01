import Link from "next/link"; // Use Next.js's Link
import Image from "next/image";


const Assembly: React.FC = () => {
  return (
    <div className="">
      <div className='bg-[url("/images/Assembly-bg.png")] w-[100%] 2xl:h-[700px] max-xl:h-[450px] bg-no-repeat bg-cover'></div>
      <nav className="flex justify-between  justify-items-center items-center py-8 xl:px-52 px-20 max-sm:flex-col bg-zinc-100 ">
        <p className="text-4xl capitalize font-bold font-[Cambria] text-zinc-800">
          Our Assembly
        </p>
        <article className="text-sm font-medium">
          <Link
            href={"/"}
            className="text-[#c2a95f] transition-colors duration-300 hover:text-black"
          >
            Home{" "}
          </Link>
          <span> / Our Assembly</span>
        </article>
      </nav>
      <blockquote className="relative min-h-[520px] mt-20 w-[70%] max-md:w-[95%] max-sm:w-[48.5%] m-auto">
        <article className="flex max-sm:flex-col   justify-between mb-6 space-y-6">
          <Image
            src="/images/jesus.jpeg"
            alt=""
            width={416} // Specify the intended width
            height={380}
            className="w-[26rem] max-xl:w-[18rem] shadow-2xl h-80 max-xl:h-60 object-cover"
          />

          <Image
            src="/images/holy-spirit.jpeg"
            alt=""
            width={416} // Specify the intended width
            height={380}
            className="w-[26rem] max-xl:w-[18rem] shadow-2xl h-80 max-xl:h-60 object-cover"
          />
        </article>
        <Image
          src="/images/branham.jpg"
          alt=""
          width={416} // Specify the intended width
          height={380}
          className="w-[30rem] max-xl:w-[20rem] max-sm:w-[18rem] m-auto   h-80 max-xl:h-60 shadow-2xl object-cover border-2 border-white 2xl:absolute  top-30 right-[18rem]"
        />
      </blockquote>

      <blockquote className="w-[75%] max-sm:w-[95%] max-xl:mt-20 m-auto">
        <h2 className="text-4xl text-[#ceb876] capitalize font-bold font-[Cambria] text-center py-3">
          BRIEF HISTORY OF HOLINESS AND TRUTH TABERNACLE
        </h2>
        <article className="relative text-xl font-[Cambria] text-justify text-zinc-900 tracking-wide font-medium leading-7">
          <p>
            “The Church started in Brother David Akisanya’s house in July 1979;
            Brother David Akisanya being the leader of the assembly. From his
            house, the church moved to a primary school in Mokola. ”
          </p>
          <p className="py-16">
            “Thereafter, when it was made known that God had called Brother
            Martins Ainerua to the Pastoral Ministry, Brother David Akisanya
            stepped down honorably and handed the mantle of leadership to him.
            Pastor Martins was elected as the Pastor of the Church in May 1980,
            this gave room for Brother Akisanya to have the freedom to continue
            his missionary work as an Evangelist. ”
          </p>
          <p>
            “In 1981, the assembly moved to Ososami compound at Ososami road,
            and fellowshipped there until December 2002, when we relocated to
            this present site at 2nd Powerline, Eleyele-Eruwa Road. ”
          </p>
          <p className="py-16">
            “Apostle Samuel Fagbesan is the Associate Pastor and the church is
            also blessed with other ministers who care for the spiritual needs
            of the people. ”
          </p>
          <span className="">
            <Image
              src="/images/cross-bg.svg"
              alt=""
              width={416} // Specify the intended width
              height={380}
              className="absolute top-28 md:left-[16rem] lg:left-[21rem] xl:left-[29rem] opacity-65 -z-10 max-md:hidden"
            />
          </span>
        </article>
      </blockquote>
    </div>
  );
};

export default Assembly;
