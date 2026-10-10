import { ReactNode } from "react";

export default function HeroAr(props: {
    backgroundImg: string;
    title: string;
    heroImg: string;
    flag: string;
    brand: string;
    name: string;
    children: ReactNode;
}) {
    return (
        <article className="relative group flex h-full justify-between items-center flex-col overflow-hidden rounded-2xl p-10 my-shadow inter-font">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-t from-sky-900 to-sky-300">
                <img
                    src={`/images/${props.heroImg}`}
                    width="300px"
                    height="230px"
                    alt={`${props.name}`}
                    className="white-shadow block group-hover:scale-[1.05] transition ease-in-out duration-300"
                />
            </div>
            <div className="content-center w-full flex flex-col justify-between grow border-0 place-items-center">
                <p className="p-2 inter-font">{props.brand}</p>
                <h2 className="w-full text-[#222222] leading-10 drop-shadow-lg text-center inter-font" dir="ltr">
                    {props.title}
                </h2>
            </div>
        </article>
    );
}
