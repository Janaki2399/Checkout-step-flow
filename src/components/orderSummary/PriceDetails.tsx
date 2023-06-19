import {
  ProductsContextType,
  useProductsContext,
} from "../../contexts/products.context";
import { getDiscountedPrice, getTotalPrice } from "../../utils";
import styles from "./orderSummary.module.css";

const DISCOUNT_PERCENTAGE = 10;

type PriceDetailsProp = {
  children: React.ReactNode;
};

const PriceDetails = ({ children }: PriceDetailsProp) => {
  const { selectedProducts } = useProductsContext() as ProductsContextType;
  const totalMRP = getTotalPrice(selectedProducts);
  const discountedPrice = getDiscountedPrice(totalMRP, DISCOUNT_PERCENTAGE);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>PRICE DETAILS</div>
      <div className={styles.row}>
        <div>Total MRP</div>
        <div>Rs {totalMRP}</div>
      </div>
      <div className={styles.row}>
        <div>Discount(10%)</div>
        <div className={styles.discount}>-Rs {discountedPrice}</div>
      </div>
      <div className={`${styles.row} ${styles["total-amount"]}`}>
        <div>Total amount</div>
        <div>Rs {totalMRP - discountedPrice}</div>
      </div>
      {children}
    </div>
  );
};

export default PriceDetails;
