import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddressForm from "../../components/address/AddressForm";
import {
  AddressContext,
  AddressContextType,
} from "../../contexts/address.context";

type ProviderPropsType = {
  providerProps: { value: AddressContextType };
};
const customRender = (
  ui: React.ReactElement,
  { providerProps }: ProviderPropsType
) => {
  return render(
    <AddressContext.Provider {...providerProps}>{ui}</AddressContext.Provider>
  );
};

describe("Address component", () => {
  it("should render the basic fields", () => {
    const providerProps = {
      value: {
        address: {},
        setAddress: jest.fn(),
      },
    };
    customRender(<AddressForm setSelectedStep={jest.fn} />, {
      providerProps,
    });

    const nameInput = screen.getByRole("textbox", { name: /address/i });
    const addressInput = screen.getByRole("textbox", { name: /address/i });
    const mobileNoInput = screen.getByRole("textbox", { name: /mobile No/i });
    const pincodeInput = screen.getByRole("textbox", { name: /pincode/i });
    const continueButton = screen.getByRole("button", { name: /Continue/i });

    expect(nameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(mobileNoInput).toBeInTheDocument();
    expect(pincodeInput).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });

  it("should prefill data", () => {
    const addressDetails = {
      name: "Janaki",
      mobileNo: "9848765637",
      address: "B-12, Ganesh apartment velachery chennai",
      pincode: "600100",
    };
    const providerProps = {
      value: {
        address: addressDetails,
        setAddress: jest.fn(),
      },
    };
    customRender(<AddressForm setSelectedStep={jest.fn} />, {
      providerProps,
    });

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const addressInput = screen.getByRole("textbox", { name: /address/i });
    const mobileNoInput = screen.getByRole("textbox", { name: /mobile No/i });
    const pincodeInput = screen.getByRole("textbox", { name: /pincode/i });
    const continueButton = screen.getByRole("button", { name: /Continue/i });

    expect(nameInput).toHaveValue(addressDetails.name);
    expect(addressInput).toHaveValue(addressDetails.address);
    expect(pincodeInput).toHaveValue(addressDetails.pincode);
    expect(mobileNoInput).toHaveValue(addressDetails.mobileNo);
    expect(continueButton).toBeInTheDocument();
  });

  it("should validate form fields", async () => {
    const providerProps = {
      value: {
        address: {},
        setAddress: jest.fn(),
      },
    };
    customRender(<AddressForm setSelectedStep={jest.fn} />, {
      providerProps,
    });

    const nameInput = screen.getByRole("textbox", { name: /address/i });
    const mobileNoInput = screen.getByRole("textbox", { name: /mobile No/i });
    const pincodeInput = screen.getByRole("textbox", { name: /pincode/i });
    const continueButton = screen.getByRole("button", { name: /Continue/i });

    fireEvent.change(nameInput, {
      target: { value: "" },
    });
    fireEvent.change(mobileNoInput, {
      target: { value: "8732399" },
    });
    fireEvent.change(pincodeInput, {
      target: { value: "87329" },
    });

    fireEvent.click(continueButton);

    await waitFor(async () => {
      await Promise.all([
        expect(screen.getByText("Minimum length is 10")).toBeInTheDocument(),
        expect(screen.getByText("Name is required")).toBeInTheDocument(),
        expect(screen.getByText("Minimum length is 6")).toBeInTheDocument(),
      ]);
    });
  });
});
