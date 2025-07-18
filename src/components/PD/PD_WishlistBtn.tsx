import { Heart } from "lucide-react";
import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { WishlistProductType } from "../../types";
import { Button } from "../ui/button";
import {
  addToWishList,
  selectCurrentWishlistProducts,
} from "../../redux/features/wishlist/wishlistSlice";

export default function PD_WishlistBtn({
  data,
  size = "lg",
}: {
  data: Omit<WishlistProductType, "addedTime">;
  size?: "sm" | "lg";
}) {
  const dispatch = useAppDispatch();
  const wishlistProduct = useAppSelector(selectCurrentWishlistProducts);
  const isInWIshlist = wishlistProduct.find((item) => item.id === data.id);
  const handleAddToWishList = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addToWishList(data));
  };
  return (
    <Button
      onClick={handleAddToWishList}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2"
    >
      {isInWIshlist ? (
        <Heart className="fill-red-500 text-red-500" size={18} />
      ) : (
        <Heart size={18} />
      )}

      {size === "lg" && <span>Wishlist</span>}
    </Button>
  );
}
