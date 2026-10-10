"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


interface MainProductProps {
    webpImage: string,
    jpgImage: string,
    brandFarsi: string
    brand: string,
    model: string,
}
export default function MainProductSingleImage(props: MainProductProps) {

    useEffect(() => {

        AOS.init();
        AOS.refresh();
    }, []);

    return <>
        <picture>
            <source
                type="image/webp"
                srcSet={`/images/original-jpg/${props.webpImage}`}
                className="rounded-lg overflow-hidden"
                data-aos="fade-down"
            />

            <img
                src={`/images/original-jpg/${props.jpgImage}`}
                alt={`${props.webpImage} ${props.brandFarsi} ${props.brand} ${props.model}`}
                loading="lazy"
                className="rounded-lg overflow-hidden"
                data-aos="fade-down"
            />
        </picture>

    </>
}