import Link from "next/link";

export default function SubMenuAr(props: { item: string }) {
    const selected = ["", "", "", "", "", "", ""];

    const MenuLink = (props: { href: string; selected: number; children: React.ReactNode }) => (
        <li
            className={`hover:bg-gray-300 text-center  hover:rounded hover:text-gray-700 transition-all duration-200 ease-in-out p-2 sm:px-4 ${selected[props.selected]}`}
        >
            <Link href={`/ar/products/${props.href}`}>{props.children}</Link>
        </li>
    )

    selected[+props.item] = "bg-orange-500 rounded text-white";
    return (
        <nav className="w-full p-4 bg-white text-black text-lg sm:text-2xl my-shadow rounded-lg">
            <ul className="grid md:grid-cols-5 grid-cols-3 items-center gap-2 sm:p-4 p-2 w-full m-auto" dir="ltr">
                <MenuLink href="oshima" selected={1}>Oshima</MenuLink>
                <MenuLink href="ricoma" selected={2}>Ricoma</MenuLink>
                <MenuLink href="siruba" selected={4}>Siruba</MenuLink>
                <MenuLink href="orox" selected={5}>Orox</MenuLink>
                <MenuLink href="arshid" selected={6}>Fabrics</MenuLink>
            </ul>
        </nav>
    );
}
