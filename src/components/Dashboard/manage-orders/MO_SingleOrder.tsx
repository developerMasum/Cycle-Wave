// Icons
import {
  MoreHorizontal,
  ReceiptText,
  Trash2,
  TruckIcon,
  ClockIcon,
  CheckCircleIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";

// API & Constants

import { toast } from "sonner";
import MO_StatusBadge from "./MO_StatusBadge";
import MO_PaymentMethodBadge from "./MO_PaymentMethodBadge";
import { useState } from "react";
import {
  useDeleteOrderMutation,
  useUpdateOrderStatusMutation,
} from "../../../redux/features/order/orderApi";
import { order_status } from "../../../constants/order.const";
import { errorMessageGenerator } from "../../../utils/errorMessageGenerator";
import { dateToStringDate } from "../../../libs/utils";
import { TableRow, TableCell } from "../../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../ui/alert-dialog";
import { IOrder } from "../../../types";
import { Separator } from "../../ui/separator";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";
import MO_OrderDetails from "./MO_OrderDetails";

export default function MO_SingleOrder({
  order,
  index,
}: {
  order: IOrder;
  index: number;
}) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [orderDetailsDialogOpen, setOrderDetailsDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [updateStatus, { isLoading }] = useUpdateOrderStatusMutation();
  const [deleteOrders, { isLoading: isDeleteLoading }] =
    useDeleteOrderMutation();
  console.log(order);
  const handleStatusChange = async (value: (typeof order_status)[number]) => {
    const toastId = toast.loading(
      `Updating status to "${
        value.charAt(0) + value.slice(1).toLowerCase()
      }"...`
    );

    try {
      await updateStatus({ orderId: order._id, status: value }).unwrap();
      toast.success(
        `Status updated to "${value.charAt(0) + value.slice(1).toLowerCase()}"`,
        { id: toastId }
      );
    } catch (error) {
      toast.error(errorMessageGenerator(error), { id: toastId });
    }
  };

  const deleteOrder = async () => {
    const toastId = toast.loading(`Deleting order...`);

    try {
      await deleteOrders(order._id).unwrap();
      toast.success(`Order deleted successfully`, { id: toastId });
    } catch (error) {
      toast.error(errorMessageGenerator(error), { id: toastId });
    }
  };

  const loading = isLoading || isDeleteLoading;
  const formattedDate = dateToStringDate(order.createdAt);
  const totalAmount = order.totalPrice + order?.deliveryCharge;

  return (
    <>
      <TableRow>
        <TableCell className="font-medium text-foreground/80">
          #{String(index).padStart(2, "0")}
        </TableCell>

        <TableCell>
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-foreground">
              <UserIcon className="h-3 w-3" />
              <p className="font-medium text-sm">{order.user.name}</p>
            </div>

            <div className="flex items-center space-x-1 text-foreground/70">
              <PhoneIcon className="h-3 w-3" />
              <p className="text-sm">{order.user.phone}</p>
            </div>

            <div className="flex items-center space-x-1 text-foreground/70">
              <HomeIcon className="h-3 w-3" />
              <p
                className="text-sm truncate max-w-[150px]"
                title={order.user.address}
              >
                {order.user.address}
              </p>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <MO_PaymentMethodBadge
            method={order.paymentMethod}
            isPaid={order.paymentStatus}
            transactionId={order.transactionId}
            payment={order?.totalPrice}
          />
        </TableCell>
        <TableCell>
          <div className="rounded-lg px-2 py-1 shadow-sm min-w-max bg-card">
            <div className="grid grid-cols-2 gap-x-1 text-sm">
              <p className="text-muted-foreground text-sm">Subtotal:</p>
              <p className="text-right text-sm">
                ৳{order.totalPrice.toLocaleString()}
              </p>

              <p className="text-muted-foreground text-sm">Delivery:</p>
              <p className="text-right text-sm">৳{order?.deliveryCharge}</p>

              <Separator className="col-span-2 my-1" />

              <p className="font-semibold text-sm">Total:</p>
              <p className="text-right font-semibold text-sm">
                ৳{totalAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <MO_StatusBadge status={order.paymentStatus} />
        </TableCell>

        <TableCell>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{formattedDate}</span>
          </div>
        </TableCell>

        <TableCell className="text-right">
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[240px]">
              <DropdownMenuLabel className="text-foreground/80">
                Order Actions
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                disabled={loading}
                className="cursor-pointer flex items-center"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    setOrderDetailsDialogOpen(true);
                  }, 50);
                }}
              >
                <ReceiptText className="mr-2 h-4 w-4 text-foreground/60" />
                <span>View Order Details</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    setIsDeleteDialogOpen(true);
                  }, 50);
                }}
                disabled={loading}
                className="cursor-pointer flex items-center text-red-600 dark:text-red-500"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete Order</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-foreground/80">
                Update Order Status
              </DropdownMenuLabel>

              <div className="p-2">
                <RadioGroup
                  disabled={loading}
                  className="flex flex-col gap-2"
                  value={order.status}
                  onValueChange={handleStatusChange}
                >
                  {order_status.map((status) => (
                    <div
                      key={status}
                      className="flex items-center space-x-2 rounded-md py-1 px-2 hover:bg-foreground/10"
                    >
                      <RadioGroupItem
                        value={status}
                        id={`${order._id}-${status}`}
                      />
                      <Label
                        htmlFor={`${order._id}-${status}`}
                        className="text-sm font-medium cursor-pointer flex items-center"
                      >
                        {status === "Pending" && (
                          <ClockIcon className="h-3 w-3 mr-2 text-amber-600" />
                        )}
                        {status === "Shipped" && (
                          <TruckIcon className="h-3 w-3 mr-2 text-blue-600" />
                        )}
                        {status === "Delivered" && (
                          <CheckCircleIcon className="h-3 w-3 mr-2 text-green-600" />
                        )}
                        {status.charAt(0) + status.slice(1).toLowerCase()}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">
              Confirm Order Deletion
            </AlertDialogTitle>
            <AlertDialogDescription className="text-foreground/70">
              This action cannot be undone. This will permanently delete the
              order for
              <span className="font-medium text-foreground/90">
                {" "}
                {order?.user?.name}
              </span>{" "}
              with all its associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction onClick={deleteOrder} disabled={loading}>
              {isDeleteLoading ? "Deleting..." : "Yes, Delete Order"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog
        open={orderDetailsDialogOpen}
        onOpenChange={setOrderDetailsDialogOpen}
      >
        <DialogContent className="min-w-[95%]">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              <MO_OrderDetails id={order._id} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
