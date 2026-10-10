import Image from "next/image";
import { ReactNode } from "react";

export default function Hero(props: {
  backgroundImg: string;
  title: string;
  heroImg: string;
  flag: string;
  brand: string;
  children: ReactNode;
}) {
  return (
    <div className="relative group flex h-full justify-between items-center flex-col overflow-hidden rounded-2xl p-4  my-shadow">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-t from-sky-900 to-sky-300">
        <Image
          src={`/images/${props.heroImg}`}
          width={230}
          height={230}
          alt={`${props.title}`}
          className="white-shadow group-hover:scale-[1.05] transition ease-in-out duration-300"
        />
      </div>
      <div className="content-center w-full flex flex-col justify-between grow border-0 place-items-center ">
        <p className="p-2">{props.brand}</p>
        <h2 className="w-full text-[#222222] leading-10 drop-shadow-lg text-center ">
          {props.title}
        </h2>
        {/* <p className="gap-2 items-center right-0 inline-flex">
   {props.children} <span className="text-yellow-100">{props.flag}</span>
  </p> */}
      </div>
    </div>
  );
}
