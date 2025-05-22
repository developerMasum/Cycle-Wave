import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useOrderQuery } from "../../redux/features/order/orderApi";
import { clearCart } from "../../redux/features/cart/cartSlice";
import PaymentLoader from "../../components/Payment/PaymentLoader";
import PaymentNotFound from "../../components/Payment/PaymentNotFound";
import OS_OrderDetails from "../../components/Payment/OrderDetails";

export default function COD_Success() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useOrderQuery(id || "not-found", {
    skip: !id,
  });
  console.log(data?.data);

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
