import { render, screen } from "@testing-library/react";
import CheckoutSteps from "../../components/steps/CheckoutSteps";

describe("CheckoutSteps component", () => {
  it("should render all steps", () => {
    render(<CheckoutSteps setSelectedStep={jest.fn} selectedStep={0} />);
    expect(
      screen.getByRole("button", { name: /Products/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Address/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Price/i })).toBeInTheDocument();
  });

  it("should disable next step", () => {
    render(<CheckoutSteps setSelectedStep={jest.fn} selectedStep={0} />);
    const addressButton = screen.getByRole("button", { name: /Address/i });
    const priceButton = screen.getByRole("button", { name: /Price/i });
    expect(addressButton).toBeDisabled();
    expect(priceButton).toBeDisabled();
  });
});
