"use client";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (
    e: React.MouseEvent<HTMLSpanElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "Product removed successfully!"
            : "Product added successfully!"
        );
      });
    }
  };

  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 text-black hover:text-white hover:bg-black rounded-full p-1 transition-colors" />
          <span className="absolute -top-1 -right-1 bg-black text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
            {favoriteProduct?.length ? favoriteProduct?.length : 0}
          </span>
        </Link>
      ) : (
        <button
          onClick={handleFavorite}
          className="group relative border border-black hover:bg-black hover:text-white p-1.5 rounded-sm transition-colors"
        >
          {existingProduct ? (
            <Heart
              fill="#000"
              className="text-white group-hover:text-white w-5 h-5"
            />
          ) : (
            <Heart className="text-black group-hover:text-white w-5 h-5" />
          )}
        </button>
      )}
    </>
  );
};
export default FavoriteButton;
