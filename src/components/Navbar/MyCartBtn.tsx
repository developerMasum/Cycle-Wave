import { ShoppingCart, Trash2Icon, ShoppingBagIcon } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  clearCart,
  selectCurrentCartProducts,
} from "../../redux/features/cart/cartSlice";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
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
import MCB_SingleProduct from "./MCB_SingleProduct";

export default function MyCartBtn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(selectCurrentCartProducts);

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.orderQuantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="relative"
          variant="ghost"
          size="icon"
          aria-label="Cart"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {cartProducts.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:max-w-md flex flex-col px-4 py-8">
        <SheetHeader className="border-b pb-4 px-0">
          <SheetTitle className="flex items-center justify-between">
            <span className="font-semibold text-2xl">
              Your Cart ({cartProducts.length})
            </span>
            {cartProducts.length > 0 && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-red-50"
                  >
                    <Trash2Icon className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear cart</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove all items from your cart. This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClearCart}>
                      Clear
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-8 space-y-4 text-center">
              <ShoppingBagIcon className="w-12 h-12 text-gray-400" />
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-sm text-gray-500">
                Add some products to your cart to see them here.
              </p>
              <SheetClose asChild>
                <Button onClick={() => navigate("/shop")} variant="outline">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          ) : (
            <ul className="divide-y">
              {cartProducts.map((product) => (
                <MCB_SingleProduct product={product} key={product.id} />
              ))}
            </ul>
          )}
        </div>

        {cartProducts.length > 0 && (
          <SheetFooter className="border-t pt-4 mt-auto px-0">
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="text-sm font-medium">৳{totalPrice}</span>
              </div>
              <p className="text-xs text-gray-500">
                Shipping calculated at checkout
              </p>
              <div>
                <SheetClose className="" asChild>
                  <Link to={"/checkout"}>
                    <Button className="w-full">Checkout</Button>
                  </Link>
                </SheetClose>
              </div>
              <SheetClose asChild>
                <Button
                  onClick={() => navigate("/shop")}
                  variant="outline"
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </SheetClose>

              <div className="text-center">
                <SheetClose asChild>
                  <Link className="underline hover:text-primary" to="/cart">
                    View Cart
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
