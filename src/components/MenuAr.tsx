"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, ExternalLink } from "lucide-react";
import { PiCaretUpFill } from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";
import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default function ArabicMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const route = useRouter();

    const gotoProductsPage = () => {
        route.push("/ar/products");
        closeMobileMenu();
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
        setDropdownContactOpen(false);
        setDropdownProductOpen(false);
    };

    const [isDropdownProductOpen, setDropdownProductOpen] = useState<boolean>(false);
    const [isDropdownContactOpen, setDropdownContactOpen] = useState<boolean>(false);

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
            className="text-gray-600 border-b border-gray-300 pb-2 block w-2/3 text-lg text-right"
        >
            <span className="text-gray-500">{props.children}</span>
        </Link>
    );

    const MenuAnchor = (props: { href: string; children: React.ReactNode }) => (
        <a
            href={props.href}
            onClick={() => closeMobileMenu()}
            className="text-gray-600 pb-2 block w-2/3 text-right"
        >
            <span className="text-gray-500">{props.children}</span>
        </a>
    );

    return (
        <>
            {/* Desktop Menu */}
            <nav
                className="hidden fixed z-99 md:flex my-0 left-0 h-[101px] my-shadow w-full m-auto justify-around items-center text-white text-xl bg-gray-900"
                dir="ltr"
            >
                <div className="inline-flex items-center">
                    <span className="mx-2 font-bold text-2xl">شركة برشيا دِنا سان</span>
                    <Link href="/ar">
                        <Image
                            src="/icons/persiadenasun-logo-180x180.png"
                            alt="شعار شركة برشيا دِنا سان"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>

                <ul className="flex flex-row-reverse gap-2 items-center">
                    <li>
                        <Link
                            href="/ar"
                            className="px-2 mx-4 py-4 main-menu-item hover:text-orange-500"
                        >
                            الرئيسية
                        </Link>
                    </li>
                    <li className="group relative p-0 m-0 item-menu-hover">
                        <div className="flex flex-row items-center justify-center">
                            <Link
                                href="/ar/products"
                                className="px-2 mx-4 py-10 main-menu-item flex cursor-pointer items-center"
                            >
                                المنتجات &nbsp;
                                <span className="fill-gray-900">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </Link>
                        </div>
                        <ul className="absolute flex flex-col gap-5 text-gray-900 -right-1/2 top-23 invisible group-hover:top-24 duration-150 ease-linear min-w-[200px] z-20 bg-white border border-gray-300 hover:border-gray-400 p-4 text-center">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-5">
                                <PiCaretUpFill fill="white" size={20} />
                            </span>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="/ar/products/oshima">أوشيما Oshima</Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="/ar/products/ricoma">ريكوما Ricoma</Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="/ar/products/siruba">سيروبا Siruba</Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="/ar/products/orox">أوروكس Orox</Link>
                            </li>
                            <li className="pb-0 hover:text-blue-700">
                                <Link href="/ar/products/arshid">الأقمشة Fabrics</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link
                            href="/ar/about-us"
                            className="px-2 mx-4 py-8 main-menu-item hover:text-orange-500"
                        >
                            من نحن
                        </Link>
                    </li>

                    <li className="group relative p-0 m-0 item-menu-hover">
                        <div className="flex flex-row items-center justify-center">
                            <span className="px-2 mx-4 py-10 main-menu-item flex cursor-pointer items-center">
                                تواصل معنا &nbsp;
                                <span className="fill-gray-900">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </span>
                        </div>
                        <ul className="absolute flex flex-col gap-5 text-gray-900 -right-1/2 top-23 invisible group-hover:top-24 transition-all duration-150 ease-linear min-w-[200px] z-20 bg-white border border-gray-300 hover:border-gray-400 p-4 text-center">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-5">
                                <PiCaretUpFill fill="white" size={20} />
                            </span>
                            <li className="border-b pb-2 hover:text-blue-400 border-gray-300">
                                <Link href="mailto:persiandenasun.com@gmail.com">البريد الإلكتروني</Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="https://wa.me/989101818197">واتساب</Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="https://t.me/PersiaDenasun1">تلغرام</Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="http://instagram.com/_u/persiandenasun/">إنستغرام</Link>
                            </li>
                            <li className="pb-0 hover:text-blue-700">
                                <Link href="/ar/contact-us">نموذج التواصل</Link>
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
                        <ul className="absolute flex flex-col gap-5 text-gray-900 -right-1/2 top-23 invisible group-hover:top-24 transition-all duration-150 ease-linear min-w-[150px] z-20 bg-white border border-gray-300 hover:border-gray-400 p-4 text-center">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-5">
                                <PiCaretUpFill fill="white" size={20} />
                            </span>
                            <li className="border-b pb-2 hover:text-blue-400 border-gray-300">
                                <Link href="/" className="flex items-center justify-center gap-2">
                                    <span>فارسی</span><span className="fi fi-ir"></span>
                                </Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-400 border-gray-300">
                                <Link href="/en" className="flex items-center justify-center gap-2">
                                    <span>English</span><span className="fi fi-gb"></span>
                                </Link>
                            </li>
                            <li className="border-b pb-2 hover:text-blue-700 border-gray-300">
                                <Link href="/ar" className="flex items-center justify-center gap-2">
                                    <span>العربية</span><span className="fi fi-sa"></span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </nav>

            {/* Mobile Menu */}
            <nav className="md:hidden p-2 px-6 text-white bg-gray-900" dir="rtl">
                <div className="flex justify-between items-center">
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(true)}
                        aria-label="فتح القائمة"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="mx-2 font-bold text-white">شركة برشيا دِنا سان</span>
                    <div className="inline-flex items-center">
                        <Link href="/ar">
                            <Image
                                src="/icons/persiadenasun-logo-180x180.png"
                                alt="شعار بيرشيا دينا صن"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white my-shadow z-50 p-4 md:hidden rounded-l-lg"
                            dir="rtl"
                        >
                            <div className="flex items-center justify-between mb-6 p-3 bg-black">
                                <span className="text-xl font-bold text-white">بيرشيا دينا صن</span>
                                <button
                                    onClick={() => closeMobileMenu()}
                                    aria-label="إغلاق القائمة"
                                    className="bg-black rounded overflow-hidden"
                                >
                                    <X className="w-9 h-9 fill-white text-white rounded p-1" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-6">
                                <MenuLink href="/ar">الرئيسية</MenuLink>

                                <div>
                                    <button
                                        onClick={() => toggleProductDropdown()}
                                        className="text-gray-800 text-right flex items-center justify-between w-full"
                                    >
                                        <span className="text-2xl">المنتجات</span>
                                        {isDropdownProductOpen ? (
                                            <ExternalLink className="w-6 h-6 text-blue-400 rotate-45" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-black" />
                                        )}
                                    </button>
                                    {isDropdownProductOpen && (
                                        <ul className="mx-4 mt-2 space-y-4 flex flex-col p-2">
                                            <MenuLink href="/ar/products/oshima">أوشيما</MenuLink>
                                            <MenuLink href="/ar/products/ricoma">ريكوما</MenuLink>
                                            <MenuLink href="/ar/products/siruba">سيروبا</MenuLink>
                                            <MenuLink href="/ar/products/orox">أوروكس</MenuLink>
                                            <MenuLink href="/ar/products/arshid">الأقمشة</MenuLink>
                                        </ul>
                                    )}
                                </div>

                                <MenuAnchor href="/ar/about-us">
                                    <span className="text-2xl text-gray-800">من نحن</span>
                                </MenuAnchor>

                                <div>
                                    <button
                                        onClick={() => toggleContactDropdown()}
                                        className="text-gray-800 transition w-full flex justify-between items-center"
                                    >
                                        <span className="text-2xl">تواصل معنا</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {isDropdownContactOpen && (
                                        <ul className="mx-4 mt-2 space-y-4 flex flex-col p-2">
                                            <MenuLink href="mailto:persiandenasun.com@gmail.com">
                                                البريد الإلكتروني
                                            </MenuLink>
                                            <MenuLink href="https://wa.me/989101818197">
                                                واتساب
                                            </MenuLink>
                                            <MenuLink href="https://t.me/PersiaDenasun1">
                                                تلغرام
                                            </MenuLink>
                                            <MenuLink href="http://instagram.com/_u/persiandenasun/">
                                                إنستغرام
                                            </MenuLink>
                                            <MenuLink href="/ar/contact-us/">نموذج التواصل</MenuLink>
                                        </ul>
                                    )}

                                    <ul className="flex mt-6 space-x-5 justify-center">
                                        <li className="p-2">
                                            <Link href="/"><span className="fi fi-ir"></span>
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link href="/en">
                                                <span className="fi fi-gb"></span>
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link href="/ar">
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
