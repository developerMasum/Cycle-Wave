import { useParams } from "react-router-dom";
import { useOrderQuery } from "../../redux/features/order/orderApi";
import OD_OrderData from "../../components/OD/OD_OrderData";
import { OD_NotFound } from "../../components/OD/OD_NotFound";
import { OD_Loader } from "../../components/OD/OD_Loader";

export default function OrderDetails() {
  const { id } = useParams();
  const { data, isLoading } = useOrderQuery(id as string, {
    skip: !id,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <OD_Loader />
      </div>
    );
  }

  const orderData = data?.data;
  //   console.log(orderData);

  if (!orderData) {
    return <OD_NotFound />;
  }

  return <OD_OrderData orderData={orderData} />;
}
