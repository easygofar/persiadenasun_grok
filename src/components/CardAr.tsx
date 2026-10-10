import Link from "next/link";
import { changeImageExtension } from "@/utils";

export default function CardEn(props: {
    title: string;
    name: string;
    image: string[];
    id: string;
    category: string;
    brand: string;
}) {
    const webp = changeImageExtension(props.image[0], "webp");

    return (
        <Link
            href={`/ar/products/${props.brand.toLowerCase()}/${props.id}`}
            className=""
        >
            <article className="group overflow-hidden flex flex-col justify-center p-4 bg-white my-shadow md:rounded-2xl rounded-xl w-full h-[300px]">
                <div className="relative w-full h-full flex items-end justify-between rounded overflow-hidden">

                    <picture>
                        {/* WebP source for modern browsers */}
                        <source
                            type="image/webp"
                            srcSet={`/images/500px/tn_500px_${webp}`}
                            className="group-hover:scale-[1.05] duration-200 transition-all ease-in-out"
                        />

                        {/* JPEG fallback */}
                        <img
                            src={`/images/500px/tn_500px_${props.image}`}
                            alt={props.name}
                            loading="lazy"
                            className="group-hover:scale-[1.05] duration-200 transition-all ease-in-out"
                        />
                    </picture>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <hr className="border-gray-300 w-full my-3 self-end" />
                    <span className="bg-blue-100 w-full rounded-lg px-1">
                        <p className="text-lg my-2 text-gray-800 text-center w-full" dir="ltr">
                            {props.title}
                        </p>
                        <h2 className="text-xl text-center font-bold text-gray-800 pb-4 w-full" dir="ltr">
                            {props.name}
                        </h2>
                    </span>
                </div>
            </article>
        </Link>
    );
}
