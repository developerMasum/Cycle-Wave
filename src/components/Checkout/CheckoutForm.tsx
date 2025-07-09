import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type FormValues = z.infer<typeof checkoutFormSchema>;

import {
  clearCart,
  selectCurrentCartProducts,
} from "../../redux/features/cart/cartSlice";
import { useCheckoutMutation } from "../../redux/features/order/orderApi";
import { OrderDataType, TUserData } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { toast } from "sonner";
import { errorMessageGenerator } from "../../utils/errorMessageGenerator";

import { Button } from "../ui/button";
import { Banknote, CreditCard, Loader2 } from "lucide-react";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { checkoutFormSchema } from "../../schemas/checkoutFormSchema";
import { Input } from "../ui/input";
import { Textarea } from "../ui/text-area";

export default function CheckoutForm({
  userData,
}: {
  userData: TUserData | undefined;
}) {
  const [checkout, { isLoading: isCheckoutLoading }] = useCheckoutMutation();
  const cartProducts = useAppSelector(selectCurrentCartProducts);
  const form = useForm<FormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "farhan adnan",
      contact: "0170487382",
      address: "Dhaka,Bangladesh",
    },
  });

  useEffect(() => {
    if (userData) {
      form.reset({
        name: userData.name || "",
        contact: userData.contactNumber || "",
        address: userData.address || "",
      });
    }
  }, [userData, form]);
  const totalPayment = cartProducts.reduce(
    (total, product) => total + product.price * product.orderQuantity,
    0
  );
  const onSubmit = async (data: FormValues) => {
    const orderedProducts = cartProducts.map((product) => ({
      product: product.id,
      quantity: product.orderQuantity,
      name: product.name,
    }));

    // Create order object
    const orderData: OrderDataType = {
      products: orderedProducts,
      payment: totalPayment,
      address: data.address,
      name: data.name,
      contact: data.contact,
      paymentMethod: data.paymentMethod,
      userId: userData?.id,
      deliveryCharge: 120,
    };

    console.log("orderData", orderData);
    if (userData?.email) {
      orderData.email = userData?.email;
    }
    const toastId = toast.loading("Checkout is on processing...");
    try {
      const result = await checkout(orderData).unwrap();
      if (orderData.paymentMethod === "CASH ON DELIVERY") {
        const id = result.data.id;
        window.location.replace(`/checkout/COD/success/${id}`);
      } else {
        window.location.href = result?.data?.payment_url;
        toast.success("Order placed successfully!", { id: toastId });
        clearCart();
      }
    } catch (error) {
      toast.error(errorMessageGenerator(error), { id: toastId });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Md Masum"
                  disabled={isCheckoutLoading}
                  className="bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="+880123456789"
                  disabled={isCheckoutLoading}
                  className="bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Dhaka, Bangladesh"
                  disabled={isCheckoutLoading}
                  className="bg-gray-50 min-h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Payment Method</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={
                      field.value === "CASH ON DELIVERY" ? "default" : "outline"
                    }
                    onClick={() => field.onChange("CASH ON DELIVERY")}
                  >
                    <Banknote className="h-5 w-5" />
                    Cash On Delivery
                  </Button>
                  <Button
                    type="button"
                    variant={
                      field.value === "ONLINE PAYMENT" ? "default" : "outline"
                    }
                    onClick={() => field.onChange("ONLINE PAYMENT")}
                  >
                    <CreditCard className="h-5 w-5" />
                    Online Payment
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full mt-6"
          disabled={isCheckoutLoading}
        >
          {isCheckoutLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Place Order"
          )}
        </Button>
      </form>
    </Form>
  );
}
