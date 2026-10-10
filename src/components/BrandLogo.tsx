import { SITE } from "@/lib/site";
import Image from "next/image";

/** PDS wordmark used in the header and footer. */
export default function BrandLogo({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const ink = tone === "light" ? "#ffffff" : "#0f1629";
  const sub = tone === "light" ? "rgba(255,255,255,.72)" : "#5e687a";
  return (
    <span className="inline-flex flex-col items-start leading-none" dir="ltr">
      {/* <svg viewBox="0 0 128 48" className="h-12 w-32" role="img" aria-label={SITE.nameEn}>
        <text
          x="0"
          y="28"
          fill={ink}
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="32"
        >
          PDS
        </text>
        <path
          d="M62 32c16 8 36 6 58-10"
          stroke="#f66a13"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="1"
          y="45"
          fill={sub}
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          fontSize="6.4"
          letterSpacing="1.5"
        >
          PERSIA DENA SUN
        </text>
      </svg> */}
      <Image
        src="/icons/persiadenasun-logo-180x180.png"
        width={80}
        height={80}
        alt="Persia Dena Sun Logo"
      />

    </span>
  );
}
