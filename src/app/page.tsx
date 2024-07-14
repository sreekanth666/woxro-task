import Card from "@/components/card";
import StaticCard from "@/components/staticCard";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  const cardData = [
    {
      image: "/images/card/screenshot-1.webp",
      alt: "Fortnite game image",
      description: "Explore large, destructible environments where no two games are ever the same."
    },
    {
      image: "/images/card/screenshot-2.webp",
      alt: "Fortnite game image",
      description: "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale"
    },
    {
      image: "/images/card/screenshot-3.webp",
      alt: "Fortnite game image",
      description: "Discover even more ways to play across thousands of creator-made game genres"
    }
  ]

  const staticCardData = [
    {
      title: "5M",
      description: "Daily User Engagements"
    },
    {
      title: "$500K",
      description: "Revenue Surge for an Platform"
    },
    {
      title: "10X",
      description: "ROAS on all our marketing campaigns"
    }
  ]
  return (
    <main className="font-roboto p-3">
      <div className="flex justify-end mb-3 md:p-7">
        <IconX stroke={1} className=" md:size-10" />
      </div>

      <div className="sm:px-9 md:px-14 lg:px-28 xl:px-44 mb-20 md:mb-32">
        <div className="flex flex-col items-center gap-5 md:gap-10">
          <p className="text-3xl md:text-4xl font-[100] text-center w-11/12">
            Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
          </p>
          <Image
            src={"/images/hero-fortnite.webp"}
            alt="Epic Games Fortnite game image"
            width={1080}
            height={768}
          />
          <p className="font-poppins text-center md:w-10/12 text-sm font-light">
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that&apos;s right for you and your friends. Find it all in Fortnite ... Drop In.
          </p>
          <button className="bg-white text-black font-poppins p-3 px-14 md:px-28 hover:bg-black border-white border-2 hover:text-white">
            Visit Website
          </button>
        </div>
      </div>

      <div className="sm:px-11 md:px-24 lg:px-36 xl:px-80 mb-20 md:mb-32">
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 gap-10 scroll-smooth">
          {
            cardData.map((card, index) => (
              <div key={index} className="flex-none w-72 lg:w-auto">
                <Card key={index} image={card.image} alt={card.alt} description={card.description} />
              </div>
            ))
          }
        </div>
      </div>

      <div className="sm:px-14 md:px-32 lg:px-52 xl:px-80 text-center mb-20 md:mb-32">
        <p className="font-roboto font-extralight text-2xl sm:text-3xl">Our Contribution</p>
        <p className="font-poppins text-center text-sm mt-4 font-light">
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {
            staticCardData.map((card, index) => (
              <StaticCard key={index} title={card.title} description={card.description} />
            ))
          }
        </div>
      </div>

      <div className="sm:px-14 md:px-32 lg:px-52 xl:px-80 text-center mb-20 md:mb-32 flex flex-col items-center">
        <p className="font-roboto font-light text-2xl sm:text-3xl md:text-4xl">Interested in Delving Deeper into the Project?</p>
        <p className="text-center text-lg md:text-xl mt-6 md:mt-10 font-light w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 leading-tight">
          If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className="font-medium">hello@abc.com</span> or give us a call at <span className="font-medium">+91 480 20802730</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mt-10 md:mt-16">
          <button className="font-poppins p-3 w-full border-white border-2 text-white">
            Ring us on Skype
          </button>
          <button className="bg-white text-black font-poppins p-3 w-full hover:bg-black border-white border-2 hover:text-white">
            Contact Us
          </button>
        </div>
      </div>

      <div className="sm:px-14 md:px-32 lg:px-52 xl:px-80 font-extralight text-sm md:text-base  text-center mb-5 md:mb-10 mt-36 md:mt-56 flex flex-col items-center">
        <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
      </div>
    </main>
  );
}
