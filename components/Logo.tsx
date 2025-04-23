import { cn } from "@/lib/utils";
import Link from "next/link";

function Logo({
  className,
  spanDesing,
}: {
  className?: string;
  spanDesing?: string;
}) {
  return (
    <Link href={"/"}>
      <span
        className={cn(
          "text-2xl text-black font-black tracking-wider uppercase hover:text-gray-500 hover-effect group font-sans",
          className
        )}
      >
        Shoe-stor
        <span
          className={cn(
            "text-gray-500 group-hover:text-black hover-effect",
            spanDesing
          )}
        >
          e
        </span>
      </span>
    </Link>
  );
}

export default Logo;