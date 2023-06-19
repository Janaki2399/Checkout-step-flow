import { Dispatch, SetStateAction } from "react";
import { STEPS } from "../../constants";

export type Address = {
  name: string;
  mobileNo: string;
  address: string;
  pincode: string;
};

export type AddressFormProps = {
  setSelectedStep: Dispatch<SetStateAction<STEPS>>;
};
