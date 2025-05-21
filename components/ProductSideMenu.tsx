"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
const ProductSideMenu = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const handleFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
    window.alert("Favorite button clicked");
  };
  return (
    <div className={cn("absolute top-2 right-2", className)}>
      <div
        onClick={handleFavorite}
        className="p-2.5 rounded-full bg-white text-black hover:bg-black hover:text-white hover-effect cursor-pointer"
      >
        <Heart size={15} />
      </div>
    </div>
  );
};
export default ProductSideMenu;
