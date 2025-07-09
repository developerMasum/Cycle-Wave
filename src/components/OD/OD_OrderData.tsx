/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import StatusProgress from "../OrderDetails/StatusProgress";
import PaymentMethodBadge from "../badge/PaymentMethodBadge";
import PaidStatusBadge from "../badge/PaidStatusBadge";
import { Separator } from "../ui/separator";
import { Package } from "lucide-react";

const OD_OrderData = ({ orderData }: { orderData: any }) => {
  return (
    <section className="py-6">
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              Order #
              {orderData.id.substring(orderData.id.length - 8).toUpperCase()}
            </CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">
            Placed on {format(new Date(orderData.createdAt), "PPP")} at{" "}
            {format(new Date(orderData.createdAt), "p")}
          </div>
        </CardHeader>
        <CardContent className="">
          <div className="pb-5">
            {" "}
            <StatusProgress status={orderData.status} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Shipping Information
              </h3>
              <div className="text-foreground">
                <p className="font-medium">{orderData?.user?.name}</p>
                <p>{orderData?.user?.address}</p>
                <p>{orderData?.user?.phone}</p>
                {orderData?.user?.email && <p>{orderData?.user?.email}</p>}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Payment Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="inline-block w-32">Method:</span>
                  <PaymentMethodBadge method={orderData?.paymentMethod} />
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-32">Status:</span>
                  <PaidStatusBadge
                    isPaid={orderData?.paymentStatus}
                    payment={orderData?.totalPrice}
                  />
                </div>
                {orderData?.transactionId && (
                  <p>
                    <span className="inline-block w-32">Transaction ID:</span>{" "}
                    {orderData?.transactionId}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Order Items</h3>
            <div className="space-y-4">
              {orderData?.products?.map((item: any) => (
                <div
                  key={item?.product?.id}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div className="flex gap-4">
                    <div className=" w-16 md:w-20 min-w-16 md:min-w-20 h-12 md:h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                      {item.product.images && item.product.images[0] ? (
                        <img
                          src={item?.product?.images[0]}
                          alt={item?.name}
                          className="w-full h-full object-cover "
                        />
                      ) : (
                        <Package className="text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h6 className="font-medium line-clamp-1">{item?.name}</h6>
                      <p className="text-muted-foreground text-sm">
                        {item?.product?.brand} · {item?.product.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      ৳{orderData?.totalPrice / item?.quantity}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Qty: {item?.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>৳{orderData.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Charge</span>
                    <span>৳{orderData.deliveryCharge.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>
                      ৳
                      {(
                        orderData.totalPrice + orderData.deliveryCharge
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
export default OD_OrderData;
