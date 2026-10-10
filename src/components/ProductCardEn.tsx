import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { changeImageExtension } from "@/utils";

interface IfDetail {
    name: string;
    value: string;
}

export default function ProductCardEn(props: {
    id: string;
    name: string;
    title: string;
    description: string[];
    brand: string;
    brandFarsi: string;
    model: string;
    images: string[];
    category: string;
    detail: { name: string; value: string }[];
}) {
    // let webp: string | string[];
    const webp = changeImageExtension(props.images, "webp");

    return (
        <article className={`relative flex justify-center flex-col md:mt-70 mt-15 text-lg]`}>
            <h1 className="absolute -top-14 left-1/2 -translate-x-1/2 py-6 z-10 text-center sm:w-3/4 w-full h-auto flex flex-col leading-12 items-center justify-center bg-blue-200 rounded-lg sm:text-3xl text-2xl text-gray-800 inter-font">
                <p className="font-bold sm:text-3xl text-2xl mb-4 inter-font text-gray-800">{props.name}</p>
                <p className="sm:text-3xl text-2xl inter-font text-gray-800">
                    {props.brand} {props.title}
                </p>
                <p className="text-lg text-center text-gray-600 pb-4 w-full inter-font">
                    {props.category}
                </p>

            </h1>
            <div className="flex gap-8 p-2 sm:p-8 bg-white flex-col lg:flex-row overflow-hidden my-shadow rounded-lg">
                <div className="flex flex-col w-full justify-center">
                    <div className="image-wrapper md:h-[500px] h-[300px] self-start overflow-hidden bg-white rounded-lg mt-20">
                        <Zoom>
                            <picture>
                                {/* WebP source for modern browsers */}
                                <source
                                    type="image/webp"
                                    srcSet={`/images/original-jpg/${webp[0]}`}
                                    className="rounded-lg overflow-hidden"
                                />

                                {/* JPEG fallback */}
                                <img
                                    src={`/images/original-jpg/${props.images[0]}`}
                                    alt={`${props.name} ${props.brandFarsi} ${props.brand} ${props.model}`}
                                    loading="lazy"
                                    className="rounded-lg overflow-hidden"
                                />
                            </picture>
                        </Zoom>
                    </div>
                    <div className="w-full md:col-start-4 p-14 md:col-span-3 md:row-start-2 inter-font">
                        <p
                            dangerouslySetInnerHTML={{ __html: props.description[0] }}
                            className="md:leading-14 leading-10 text-lg sm:text-2xl  text-gray-600 px-2 inter-font text-left" dir="ltr"
                        />
                    </div>
                </div>
            </div>


            {props.detail.length ? (
                <div className="w-full text-center m-auto mt-20  p-10 rounded-lg my-shadow relative bg-white">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 py-4 text-center sm:w-3/4 w-full h-auto flex items-center justify-center bg-blue-200 rounded-lg sm:text-3xl text-2xl text-gray-800  inter-font">
                        Specification
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-12 gap-8 grid-cols-1 mt-12 content-center items-start">
                        {props.detail.map((d: IfDetail, index: number) => (
                            <div
                                className="flex flex-col justify-start border-b-[1px] border-gray-300"
                                key={index}
                            >
                                <span
                                    dangerouslySetInnerHTML={{ __html: d.name }}

                                    className="font-bold text-gray-700 text-left my-2 text-lg sm:text-2xl inter-font">
                                </span>
                                <span
                                    dangerouslySetInnerHTML={{ __html: d.value }}
                                    className="text-left text-gray-500 text-lg sm:text-2xl inter-font"
                                    dir="ltr"
                                ></span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </article>
    )
}
