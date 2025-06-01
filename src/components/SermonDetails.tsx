import Link from "next/link"; // Use Next.js's Link

const SermonDetails: React.FC = () => {
  return (
    <div className="">
      <div className='bg-[url("/images/sermondetail-bg1.jpg")] w-[100%] 2xl:h-[600px] max-xl:h-[450px] max-md:bg-center  bg-no-repeat bg-cover'></div>
      <nav className="flex max-md:flex-col justify-between  justify-items-center items-center py-8 px-52 max-lg:px-32 max-md:px-18 max-sm:px-8 bg-zinc-100">
        <p className="text-2xl capitalize font-bold font-[Cambria] text-zinc-800">
          Sermon Details
        </p>
        <article className="text-sm font-medium">
          <Link
            href={"/"}
            className="text-[#c2a95f] transition-colors duration-300 hover:text-black"
          >
            Home{" "}
          </Link>
          <span> / Sermon Details</span>
        </article>
      </nav>

      <div>
        <blockquote className=" bottom-6 text-center  font-[Cambria] px-3 py-9 w-[50%] max-lg:w-[90%] m-auto">
          <h2 className=" font-bold text-5xl max-md:text-3xl text-black">
            Prayer: The most powerful weapon given to man by God
          </h2>

          <h6 className="lowercase text-xl font-medium text-[#c2a95f]">
            Wed. Prayer Meeting 12/02/25_Rev. Joshua ADEWUMI
          </h6>
        </blockquote>
        <div className='bg-[url("/images/sermoncontent3.jpg")] w-full md:min-h-[600px] bg-no-repeat bg-cover flex flex-col items-center justify-center px-3 py-10 text-center space-y-10'>
          <article
            className="bg-stone-700 flex max-md:flex-col px-10 py-4 w-[77%] max-md:w-[100%] justify-between 
             opacity-90 items-center transition-all duration-700 
             ease-in-out  hover:scale-110 "
          >
            <blockquote className="text-white  md:w-[29rem]">
              <h2 className="text-2xl max-sm:text-md max-sm:px-2 font-bold font-[Cambria] leading-5 py-4">
                Prayer: The most powerful weapon given to man by God
              </h2>
              <p>James 5:13-18</p>
            </blockquote>
            <audio
              controls
              className="w-[300px] max-sm:w-[200px] my-4 bg-transparent border-none"
              style={{ backgroundColor: "transparent" }}
            >
              <source
                src="/mixkit-arcade-retro-game-over-213.mp3"
                type="audio/mpeg"
              />
              {/* <source src="horse.mp3" type="audio/mpeg" /> */}
              Your browser does not support the audio element.
            </audio>
          </article>

          <button className="border-[1px] border-[#d6c590] my-2 cursor-pointer">
            {" "}
            <p className="bg-[#d6c590] m-2 text-amber-950 font-bold px-10 py-4 uppercase transition-all duration-700 hover:bg-amber-950 hover:text-[#d6c590]">
              {" "}
              Download Sermon
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SermonDetails;
