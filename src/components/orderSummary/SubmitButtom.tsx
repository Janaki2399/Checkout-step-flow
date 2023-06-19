import axios from "axios";
import { useState } from "react";
import { OrderStatus } from "./OrderSummary";
import styles from "./orderSummary.module.css";
import {
  AddressContextType,
  useAddressContext,
} from "../../contexts/address.context";
import {
  ProductsContextType,
  useProductsContext,
} from "../../contexts/products.context";

type SubmitButtonProps = {
  orderStatus: OrderStatus | null;
  setOrderStatus: (orderStatus: OrderStatus) => void;
};

const SubmitButton = ({ orderStatus, setOrderStatus }: SubmitButtonProps) => {
  const { selectedProducts } = useProductsContext() as ProductsContextType;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address } = useAddressContext() as AddressContextType;

  const handleSubmit = async () => {
    const postItem = {
      selectedProducts: Object.keys(selectedProducts),
      address,
    };
    try {
      setIsLoading(true);
      const { status } = await axios.post("api/orders", { order: postItem });
      if (status === 201) {
        setOrderStatus(OrderStatus.SUCCESS);
      }
    } catch (error) {
      setOrderStatus(OrderStatus.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitButtonDisabled = () => {
    return orderStatus === OrderStatus.SUCCESS || isLoading;
  };

  return (
    <>
      <button
        className={styles["submit-btn"]}
        onClick={handleSubmit}
        disabled={isSubmitButtonDisabled()}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};

export default SubmitButton;
