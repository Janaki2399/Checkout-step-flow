import {
  ProductsContextType,
  useProductsContext,
} from "../../../contexts/products.context";
import styles from "./selectionView.module.css";

type ContinueButtonProp = {
  moveToNextStep: () => void;
};

const ContinueButton = ({ moveToNextStep }: ContinueButtonProp) => {
  const { selectedProducts } = useProductsContext() as ProductsContextType;
  return (
    <div className={styles["next-step-wrapper"]}>
      <button
        className={styles["next-step-btn"]}
        onClick={moveToNextStep}
        disabled={Object.keys(selectedProducts).length === 0}
      >
        Continue
      </button>
    </div>
  );
};

export default ContinueButton;
