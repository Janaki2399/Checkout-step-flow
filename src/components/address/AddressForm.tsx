import { useEffect } from "react";
import styles from "./address.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Address, AddressFormProps } from "./address.types";
import {
  AddressContextType,
  useAddressContext,
} from "../../contexts/address.context";
import { registerOptions } from "../../constants";

const AddressForm = ({ setSelectedStep }: AddressFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<Address>();

  const onSubmit: SubmitHandler<Address> = () =>
    setSelectedStep((previousStep) => previousStep + 1);
  const { setAddress, address } = useAddressContext() as AddressContextType;

  useEffect(() => {
    reset(address);
    return () => {
      setAddress(getValues());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContinue = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="name">Name*</label>
      <input
        type="text"
        id="name"
        {...register("name", registerOptions.name)}
      ></input>
      {errors.name && (
        <div className={styles.error}>{errors.name?.message}</div>
      )}

      <label htmlFor="mobileNo">Mobile No*</label>
      <input
        type="text"
        id="mobileNo"
        maxLength={10}
        {...register("mobileNo", registerOptions.mobileNo)}
      ></input>
      {errors.mobileNo && (
        <div className={styles.error}>{errors.mobileNo?.message}</div>
      )}

      <label htmlFor="address">Address(House No,Building,Street,Area)*</label>
      <input
        type="text"
        id="address"
        {...register("address", registerOptions.address)}
      ></input>
      {errors.address && (
        <div className={styles.error}>{errors.address?.message}</div>
      )}

      <label htmlFor="pincode">Pincode*</label>
      <input
        type="text"
        id="pincode"
        maxLength={6}
        {...register("pincode", registerOptions.pincode)}
      ></input>
      {errors.pincode && (
        <div className={styles.error}>{errors.pincode?.message}</div>
      )}

      <button className={styles["continue-btn"]} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default AddressForm;
