"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Zoom from "react-medium-image-zoom";


interface Thumbs {
    images: { src: string, name: string }[] | undefined;
}

export default function ProductImageGallery({ images }: Thumbs) {
    const [image, setImage] = useState(images !== undefined ? images[0].src : '');
    const [imageName, setImageName] = useState(images !== undefined ? images[0].name : '');
    const [aosEffect, setAosEffect] = useState("fade-down");

    useEffect(() => {

        AOS.init();
        AOS.refresh();
    }, []);

    const onChangeImage = (imageName: string, name: string) => {
        // event.preventDefault();
        setAosEffect("zoom-out")
        if (name !== imageName) {

            setImageName(name);
            const element = document.querySelector('.aos-init');
            element?.classList.remove('aos-animate');
            setTimeout(() => {
                element?.classList.add('aos-animate');
                setImage(imageName);
            }, 150)
        }

    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center" >
                    <Zoom>
                        <img
                            src={`/images/original-jpg/${image}.jpg`}
                            alt={`${image}`}
                            loading="lazy"
                            className="rounded-lg overflow-hidden"
                            data-aos={aosEffect}
                        />
                    </Zoom>
                    <p className="md:text-3xl text-lg text-center p-2 my-4 border-1 border-gray-400 w-full flex items-center justify-center rounded-lg">{imageName}</p>
                </div>

                <div className="flex sm:gap-8 gap-4 flex-row-reverse">
                    {images?.map((img) => {
                        return (
                            <div key={img.src} className="flex flex-col items-center gap-4">
                                <img
                                    id={img.src}
                                    className="border border-gray-300 p-1 rounded-lg cursor-pointer"
                                    onClick={(e) => onChangeImage(img.src, img.name)}
                                    src={`/images/500px/tn_500px_${img.src}.jpg`}
                                    width={100}
                                    alt={img.name}
                                />
                                <p className="sm:text-xl text-sm">{img.name}</p>
                            </div>
                        )

                    }
                    )}

                </div >

            </div >
        </>
    )
}
