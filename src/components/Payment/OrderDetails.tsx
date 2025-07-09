/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, ChevronRight, Download, ShoppingBag } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { dateToStringDate } from "../../libs/utils";

export default function OS_OrderDetails({ orderData }: { orderData: any }) {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const handlePrintReceipt = () => {
    window.print();
  };
  return (
    <section className="space-y-8 py-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="bg-green-100 rounded-full p-3">
          <Check className="h-14 w-14 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Thank you for your order!
        </h1>
        <p className="text-gray-500">
          Your order has been received and is being processed. We will contact
          you shortly.
        </p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">Order Number:</p>
          <Badge variant="secondary" className="text-sm font-semibold py-1">
            {orderData.id}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-500">
                  Shipping Address
                </h3>
                <div className="text-sm">
                  <p className="font-medium">{orderData?.user?.address}</p>
                </div>
              </div>
              <div className="space-y-2">
                {/* <h3 className="font-medium text-sm text-gray-500">Payment Method</h3>
                <p className="text-sm">{data.}</p> */}

                <h3 className="font-medium text-sm text-gray-500 mt-4">
                  Order Date
                </h3>
                <p className="text-sm">
                  {dateToStringDate(orderData?.createdAt)}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Items</h3>
              <div className="space-y-3">
                {orderData?.products?.map((item: any) => {
                  const product = item.product;
                  return (
                    <div key={product?.id} className="flex items-center gap-4">
                      <img
                        src={product.images[0]}
                        alt={item.name}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">
                        ৳{orderData.totalPrice / item.quantity}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Subtotal</p>
                <p className="text-sm">৳{orderData.totalPrice}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Shipping</p>
                <p className="text-sm">৳{orderData.deliveryCharge}</p>
              </div>
              <Separator />
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">
                  ৳{orderData.totalPrice + orderData.deliveryCharge}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
          <Button
            variant="outline"
            className="w-full sm:w-auto no-print"
            onClick={handlePrintReceipt}
          >
            <Download className="mr-2 h-4 w-4" />
            Print Receipt
          </Button>

          {user && (
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => navigate("/my-orders")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              View All Orders
            </Button>
          )}

          <Button
            className="w-full sm:w-auto"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <div className="text-center text-sm text-gray-500">
        <p>
          Need help with your order?{" "}
          <Link to="/contact" className="text-primary underline">
            Contact our support team
          </Link>
        </p>
      </div>
    </section>
  );
}
