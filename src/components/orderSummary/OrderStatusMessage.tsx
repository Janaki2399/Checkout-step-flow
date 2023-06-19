import { OrderStatus } from "./OrderSummary";
import styles from "./orderSummary.module.css";

type OrderStatusMessageProps = {
  orderStatus: OrderStatus;
};

const getOrderStatusMessage = (orderStatus: OrderStatus) => {
  if (orderStatus === OrderStatus.SUCCESS) {
    return {
      message: "Thank you for your order! We've received it successfully.",
      style: styles.success,
    };
  }
  return {
    message: "Oops! Something went wrong with your order. Please try again.",
    style: styles.error,
  };
};

const OrderStatusMessage = ({ orderStatus }: OrderStatusMessageProps) => {
  const { message, style } = getOrderStatusMessage(orderStatus);
  return (
    <>
      <div className={`${styles.message} ${style}`}>{message}</div>
    </>
  );
};

export default OrderStatusMessage;
