import { motion } from "framer-motion";
import { useState } from "react";
import "./Flipped.css"; // Ensure this file exists and contains necessary styles
import Image from "next/image";


const Flipped: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  interface Front {
    image: string;
    
  }

interface Back {
  title?: string;
  subtitle?: string;
  time?: string;
  title1?: string;
  time1?: string;
  title2?: string;
  subtitle2?: string;
  time2?: string;
  title3?: string;
  time3?: string;
}
  const fronts: Front[] = [
    { image: "/images/sunday-service.jpg" },
    { image: "/images/wed-service.jpg" },
    { image: "/images/fri-service.jpg" },
  ];

  const backs: Back[] = [
    {
      title1: "Sunday School",
      time1: "8:30 AM - 9:10 AM",
      title2: "Song Service",
      time2: "9:10 AM - 10:00 AM",
      title3: "Main Service",
      time3: "10:00 AM - 12:00 PM",
    },
    {
      title: "Wednesday Service",
      subtitle: "Bible Study",
      time: "5:30 PM - 7:00 PM",
    },
    {
      title1: "Night Vigil",
      time1: "12:00 AM - 3:00 AM",
      title2: "Revival",
      subtitle2: "Every Last Weekend Of The Month",
    },
  ];

  return (
    <div className="flip-grid max-md:flex-col md:max-xl:w-[90%] w-[65%]">
      {fronts.map((item, index) => (
        <div
          key={index}
          className="flip-container"
          onMouseEnter={() => setFlippedIndex(index)}
          onMouseLeave={() => setFlippedIndex(null)}
        >
          <motion.div
            className="flipper"
            animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Front Side */}
            <div className="front max-md:border-b-[1px] md:border-r-[1px] border-zinc-300">
            <Image
              src={item.image}
              alt={`Service ${index + 1}`}
              width={128} // or any width in px
              height={128}
              className="object-contain m-auto"
            />

            </div>

            {/* Back Side */}
            <div className="back font-[Cambria] text-zinc-800 space-y-1">
              {backs[index]?.title && (
                <h3 className="font-bold text-2xl ">{backs[index].title}</h3>
              )}
              {backs[index]?.subtitle && (
                <h4 className="text-xl">{backs[index].subtitle}</h4>
              )}
              {backs[index]?.time && (
                <p className="text-md">{backs[index].time}</p>
              )}

              {backs[index]?.title1 && (
                <h3 className="font-bold text-2xl">{backs[index].title1}</h3>
              )}
              {backs[index]?.time1 && (
                <p className="text-sm">{backs[index].time1}</p>
              )}

              {backs[index]?.title2 && (
                <h3 className="font-bold text-2xl">{backs[index].title2}</h3>
              )}
              {backs[index]?.subtitle2 && (
                <p className="text-md">{backs[index].subtitle2}</p>
              )}
              {backs[index]?.time2 && (
                <p className="text-sm">{backs[index].time2}</p>
              )}

              {backs[index]?.title3 && (
                <h3 className="font-bold text-2xl">{backs[index].title3}</h3>
              )}
              {backs[index]?.time3 && (
                <p className="text-sm">{backs[index].time3}</p>
              )}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Flipped;
