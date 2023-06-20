import {
  ProductsContextType,
  useProductsContext,
} from "../../../contexts/products.context";
import styles from "./productItem.module.css";
import { ProductItemProps } from "./product.types";

const ProductItem = ({ product }: ProductItemProps) => {
  const { selectedProducts, handleProductSelection } =
    useProductsContext() as ProductsContextType;

  const toggleSelection = () => {
    handleProductSelection(product.id, Number(product.price));
  };

  const getProductPrice = () => {
    return Math.floor(Number(product.price));
  };

  return (
    <div
      className={styles.card}
      onClick={toggleSelection}
      data-testid="product-card"
    >
      <img
        src={product.image}
        width={280}
        height={260}
        loading="lazy"
        alt="product"
      />
      <div className={styles["card-content"]}>
        <div className={styles["product-name"]}>{product.name}</div>
        <div className="card-text font-size-5 font-bold-1">
          Rs {getProductPrice()}
        </div>
      </div>

      <input
        type="checkbox"
        checked={!!selectedProducts[product.id]}
        className={styles["check-box"]}
        onChange={toggleSelection}
        onClick={(e) => e.stopPropagation()}
      ></input>
    </div>
  );
};

export default ProductItem;
