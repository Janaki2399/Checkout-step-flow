import { render, screen } from "@testing-library/react";
import ProductList from "../../components/products/ProductList/ProductList";
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

const mock = {
  response: {
    products: [
      {
        id: "1",
        name: "Example",
        price: "665",
      },
      {
        id: "2",
        name: "Handmade",
        price: "665",
      },
    ],
  },

  isLoading: false,
  isError: false,
};

jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  default: () => mock,
}));

describe("ProductList component", () => {
  it("should render list of items", () => {
    const providerProps = {
      value: {
        selectedProducts: {},
        handleProductSelection: jest.fn,
      },
    };

    customRender(<ProductList />, {
      providerProps,
    });

    expect(screen.getAllByTestId("product-card")).toHaveLength(2);
  });
});
