import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { changeImageExtension } from "@/utils";

interface IfDetail {
    name: string;
    value: string;
}

export default function FabricDetail(props: {
    id: string;
    name: string;
    title: string;
    description: string[];
    category: string;
    brand: string;
    brandFarsi: string;
    model: string;
    images: string[];
    detail: { name: string; value: string }[];
}) {
    const webp = changeImageExtension(props.images, "webp");
    return (
        <article className="flex justify-center flex-col md:mt-50 mt-8 text-lg my-shadow">
            <h1 className="py-4 flex flex-col w-full md:self-start md:leading-18 bg-blue-200 md:col-span-6 md:col-start-1 md:row-start-1 justify-center items-center gap-2 text-gray-800">
                <p className="font-bold text-2xl">{props.name}</p>
                <p className="text-2xl">
                    {props.brand} {props.title}
                </p>
            </h1>
            <div className="py-4 flex flex-col w-full md:self-start md:leading-18 bg-white md:col-span-6 md:col-start-1 md:row-start-1 justify-center items-center gap-2 text-gray-800">
                <div className="flex flex-col w-full justify-center">
                    <div className="relative m-4 flex justify-center overflow-hidden bg-white rounded-lg">
                        <Zoom>
                            <picture>
                                {/* WebP source for modern browsers */}
                                <source
                                    type="image/webp"
                                    srcSet={`/images/original-jpg/${webp}`}
                                    className="rounded-lg overflow-hidden w-[700px]"
                                />

                                {/* JPEG fallback */}
                                <img
                                    src={`/images/original-jpg/${props.images}`}
                                    alt={`${props.name} ${props.brand}`}
                                    loading="lazy"
                                    className="rounded-lg overflow-hidden w-[700px]"
                                />
                            </picture>
                        </Zoom>
                    </div>
                </div>
                <div className="w-full md:col-start-4 md:col-span-3 md:row-start-2 p-0 ">
                    <p
                        dangerouslySetInnerHTML={{ __html: props.description[0] }}
                        className="md:leading-12 leading-10 text-lg sm:text-2xl  text-gray-600 px-2"
                    />
                </div>
            </div>
            <div className="w-full text-center m-auto mt-12 bg-white p-10 rounded-lg">
                {props.detail.length ? (
                    <>
                        <div className="sm:text-3xl text-2xl text-gray-800 text-center py-5 md:py-10 ">
                            المواصفات
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-12 gap-8 grid-cols-1  content-center items-start mb-5">
                            {props.detail.map((d: IfDetail, index: number) => (
                                <div
                                    className="flex flex-col justify-start border-t-[1px] border-gray-300"
                                    key={index}
                                >
                                    <span className="font-bold text-black text-left my-2 text-lg sm:text-2xl">
                                        {d.name}
                                    </span>
                                    <span
                                        dangerouslySetInnerHTML={{ __html: d.value }}
                                        className="text-left text-gray-500 text-lg sm:text-2xl"
                                        dir="ltr"
                                    ></span>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </article>
    )
}
