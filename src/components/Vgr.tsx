import Link from "next/link"; // Use Next.js's Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Vgr: React.FC = () => {
  return (
    <div>
      <div className='bg-[url("/images/vgr-bg1.png")] w-[100%] 2xl:h-[600px] max-xl:h-[450px] opacity bg-no-repeat bg-cover -mt-10'></div>
      <nav className="flex max-md:flex-col justify-between  justify-items-center items-center py-8 px-52 max-lg:px-32 max-md:px-18 max-sm:px-8 bg-zinc-100">
        <p className="text-4xl capitalize font-bold font-[Cambria] text-zinc-800">
          VGR
        </p>
        <article className="text-sm font-medium">
          <Link
            href={"/"}
            className="text-[#c2a95f] transition-colors duration-300 hover:text-black"
          >
            Home{" "}
          </Link>
          <span> / Voice of God Recordings</span>
        </article>
      </nav>

      <section className="w-[60%] max-lg:w-[90%] m-auto mt-20">
        <h2 className="text-5xl text-zinc-800  capitalize font-bold font-[Cambria] text-center py-3">
          Voice of God Recordings
        </h2>
        <article className=" text-[17px]  leading-7">
          <p className="py-2">
            Voice Of God Recordings, Inc. is an inter-denominational ministry
            that is dedicated to the furtherance of the Gospel of the Lord Jesus
            Christ. The primary source of the material that we distribute is the
            recorded sermons of the late William Marrion Branham, a prophet of
            God and internationally-recognized evangelist. Our outreach includes
            Agapao Tablets, Hero Tablets, DVDs, micro SD cards, videos,
            software, books, tracts, photos, newsletters, and more.
          </p>
        </article>

        <div className="relative my-4">
          <span className="absolute -top-2 ">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="icon text-[#c2a95f] text-6xl max-sm:text-5xl"
            />
          </span>
          <blockquote className="ml-20 max-sm:ml-14">
            <p className="text-2xl  font-[Cambria] text-zinc-800 leading-8 pb-4">
              Our Religion is not a history. It's a living fact; it's a living
              God; it's a living experience.
            </p>
            <span className="pr-3">
              <FontAwesomeIcon icon={faMinus} className="icon text-[#c2a95f]" />
            </span>
            <span className="uppercase text-sm tracking-wider ">
              WILLIAM MARRION BRANHAM
            </span>
          </blockquote>

          <div className="py-6 text-[17px]  leading-7">
            <p>
              Our funding is provided by the offerings of independent churches
              and individuals of like Faith, who believe that it is the duty and
              privilege of every Christian to spread the Gospel of Christ to a
              needy world. We do not solicit funds, believing that the Lord will
              supply according to His perfect will. The circulation of material
              primarily took place through a network of offices, libraries,
              distribution centers and direct mailings to almost every country
              on earth, until the development of The Table app for IOS and
              Android devices allowed for direct distribution. Now VGR
              concentrates on delivering Agapao tablets to believers and the
              translation of Rev. Branham sermons into over 70 languages which
              are then uploaded to each individual through various methods.
            </p>
            <p className="py-2">
              About 95% of all the materials we produce are sent out free of
              charge. Since 1980, we have printed and distributed about 195
              million books, 8.6 million cassette tapes, and an almost
              innumerable amount of sermons in MP3 and M4A format. We have now
              translated Brother Branham's Message into more than 70 languages,
              and there are over 7,700 foreign translated sermons available.
              More than 13,000 Hero Tablets and 40,000 Agapao Tablets had been
              distributed by the end of 2020.
            </p>
            <p className="py-2">
              Voice Of God Recordings is not affiliated with any denomination
              and is not supported by any governing church body. We do not
              subscribe to any man-made creeds and our only “doctrinal
              statement” is our belief in the absolute authority of the Word of
              God. We acknowledge only the headship of the Lord Jesus Christ.
            </p>
          </div>
        </div>
      </section>
      <nav className="text-center bg-[#d1c18d] p-6 text-2xl font-bold font-[Cambria]">
        <span className="text-zinc-800">
          You can search and ready text sermons
        </span>
        <a href="" className="text-amber-950">
          {" "}
          Here.
        </a>
        <br />
        <span className="text-zinc-800">
          You can listen to audio sermon of Bro Branham
        </span>
        <a href="" className="text-amber-950">
          {" "}
          Here.
        </a>
      </nav>
    </div>
  );
};

export default Vgr;
