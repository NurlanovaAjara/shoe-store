import { ShoppingBag } from "lucide-react";
import Link from "next/link";

function CartIcon() {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-5 text-black hover:text-gray-500 hover-effect" />
      <span className="absolute -top-1 -right-1 bg-black text-white h-3.5 w-3.5 rounded-full text-[9px] flex items-center justify-center">
        0
      </span>
    </Link>
  );
}

export default CartIcon;