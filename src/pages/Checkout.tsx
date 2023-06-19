import { FC, useState } from "react";
import CheckoutSteps from "../components/steps/CheckoutSteps";
import Address from "../components/address/AddressForm";
import OrderSummary from "../components/orderSummary/OrderSummary";
import ProductSelectionView from "../components/products/ProductSelectionView/ProductSelectionView";
import { STEPS } from "../constants";

type StepsComponentsMap = {
  [key: number]: FC;
};

const Checkout = () => {
  const [selectedStep, setSelectedStep] = useState<STEPS>(
    STEPS.PRODUCT_SELECTION
  );

  const stepsComponentsMap: StepsComponentsMap = {
    [STEPS.PRODUCT_SELECTION]: () => (
      <ProductSelectionView setSelectedStep={setSelectedStep} />
    ),
    [STEPS.ADDRESS]: () => <Address setSelectedStep={setSelectedStep} />,
    [STEPS.ORDER_SUMMARY]: OrderSummary,
  };

  const Section = stepsComponentsMap[selectedStep];

  return (
    <>
      <CheckoutSteps
        setSelectedStep={setSelectedStep}
        selectedStep={selectedStep}
      />

      <Section />
    </>
  );
};

export default Checkout;
