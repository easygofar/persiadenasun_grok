"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, ExternalLink } from "lucide-react";
import { PiCaretUpFill } from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";
import "../../node_modules/flag-icons/css/flag-icons.min.css";


export default function PersianMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const route = useRouter();

    const gotoProductsPage = () => {
        route.push("/products")
        closeMobileMenu()
    }
    const closeMobileMenu = () => {
        setIsOpen(false);
        setDropdownContactOpen(false);
        setDropdownProductOpen(false);
    }
    const [isDropdownProductOpen, setDropdownProductOpen] =
        useState<boolean>(false);

    const [isDropdownContactOpen, setDropdownContactOpen] =
        useState<boolean>(false);

    const toggleProductDropdown = () => {
        setDropdownProductOpen(!isDropdownProductOpen);
        setDropdownContactOpen(false);
    };
    const toggleContactDropdown = () => {
        setDropdownContactOpen(!isDropdownContactOpen);
        setDropdownProductOpen(false);
    };

    const MenuLink = (props: { href: string; children: React.ReactNode }) => (
        <Link
            href={props.href}
            onClick={() => closeMobileMenu()}
            className="  text-gray-600 border-b border-gray-300 pb-2 block w-2/3 text-lg"
        >
            <span className="text-gray-500">{props.children}</span>
        </Link>
    );

    const MenuAnchor = (props: { href: string; children: React.ReactNode }) => (
        <a
            href={props.href}
            onClick={() => closeMobileMenu()}
            className="  text-gray-600  pb-2 block w-2/3"
        >
            <span className="text-gray-500">{props.children}</span>
        </a>
    );
    return (
        <>
            {/* Desktop Menu */}
            <nav className="hidden fixed z-99 md:flex my-0 left-0 h-[101px] my-shadow w-full m-auto justify-around items-center text-white text-xl bg-gray-900">
                <ul className="flex flex-row gap-2 items-center">
                    <li>
                        <Link
                            href="/"
                            className="px-2 mx-4 py-4 main-menu-item hover:text-orange-500"
                        >
                            خانه
                        </Link>
                    </li>
                    <li className="group relative p-0 m-0 item-menu-hover">
                        <div className="flex flex-row items-center justify-center">
                            <Link href="/products" className="px-2 mx-4 py-10 main-menu-item flex cursor-pointer items-center">
                                محصولات &nbsp;
                                <span className="fill-gray-900">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </Link>
                        </div>
                        <ul className="absolute flex flex-col gap-5 text-gray-900  -right-1/2  top-23 invisible group-hover:top-24 duration-150 ease-linear min-w-[200px] z-20 bg-white border border-gray-300 hover:border-gray-400 p-4 ">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-5">
                                <PiCaretUpFill fill="white" size={20} />
                            </span>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="/products/oshima">اوشیما Oshima</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="/products/ricoma">ریکوما Ricoma</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="/products/siruba">سیروبا Siruba</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="/products/orox">اوروکس Orox</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="/products/arshid">پارچه Fabric</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="/products/video">ویدیو محصولات</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className="px-2 mx-4 py-8 main-menu-item hover:text-orange-500"
                        >
                            درباره ما
                        </Link>
                    </li>
                    <li className="group relative p-0 m-0 item-menu-hover">
                        <div className="flex flex-row items-center justify-center">
                            {/* <Link href="/products" className="px-6 py-8 main-menu-item"> */}
                            <span className="px-2 mx-4 py-10 main-menu-item flex cursor-pointer items-center">
                                ارتباط با ما &nbsp;
                                <span className="fill-gray-900">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </span>
                        </div>
                        <ul className="absolute flex flex-col gap-5 text-gray-900  -right-1/2 top-23 invisible group-hover:top-24 transition-all duration-150 ease-linear min-w-[200px] z-20 bg-white border border-gray-300 hover:border-gray-400 p-4">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-5">
                                <PiCaretUpFill fill="white" size={20} />
                            </span>

                            <li className="border-b pb-2 text-center hover:text-blue-400 border-gray-300">
                                <Link href="mailto:persiandenasun.com@gmail.com">ایمیل</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="https://wa.me/989101818197">واتساپ</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="https://t.me/PersiaDenasun1">تلگرام</Link>
                            </li>
                            <li className="border-b pb-2 text-center hover:text-blue-700 border-gray-300">
                                <Link href="http://instagram.com/_u/persiandenasun/">
                                    اینستاگرام
                                </Link>
                            </li>
                            <li className="pb-0 text-center hover:text-blue-700">
                                <Link href="/contact-us">فرم تماس</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="group relative p-0 m-0 item-menu-hover">
                        <div className="flex flex-row items-center justify-center">
                            <span className="px-2 mx-4 py-10 main-menu-item flex cursor-pointer items-center">
                                <Globe className="w-7 h-7 text-white" />
                                &nbsp;
                                <span className="fill-gray-900">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </span>
                        </div>
                        <ul className="absolute flex flex-col gap-5 text-gray-900 invisible  -right-1/2 top-23 group-hover:top-24 transition-all duration-150 ease-linear min-w-[150px] z-20 bg-white border border-gray-300 hover:border-gray-400 p-4">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-5">
                                <PiCaretUpFill fill="white" size={20} />
                            </span>
                            <li className="border-b pb-2 hover:text-blue-400 border-gray-300">
                                <Link href="/" className="flex items-center justify-center gap-2">
                                    <span>فارسی</span><span className="fi fi-ir"></span>
                                </Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-400 border-gray-300">
                                <Link href="https://persiadenasun.com" className="flex items-center justify-center gap-2">
                                    <span>English</span><span className="fi fi-gb"></span>
                                </Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="https://persiadenasun.com/ar" className="flex items-center justify-center gap-2">
                                    <span>العربية</span><span className="fi fi-sa"></span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="inline-flex items-center">
                    <span className="mx-2 font-bold text-2xl">شرکت پرشیا دنا سان</span>
                    <Link href="/">
                        <Image
                            src="/icons/persiadenasun-logo-180x180.png"
                            alt="Persia Dena Sun Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </nav>

            <nav className="md:hidden p-2 px-6 text-white bg-gray-900">
                {/* Mobile Hamburger */}
                <div className="flex justify-between items-center">
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="mx-2 font-bold text-white">شرکت پرشیا دنا سان</span>
                    <div className="inline-flex items-center">
                        <Link href="/">
                            <Image
                                src="/icons/persiadenasun-logo-180x180.png"
                                alt="Persia Dena Sun Logo"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>

                {/* Mobile Slide-in Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white my-shadow z-50 p-4 md:hidden rounded-l-lg"
                        >
                            <div className="flex items-center justify-between mb-6 p-3 bg-black">
                                <div className="w-full flex items-center justify-between">
                                    <span className="text-xl font-bold text-white">
                                        پرشیا دنا سان
                                    </span>
                                    <button
                                        onClick={() => closeMobileMenu()}
                                        aria-label="Close Menu"
                                        className="bg-black rounded overflow-hidden"
                                    >
                                        <X className="w-9 h-9 fill-white text-white rounded p-1" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-6">
                                <div>
                                    <span className="py-1">
                                        <Link
                                            href="/"
                                            onClick={() => closeMobileMenu()}
                                            className="text-gray-800 w-full"
                                        >
                                            <span className="text-2xl">خانه</span>
                                        </Link>
                                    </span>
                                </div>

                                <div>
                                    <span className="py-1 flex items-center justify-start w-full">
                                        <button
                                            onClick={() => toggleProductDropdown()}
                                            className="text-gray-800 text-right"
                                        >
                                            محصولات&nbsp;
                                        </button>
                                        <span>
                                            {isDropdownProductOpen ?
                                                <button onClick={() => gotoProductsPage()}> <ExternalLink className="w-6 h-6 text-blue-400 rotate-225" /></button>
                                                : <ChevronDown className="w-4 h-4 text-black" />}
                                        </span>
                                    </span>
                                    {isDropdownProductOpen && (
                                        <ul className="mx-4 mt-2 space-y-4 flex flex-col p-2">
                                            <li>
                                                <MenuLink href="/products/oshima/">اوشیما</MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="/products/ricoma/">ریکوما</MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="/products/siruba/">سیروبا</MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="/products/orox/">اوروکس</MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="/products/arshid/">پارچه</MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="/products/video/">ویدیوی محصولات</MenuLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                <div>
                                    <span className="py-1">
                                        <MenuAnchor href="/about-us/">
                                            <span className="text-2xl text-gray-800">
                                                درباره ما
                                            </span>
                                        </MenuAnchor>
                                    </span>
                                </div>

                                <div>
                                    <span className="py-1">
                                        <button
                                            onClick={() => toggleContactDropdown()}
                                            className="text-gray-800 transition w-full flex justify-start items-center"
                                        >
                                            <span className="text-2xl">ارتباط با ما</span>&nbsp;
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </span>
                                    {isDropdownContactOpen && (
                                        <ul className="mx-4 mt-2 space-y-4 flex flex-col p-2">
                                            <li>
                                                <MenuLink href="mailto:persiandenasun.com@gmail.com">
                                                    ایمیل
                                                </MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="https://wa.me/989101818197p">
                                                    واتساپ
                                                </MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="https://t.me/PersiaDenasun1">
                                                    تلگرام
                                                </MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="http://instagram.com/_u/persiandenasun/">
                                                    اینستاگرام
                                                </MenuLink>
                                            </li>
                                            <li>
                                                <MenuLink href="/contact-us/">فرم تماس</MenuLink>
                                            </li>
                                        </ul>
                                    )}
                                    <ul className="flex mt-6 space-x-5">
                                        <li className="p-2">
                                            <Link href="/"><span className="fi fi-ir"></span>
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link href="https://persiadenasun.com/">
                                                <span className="fi fi-gb"></span>
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link href="https://persiadenasun.com/ar">
                                                <span className="fi fi-sa"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
