import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <>
            <section className="w-full p-20 bg-amber-600 inter-font" dir="ltr">
                <h2 className="text-center drop-shadow-xl text-white sm:text-5xl text-4xl sm:leading-25 leading-13 inter-font">
                    ٥٠ عامًا من الثقة والتكنولوجيا والتطور
                    <p className="text-center text-white text-lg sm:text-3xl py-5">
                        نحن معك، مدعومون بأفضل التقنيات وفريق من الخبراء
                    </p>
                </h2>
            </section>
            <section className="w-full grid md:gap-4 gap-y-10 grid-cols-2 md:grid-cols-3 reverse text-white p-8 items-start inter-font">
                <div className="col-span-2 md:col-span-1 order-3 flex justify-center gap-8">
                    <div className="order-1">
                        <Image
                            src="/icons/persiadenasun-logo-180x180.png"
                            width={100}
                            height={100}
                            alt="Persia Dena Sun Logo"
                        />
                    </div>
                    <div>
                        <address className="leading-10 text-lg" >
                            <div className="flex items-center text-left gap-2 flex-row-reverse">
                                <IoLocationOutline />
                                {/* <p>تهران - خیابان جمهوری - نرسیده به جمالزاده - پلاک 1358</p> */}
                                <p>No. 1358, Johouri St., Tehran</p>
                            </div>
                            <div className="flex items-center text-left gap-2 flex-row-reverse">
                                <FiPhone />
                                <p dir="ltr">Phone: 021-63414</p>
                            </div>
                            <div className="flex items-center text-left gap-2 flex-row-reverse">
                                <FaWhatsapp />
                                <Link href="https://wa.me/989101818197">
                                    Whatsapp: 989101818197
                                </Link>
                            </div>
                            <div className="flex items-center text-left gap-2 flex-row-reverse">
                                <RiTelegram2Line />
                                <Link href="https://t.me/PersiaDenasun1">
                                    Telegram: PersiaDenasun1
                                </Link>
                            </div>
                            <div className="flex items-center text-left gap-2 flex-row-reverse">
                                <FaInstagram />
                                <Link href="http://instagram.com/_u/persiandenasun/">
                                    Instagram
                                </Link>
                            </div>
                        </address>
                    </div>
                </div>
                <div className="col-span-1 md:content-start text-center border-r border-r-[#222] pr-4 order-2 flex justify-center inter-font">
                    <div className="leading-12 text-lg">
                        <p className="mb-2 text-yellow-300">Products</p>
                        <p>
                            <Link href="/ar/products/oshima">Oshima</Link>
                        </p>
                        <p>
                            <Link href="/ar/products/ricoma">Ricoma</Link>
                        </p>
                        <p>
                            <Link href="/ar/products/siruba">Siruba</Link>
                        </p>
                        <p>
                            <Link href="/ar/products/arshid">Fabric</Link>
                        </p>
                    </div>
                </div>
                <div className="col-span-1 md:content-start text-center border-r border-r-[#222] pr-4 flex justify-center">
                    <div className="leading-12 text-lg inter-font">
                        <p className="mb-2 text-yellow-300">Links</p>
                        <p>
                            <Link href="/ar">Home</Link>
                        </p>
                        <p>
                            <Link href="/ar/about-us">About Us</Link>
                        </p>
                        <p>
                            <Link href="/ar/contact-us">Contact Us</Link>
                        </p>
                    </div>
                </div>
            </section>
            <p className="w-full text-center text-white text-lg inter-font" dir="ltr">
                &#169; 2026 Persia Dena Sun PLC.
            </p>
        </>
    );
}
