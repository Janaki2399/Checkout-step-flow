export type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  inStock: boolean;
};

export type ProductItemProps = {
  product: Product;
};
