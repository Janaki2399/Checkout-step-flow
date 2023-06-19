import useFetch from "../../../hooks/useFetch";
import ProductItem from "../ProductItem/ProductItem";
import { Product } from "../ProductItem/product.types";
import { ProductListResponse } from "./productList.types";
import styles from "./productList.module.css";

const ProductList = () => {
  const {
    response: productList,
    isLoading,
    isError,
  } = useFetch("/api/products") as ProductListResponse;

  if (isLoading) {
    return (
      <div className={styles["loader-wrapper"]}>
        <div className={styles["loader"]}></div>
      </div>
    );
  }
  if (isError) {
    return <>Error</>;
  }

  return (
    <div className={styles["cards-grid"]}>
      {productList?.products.map((product: Product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
