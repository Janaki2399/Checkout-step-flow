import { fireEvent, render, screen } from "@testing-library/react";
import ProductItem from "../../components/products/ProductItem/ProductItem";
import { Product } from "../../components/products/ProductItem/product.types";
import {
  ProductsContext,
  ProductsContextType,
} from "../../contexts/products.context";

type ProductItemProps = {
  providerProps: { value: ProductsContextType };
};
const customRender = (
  ui: React.ReactElement,
  { providerProps }: ProductItemProps
) => {
  return render(
    <ProductsContext.Provider {...providerProps}>{ui}</ProductsContext.Provider>
  );
};

const product: Product = {
  id: "ee49e7b5",
  name: "Handmade Frozen Table",
  image: "https://loremflickr.com/280/260/technics?lock=3506873626001408",
  price: "662.00",
  inStock: true,
};

describe("ProductItem component", () => {
  it("should render name,price,checkbox of product", () => {
    const providerProps = {
      value: {
        selectedProducts: {},
        handleProductSelection: jest.fn,
      },
    };

    customRender(<ProductItem product={product} />, {
      providerProps,
    });

    expect(screen.getByText("Handmade Frozen Table")).toBeInTheDocument();
    expect(screen.getByText("Rs 662.00")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render checkbox as checked if product is selected", () => {
    const providerProps = {
      value: {
        selectedProducts: {
          ee49e7b5: { price: "662.00" },
        },
        handleProductSelection: jest.fn,
      },
    };

    customRender(<ProductItem product={product} />, {
      providerProps,
    });

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("should call handleProductSelection with correct arguments when product is clicked", () => {
    const mockHandleProductSelection = jest.fn();

    const providerProps = {
      value: {
        selectedProducts: {
          ee49e7b5: { price: "662.00" },
        },
        handleProductSelection: mockHandleProductSelection,
      },
    };

    customRender(<ProductItem product={product} />, {
      providerProps,
    });

    const productCard = screen.getByTestId("product-card");
    fireEvent.click(productCard);
    expect(mockHandleProductSelection).toHaveBeenCalledWith("ee49e7b5", 662.0);
  });
});
