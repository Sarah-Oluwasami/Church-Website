import Carousel from "./Carousel";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="">
      <Carousel />
      <div className="bg-zinc-100 pb-6">
        <article className="w-[80%] md:max-xl:w-[95%] max-sm:w-[90%] m-auto sm:mb-16 lg:pt-24 flex max-lg:flex-col sm:space-x-10 max-sm:space-y-6 justify-items-center  items-center justify-around">
          <blockquote className="relative">
            <Image
              src="/images/church-men-single.jpeg"
              alt=""
              width={1920}
              height={1080}
              className=" max-sm:w-[20rem] w-[29rem] max-sm:h-[25rem] h-[35rem] object-cover shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] mt-20 md:max-lg:mt-40"
              objectFit="cover"
            />
            <p className="absolute bottom-16 lg:max-xl:bottom-20 left-1 sm:text-2xl text-white font-bold font-[Cambria] bg-[#2c2102] p-1 opacity-80 text-center ">
              Pastor of Holiness and Truth Tabernacle
            </p>
          </blockquote>

          <blockquote className="md:w-[40rem] ">
            <h1 className="text-4xl capitalize font-bold mb-3 font-[Cambria] text-zinc-800">
              Pastor Femi Adeyeye
            </h1>
            <article className="mb-6 text-zinc-700 border-l-4 border-[#d6c590] px-6 font-[Cambria] tracking-wide">
              God has to get a man away from the things of the world, so He can
              get him quiet, so he can listen to God, that still, small Voice.
              Then, once in contact with God, he becomes fearless then. Notice
              that he don’t care what anyone says; he’s been in the Presence of
              God. He knows God in the Power of His resurrection. And then,
              David, we see him. One day, God permitted a bear to come in and
              get one of his sheep. David just took after that bear. No doubt
              but what he prayed, because a little later on he confessed to it.
              And he prayed and asked God. He was caretaker over that sheep. He
              could not lose that sheep. And he must save that sheep, at all
              price. And he grabbed his little slingshot, and took after that
              bear and killed him. He must save that sheep. You see what God was
              training him for? God wants His shepherds to save the sheep,
              regardless what he has to be called and what he has to go through.
              Save them sheep!
              <article className="my-3 space-x-4">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="icon text-[#d6c590]"
                />
                <span className=""> God-Called Man ~ 58-1005E</span>{" "}
              </article>
            </article>
            <article className="mb-6 text-zinc-700 font-[Cambria] tracking-wide">
              A shepherd has to stray, to find the straying. And a good pastor
              is a shepherd. Frankly, the—the word pastor means “shepherd.” And
              sometimes, in the church, a—a little cult or a little clique will
              rise up in the church; one side will get one way, and one side the
              other way. A real, good shepherd will go with that clique, (What
              to do?) to bring them back. A real, true shepherd, what’s he
              doing? He’ll stray, himself, (What to do?) to bring back the lost.
              What’s he doing? He’s reflecting the image of the good Shepherd,
              trying to win that soul back . Yet, they got off in some place,
              brother, like they was going to tear the world up, overnight. That
              pastor will go right along, in order to get them right, win them
              right back this way again. That’s a good shepherd. He’s reflecting
              the image of Jesus.
              <article className="my-3 space-x-4">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="icon text-[#d6c590]"
                />
                <span className=""> Images Of Christ ~ 59-0525</span>{" "}
              </article>
              <span className="text-[#d6c590] font-bold tracking-tight ">
                William Marrion Branham
              </span>
            </article>
          </blockquote>
        </article>

        <article className="w-[80%] md:max-xl:w-[95%] max-sm:w-[90%] m-auto flex max-lg:flex-col sm:space-x-10 max-sm:space-y-6 justify-items-center  items-center justify-around">
          <blockquote className="relative ">
            <Image
              src="/images/church-men-single.jpeg"
              alt=""
              width={1920}
              height={1080}
              className=" max-sm:w-[20rem] w-[29rem] max-sm:h-[25rem] h-[35rem] object-cover shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] mt-20 md:max-lg:mt-40"
            />
            <p className="absolute bottom-16 lg:max-xl:bottom-20 left-1 sm:text-2xl max-sm:text-md text-white font-bold font-[Cambria] bg-[#2c2102] p-1 opacity-80 text-center">
              Associate Pastor of Holiness and Truth Tabernacle
            </p>
          </blockquote>

          <blockquote className="md:w-[40rem]">
            <h1 className="text-4xl capitalize font-bold mb-3 font-[Cambria] text-zinc-800">
              Apostle Kehinde Oluwasami
            </h1>
            <article className="mb-6 text-zinc-700 border-l-4 border-[#d6c590] px-6 font-[Cambria] tracking-wide">
              Not for one moment do I bring a message to the people that they
              may follow me, or join my church, or start some fellowship and
              organization. I have never done that and will not do that now. I
              have no interest in those things, but I do have an interest in the
              things of God and people, and if I can accomplish just one thing I
              will be satisfied. That one thing is to see established a true
              spiritual relationship between God and men, wherein men become new
              creations in Christ, filled with His Spirit and live according to
              His Word. I would invite, plead and warn all to hear His voice at
              this time, and yield your lives completely to Him, even as I trust
              in my heart that I have given my all to Him. God bless you, and
              may His coming rejoice your heart.
              <blockquote className="my-4 space-x-4">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="icon text-[#d6c590]"
                />
                <span className="">
                  {" "}
                  An Exposition Of The Seven Church Ages (10 - A Resume Of The
                  Ages)
                </span>{" "}
              </blockquote>
            </article>
            <article className="mb-6 text-zinc-700 font-[Cambria] tracking-wide">
              And, now, I’m not no theologian, not a Bible student by no means,
              just an illiterate person that loves the Lord Jesus with all my
              heart. I do not claim to be a theologian or try to take one’s
              place, but just try in the humbleness of my heart to explain those
              things that I feel that the Holy Spirit has revealed to me, and I
              must give to my church. For it’s to my interest that this church
              grows, that this church is spiritually right. It’s to my interest
              because this church is God’s interest, and His interest is my
              interest. So I must see to this.
              <blockquote className="my-4 space-x-4">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="icon text-[#d6c590]"
                />
                <span className="">
                  {" "}
                  61-1217 - Christianity Versus Idolatry.
                </span>{" "}
              </blockquote>
              <span className="text-[#d6c590] font-bold tracking-tight">
                William Marrion Branham
              </span>
            </article>
          </blockquote>
        </article>
      </div>
    </div>
  );
}

export default Home;
