import React, { ReactNode, useContext, useState } from "react";

export type SelectedProducts = {
  [id: string]: ProductPrice;
};

type ProductPrice = {
  price: string;
};

type ProductsProviderProps = {
  children: ReactNode;
};

export type ProductsContextType = {
  selectedProducts: SelectedProducts;
  handleProductSelection: (id: string, price: number) => void;
};

export const ProductsContext = React.createContext<
  ProductsContextType | undefined
>(undefined);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<
    SelectedProducts | {}
  >({});

  const handleProductSelection = (id: string, price: number) => {
    setSelectedProducts((selectedProducts: SelectedProducts) => {
      const isSelected = selectedProducts[id];

      if (isSelected) {
        const { [id]: removedProduct, ...updatedProduct } = selectedProducts;
        return updatedProduct;
      }
      return { ...selectedProducts, [id]: { price } };
    });
  };

  return (
    <ProductsContext.Provider
      value={{ selectedProducts, handleProductSelection }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductsContext() {
  return useContext(ProductsContext);
}
