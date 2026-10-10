import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <>
            <section className="w-full p-20 bg-amber-600">
                <h2 className="text-center drop-shadow-xl text-white sm:text-5xl text-4xl sm:leading-25 leading-13 ">
                    ۵۰ سال اعتماد ، تکنولوژی و توسعه در صنعت پوشاک
                    <p className="text-center text-white text-lg sm:text-3xl py-5">
                        با بهترین تکنولوژی و تیم متخصص همراه شما هستیم.
                    </p>
                </h2>
            </section>
            <section className="w-full grid md:gap-4 gap-y-10 grid-cols-2 md:grid-cols-3 text-white p-8">
                <div className="col-span-2 md:col-span-1">
                    <div className="">
                        <Image
                            src="/icons/persiadenasun-logo-180x180.png"
                            width={100}
                            height={100}
                            alt="Persia Dena Sun Logo"
                        />
                    </div>
                    <div>
                        <address className="leading-10 text-lg">
                            <div className="flex items-center gap-2">
                                <IoLocationOutline />
                                <p>تهران - خیابان جمهوری - نرسیده به جمالزاده - پلاک 1358</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiPhone />
                                <p>تلفن: 63414-021</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaWhatsapp />
                                <Link href="https://wa.me/989101818197">
                                    واتساپ: 989101818197
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiTelegram2Line />
                                <Link href="https://t.me/PersiaDenasun1">
                                    تلگرام: PersiaDenasun1
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaInstagram />
                                <Link href="http://instagram.com/_u/persiandenasun/">
                                    اینستاگرام
                                </Link>
                            </div>
                        </address>
                    </div>
                </div>
                <div className="col-span-1 md:content-start text-center border-r border-r-[#222] pr-4">
                    <div className="leading-12 text-lg">
                        <p className="mb-2 text-yellow-300">محصولات</p>
                        <p>
                            <Link href="/products/oshima">اوشیما</Link>
                        </p>
                        <p>
                            <Link href="/products/ricoma">ریکوما</Link>
                        </p>
                        <p>
                            <Link href="/products/siruba">سیروبا</Link>
                        </p>
                        <p>
                            <Link href="/products/arshid">پارچه</Link>
                        </p>
                    </div>
                </div>
                <div className="col-span-1 md:content-start text-center border-r border-r-[#222] pr-4">
                    <div className="leading-12 text-lg">
                        <p className="mb-2 text-yellow-300">لینک ها</p>
                        <p>
                            <Link href="/">خانه</Link>
                        </p>
                        <p>
                            <Link href="/about-us">درباره ما</Link>
                        </p>
                        <p>
                            <Link href="/contact-us">ارتباط با ما</Link>
                        </p>
                    </div>
                </div>
            </section>
            <p className="w-full text-center text-white text-lg" dir="ltr">
                &#169; 2026 Persia Dena Sun PLC.
            </p>
        </>
    );
}
