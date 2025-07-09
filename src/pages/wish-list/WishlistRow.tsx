import { SquareChartGantt, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { WishlistProductType } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { useProductQuery } from "../../redux/features/product/productApi";
import { removeFromWishList } from "../../redux/features/wishlist/wishlistSlice";
import { TableCell, TableRow } from "../../components/ui/table";
import { Checkbox } from "../../components/ui/checkbox";
import { Skeleton } from "../../components/ui/skeleton";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";

type PropsType = {
  product: WishlistProductType;
  checkedProducts: WishlistProductType[];
  setCheckedProducts: Dispatch<SetStateAction<WishlistProductType[]>>;
};
export default function WishlistRow({
  product,
  checkedProducts,
  setCheckedProducts,
}: PropsType) {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useProductQuery(
    {
      productId: product.id,
      args: [{ name: "fields", value: "price,quantity" }],
    },
    {
      skip: !product.id,
    }
  );

  const isChecked = checkedProducts.find((item) => item.id === product.id)?.id
    ? true
    : false;
  const handleCheckedChange = () => {
    if (isChecked) {
      const newCheckedProducts = checkedProducts.filter(
        (item) => item.id !== product.id
      );
      setCheckedProducts(newCheckedProducts);
    } else {
      const newCheckedProducts = [...checkedProducts, product];
      setCheckedProducts(newCheckedProducts);
    }
  };
  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishList(product.id));
  };
  return (
    <TableRow className="relative">
      <TableCell>
        <div className="flex justify-center items-center">
          {" "}
          <Checkbox checked={isChecked} onCheckedChange={handleCheckedChange} />
        </div>
      </TableCell>

      <TableCell>
        <div className="flex items-center space-x-4 relative">
          <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/api/placeholder/64/64";
              }}
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.brand}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton className="w-16 h-5" />
        ) : (
          <p>{data?.data?.quantity}</p>
        )}
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton className="w-16 h-5" />
        ) : (
          <p>৳{data?.data?.price}</p>
        )}
      </TableCell>
      <TableCell>
        {new Date(product.addedTime).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleRemoveFromWishlist}
                variant={"ghost"}
                size={"icon"}
              >
                <X />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Remove from wishlist</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={`/details/${product.id}`}>
                {" "}
                <Button variant={"outline"} size={"icon"}>
                  <SquareChartGantt />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
    </TableRow>
  );
}
