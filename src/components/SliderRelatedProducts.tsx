"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Product } from "@/utils/types";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderRelatedProducts(props: { products: Product[] }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        enabled: true,
      }}
      // navigation={true}
      // effect="fade"
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    //   height={300}
    >
      {props.products.map((rp: Product, index: number) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center border-[1px] border-gray-300 rounded-2xl overflow-hidden">
            <Image
              src={`/images/original-jpg/${rp.images}`}
              width={100}
              height={100}
              objectFit="cover"
              alt={rp.name}
            />
            <p className="text-sm font-bold text-gray-500">{rp.name}</p>
            <p className="text-sm text-gray-500">{rp.title}</p>
            <p className="text-sm text-gray-500">{rp.brandFarsi}</p>
            <p></p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
