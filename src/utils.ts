import { SelectedProducts } from "./contexts/products.context";

export const getTotalPrice = (products: SelectedProducts) => {
  return Object.keys(products).reduce((acc, id) => {
    return acc + Number(products[id].price);
  }, 0);
};

export const getDiscountedPrice = (
  totalMRP: number,
  discountPercentage: number
) => {
  return Math.round(totalMRP * (discountPercentage / 100));
};
