import { Dispatch, SetStateAction } from "react";
import { STEPS, stepsList } from "../../constants";
import styles from "./steps.module.css";

type sectionsDisplayProps = {
  setSelectedStep: Dispatch<SetStateAction<STEPS>>;
  selectedStep: STEPS;
};

const CheckoutSteps = ({
  setSelectedStep,
  selectedStep,
}: sectionsDisplayProps) => {
  const handleSelection = (index: STEPS) => () => {
    setSelectedStep(index);
  };

  const getClassNames = (index: number, selectedStep: STEPS) => {
    const isDisabled = index > selectedStep;

    if (isDisabled) {
      return `${styles.step}`;
    }
    if (index === selectedStep) {
      return `${styles.selected} ${styles.step}`;
    }
    return `${styles.step} ${styles.clickable}`;
  };

  const renderSteps = () => {
    return stepsList.map(({ id, text }, index) => {
      return (
        <button
          className={getClassNames(index, selectedStep)}
          key={id}
          disabled={index > selectedStep}
          onClick={handleSelection(index)}
        >
          {text}
        </button>
      );
    });
  };
  return (
    <>
      <div className={styles["steps-wrapper"]}>
        <div className={styles.steps}>{renderSteps()}</div>
      </div>
    </>
  );
};

export default CheckoutSteps;
