import PriceDetails from "./PriceDetails";
import OrderStatusMessage from "./OrderStatusMessage";
import { useState } from "react";
import SubmitButton from "./SubmitButtom";

export const enum OrderStatus {
  SUCCESS = "success",
  ERROR = "error",
}

const OrderSummary = () => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);

  return (
    <>
      <PriceDetails>
        <SubmitButton
          orderStatus={orderStatus}
          setOrderStatus={setOrderStatus}
        />
      </PriceDetails>
      {orderStatus && <OrderStatusMessage orderStatus={orderStatus} />}
    </>
  );
};

export default OrderSummary;
