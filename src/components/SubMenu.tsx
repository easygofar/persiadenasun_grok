import Link from "next/link";

export default function SubMenu(props: { item: string }) {
  const selected = ["", "", "", "", "", "", ""];

  const MenuLink = (props: { href: string; selected: number; children: React.ReactNode }) => (
    <li
      className={`hover:bg-gray-300 text-center  hover:rounded hover:text-gray-700 transition-all duration-200 ease-in-out p-2 sm:px-4 ${selected[props.selected]}`}
    >
      <Link href={`/products/${props.href}`}>{props.children}</Link>
    </li>

  )

  selected[+props.item] = "bg-orange-500 rounded text-white";
  return (
    <nav className="w-full p-4 bg-white  text-black text-lg sm:text-2xl my-shadow flex justify-center  rounded-lg">
      <ul className="grid md:grid-cols-5 grid-cols-3 items-center gap-2 sm:p-4 p-2 w-full">
        <MenuLink href="oshima" selected={1} >اوشیما</MenuLink>
        <MenuLink href="ricoma" selected={2} >ریکوما</MenuLink>
        <MenuLink href="siruba" selected={4} >سیروبا</MenuLink>
        <MenuLink href="arshid" selected={6} >پارچه</MenuLink>
      </ul>
    </nav>
  );
}
