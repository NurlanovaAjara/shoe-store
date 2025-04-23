"use client";
import { headerData } from "@/static-data/data";
import Link from "next/link";

import { usePathname } from "next/navigation";
function HeaderMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 place-items-center gap-7 text-sm capitalize font-semibold text-black ml-8">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-gray-500 hover-effect relative group ${
            pathname === item?.href && "text-gray-500"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-gray-500 group-hover:w-1/2 hover-effect ${
              pathname === item?.href && "w-1/2"
            } group-hover:left-0`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-gray-500 group-hover:w-1/2 hover-effect ${
              pathname === item?.href && "w-1/2"
            } group-hover:right-0`}
          />
        </Link>
      ))}
    </div>
  );
}
export default HeaderMenu;
