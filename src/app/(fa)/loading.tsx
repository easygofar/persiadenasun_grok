import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-between items-center">
      <Image
        src="/icons/persiadenasun-logo-180x180.png"
        width={100}
        height={100}
        alt="Persia Dena Sun Logo"
      />
    </div>
  );
}
