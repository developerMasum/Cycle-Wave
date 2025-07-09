import { deliveryCharge } from "../../constants/order.const";
import { selectCurrentCartProducts } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import CEO_SingleProduct from "./CEO_SingleProduct";

export default function CheckoutEditOrder({
  isProcessing,
}: {
  isProcessing: boolean;
}) {
  const cartProducts = useAppSelector(selectCurrentCartProducts);
  // Quantity handler
  const totalPayment = cartProducts.reduce(
    (total, product) => total + product.price * product.orderQuantity,
    0
  );
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
        <CardDescription>
          {cartProducts.length} {cartProducts.length === 1 ? "item" : "items"}{" "}
          in your cart
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-60 overflow-y-auto space-y-4">
          {cartProducts.map((product) => (
            <CEO_SingleProduct
              product={product}
              key={product.id}
              isProcessing={isProcessing}
              productsLength={cartProducts.length}
            />
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>৳{totalPayment}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>৳{deliveryCharge}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>৳{totalPayment + deliveryCharge}</span>
        </div>
      </CardContent>
    </Card>
  );
}
