import axios from "axios";

import { MinusIcon, PlusIcon, Trash2Icon, X } from "lucide-react";

import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { CartProduct } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../redux/features/cart/cartSlice";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

type PropsType = {
  product: CartProduct;
  isProcessing: boolean;
  productsLength: number;
};
const backend_api = import.meta.env.VITE_BACKEND_API;
export default function CEO_SingleProduct({
  product,
  isProcessing,
  productsLength,
}: PropsType) {
  const [isLoading, setIsLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const handleIncrease = async () => {
    if (!productQuantity) {
      const productId = product.id;
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${backend_api}/product/${productId}?fields=quantity,isDeleted`
        );
        const productData = data.data;
        if (!productData || productData.isDeleted || productData.quantity < 1) {
          setIsLoading(false);
          toast.error("Product is Not available");
          return;
        }
        dispatch(
          increaseQuantity({ id: product.id, quantity: productData.quantity })
        );
        setProductQuantity(productData.quantity);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setIsLoading(false);
      }
    } else {
      dispatch(increaseQuantity({ id: product.id, quantity: productQuantity }));
    }
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };
  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };
  return (
    <div className="relative flex flex-col gap-2">
      {isLoading && (
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
      )}

      <div className="flex gap-3">
        <div className="w-14 h-14 bg-gray-100 rounded overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/api/placeholder/56/56";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{product.name}</p>
          <p className="text-xs text-gray-500 flex items-center gap-0.5">
            ৳{product.price} <X className="size-3" /> {product.orderQuantity}{" "}
          </p>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-1">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={handleDecrease}
                disabled={product.orderQuantity <= 1 || isProcessing}
              >
                <MinusIcon className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">
                {product.orderQuantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={handleIncrease}
                disabled={isProcessing}
              >
                <PlusIcon className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        <div className="h-full">
          {productsLength > 1 && (
            <div className="flex justify-end items-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-400 hover:text-red-500"
                    disabled={isProcessing}
                  >
                    <Trash2Icon className="h-3 w-3" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove product</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to remove {product.name} from your
                      cart?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleRemove}>
                      Remove
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
          <p className="font-medium text-sm">
            ৳{product.price * product.orderQuantity}
          </p>
        </div>
      </div>
      <Separator />
    </div>
  );
}
