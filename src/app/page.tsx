import Card from "@/components/card";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-roboto p-3">
      <div className="flex justify-end mb-3 md:p-7">
        <IconX stroke={1} className="md:size-10" />
      </div>

      <div className="md:px-44 mb-20 md:mb-32">
        <div className="flex flex-col items-center gap-5 md:gap-10">
          <p className="text-2xl sm:text-4xl font-[100] text-center w-11/12">
            Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
          </p>
          <Image
            src={"/images/hero-fortnite.webp"}
            alt="Epic Games Fortnite game image"
            width={1080}
            height={768}
          />
          <p className="font-poppins text-center md:w-10/12 text-sm">
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that&apos;s right for you and your friends. Find it all in Fortnite ... Drop In.
          </p>
          <button className="bg-white text-black font-poppins p-3 px-14 md:px-28 hover:bg-black border-white border-2 hover:text-white">
            Visit Website
          </button>
        </div>
      </div>

      <div className="md:px-80 grid md:grid-cols-3 grid-cols-1 gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
