import { Product } from "../ProductItem/product.types";

export type ProductListResponse = {
  response: { products: Product[] } | null;
  isLoading: boolean;
  isError: boolean;
};
