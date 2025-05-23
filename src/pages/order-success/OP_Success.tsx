import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { clearCart } from "../../redux/features/cart/cartSlice";
import PaymentLoader from "../../components/Payment/PaymentLoader";
import OS_OrderDetails from "../../components/Payment/OrderDetails";
import PaymentNotFound from "../../components/Payment/PaymentNotFound";
import { useOrderByTranIdQuery } from "../../redux/features/order/orderApi";

export default function OP_Success() {
  const { tranId } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useOrderByTranIdQuery(tranId || "not-found");

  if (isLoading) {
    return <PaymentLoader />;
  }
  const orderData = data?.data;
  if (!orderData) {
    return <PaymentNotFound />;
  }
  dispatch(clearCart());
  return <OS_OrderDetails orderData={orderData} />;
}
