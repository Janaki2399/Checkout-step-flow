import { Dispatch, SetStateAction } from "react";
import ProductList from "../ProductList/ProductList";
import ContinueButton from "./ContinueButton";
import { STEPS } from "../../../constants";

type ProductSelectionViewProp = {
  setSelectedStep: Dispatch<SetStateAction<STEPS>>;
};

const ProductSelectionView = ({
  setSelectedStep,
}: ProductSelectionViewProp) => {
  const moveToNextStep = () => {
    setSelectedStep((prev: STEPS) => prev + 1);
  };
  return (
    <>
      <ProductList />
      <ContinueButton moveToNextStep={moveToNextStep} />
    </>
  );
};

export default ProductSelectionView;
