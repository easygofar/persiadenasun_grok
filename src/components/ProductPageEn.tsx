import { products } from "@/data/indexEn";
import SubMenuEn from "./SubMenuEn";
import CardEn from "./CardEn";

import { ProductEn } from "@/utils/types";

export default function ProductPageEn(props: { brand: string, header: string, description: string, menuNumber: string }) {
    return <>
        <section className="md:w-full flex flex-col md:mt-33 ">
            <div className="w-[80%] md:w-full m-auto">
                <SubMenuEn item={props.menuNumber} />
            </div>

            <h1 className="w-full text-center  md:text-3xl sm:text-2xl font-bold md:p-12 p-6 leading-10 inter-font" dir="ltr">{props.header}</h1>
            <p className="md:leading-12 leading-10 text-xl text-left sm:text-2xl mb-12 text-gray-800 w-full inter-font" dir="ltr">
                {props.description}
            </p>
            <section className="grid lg:grid-cols-[repeat(5,_1fr)] sm:grid-cols-3 grid-cols-1 sm:gap-12 gap-8 p-4 mt-12 items-end h-full mx-12 sm:m-0">
                {products
                    .filter((p: ProductEn) => p.brand.toLocaleLowerCase() === props.brand.toLocaleLowerCase())
                    .map((p, index) => {
                        return (
                            <CardEn
                                title={p.title}
                                image={p.images}
                                name={p.name}
                                brand={p.brand}
                                category={p.category}
                                id={p.id}
                                key={index}
                            />
                        );
                    })}
            </section>
        </section>
    </>
}