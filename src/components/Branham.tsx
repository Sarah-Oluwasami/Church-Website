import Link from "next/link"; // Use Next.js Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Branham: React.FC = () => {
  return (
    <div>
      <div className='bg-[url("/images/branham-bg1.png")] w-[100%] 2xl:h-[600px] max-xl:h-[450px] opacity bg-no-repeat bg-center bg-cover'></div>
      <nav className="flex max-md:flex-col justify-between  justify-items-center items-center py-8 px-52 max-lg:px-32 max-md:px-18 max-sm:px-8 bg-zinc-100">
        <p className="text-4xl max-sm:text-2xl capitalize font-bold font-[Cambria] text-zinc-800">
          William Branham
        </p>
        <article className="text-sm font-medium">
          <Link
            href={"/"}
            className="text-[#c2a95f] transition-colors duration-300 hover:text-black"
          >
            Home{" "}
          </Link>
          <span> / William Branham</span>
        </article>
      </nav>

      <section className="w-[60%] max-lg:w-[90%] m-auto my-20">
        <h2 className="text-5xl text-zinc-800  capitalize font-bold font-[Cambria] text-center py-3">
          Messanger Of This Last Day
        </h2>
        <article className=" text-[17px]  leading-7">
          <p>
            William Branham (we call him Brother Branham) began his life in the
            Spring of 1909. He was born into the poorest of families, deep in
            the hills of southern Kentucky. Within minutes of his birth in a
            tiny one-room cabin, a strange Light entered the room and hovered
            over the bed where he was laying. It was the beginning of a
            supernatural life that would change the face of the modern Christian
            world.
          </p>
          <p className="py-4">
            With an alcoholic father and little to no religion at home, he
            didn’t have much of a chance. Yet, against all odds, Brother Branham
            grew up to be a mighty man of God. At about 38 years old, he was
            praying in a small trapping cabin just north of his home in
            Jeffersonville, Indiana. It was then, late into the night, that the
            Angel of the Lord visited him and gave him the commission to pray
            for the sick.
          </p>
        </article>

        <div className="relative my-4 ">
          <span className="absolute -top-4 max-sm:-top-10">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="icon text-[#c2a95f] text-7xl"
            />
          </span>
          <blockquote className="ml-20 max-sm:ml-6 max-sm:mt-10 ">
            <span className="pr-3 max-sm:pl-12">
              <FontAwesomeIcon icon={faMinus} className="icon text-[#c2a95f]" />
            </span>
            <span className="uppercase text-xs tracking-wider ">
              Among other things, the Angel told him
            </span>
            <p className="text-2xl font-bold font-[Cambria] text-zinc-800 leading-8">
              If you get the people to believe you, and be sincere when you
              pray, nothing shall stand before your prayers, not even cancer.
            </p>
          </blockquote>

          <div className="border-10 border-[#eee5ca] px-16 max-sm:px-6 py-14 my-10 transition-all duration-300 hover:border-[#d1c18d] ">
            <article className="text-[17px] text-justify">
              <p>
                All the doubts were gone. <i>Brother Branham</i> now had his
                commission and boldly stepped forward. A world-wide healing
                revival had begun.
              </p>
              <p className="py-4">
                <i>Brother Branham&apos;s</i> ministry marked the greatest outpouring
                of the Holy Spirit since the day of Pentecost. Hundreds of
                thousands attended the Branham campaigns. Thousands were healed
                in the Name of the Lord Jesus Christ. Other evangelists such as
                Oral Roberts, T.L. Osborne, and A.A. Allen soon followed{" "}
                <i>Brother Branham</i> and started their own healing revivals.
                The Lord rained down His blessings like never before. The
                healing hand of Jesus Christ had once again touched His people.
              </p>
              <p>
                <i>Brother Branham&apos;s</i> ministry had no equal. He proved that
                Jesus Christ is as alive today as He was when He walked the
                shores of Galilee. Like the apostle Paul, <i>Brother Branham</i>{" "}
                showed that the Gospel is not in word only, but also in power!
                Revelation of the hidden mysteries and the manifested power of
                God had come together in one, very special ministry. Notably, as
                the scribes recorded the sermons of the biblical prophets, his
                sermons were recorded onto magnetic tape. Today, we cherish
                those recordings.
              </p>
              <p className="pt-4">
                <i>Brother Branham</i> passed away as a result of a tragic car
                crash in December, 1965. God took His servant home, but He left
                us with those precious recordings that we hold so dear to our
                hearts.
              </p>
            </article>
          </div>
        </div>
      </section>
      <nav className="text-center bg-[#d1c18d] p-6 text-2xl font-bold font-[Cambria]">
        <span className="text-zinc-800">You can read more about </span>
        <a href="" className="text-amber-950">
          (WILLIAM BRANHAM).
        </a>
        <br />
        <span className="text-zinc-800">
          You can also listen to him give his own life story by downloading this
          sermon
        </span>
        <a href="" className="text-amber-950">
          {" "}
          (LIFE STORY).
        </a>
      </nav>
    </div>
  );
};

export default Branham;
