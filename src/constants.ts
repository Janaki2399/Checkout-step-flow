export enum STEPS {
  PRODUCT_SELECTION,
  ADDRESS,
  ORDER_SUMMARY,
}

export const stepsList = [
  {
    id: STEPS.PRODUCT_SELECTION,
    text: "Products",
  },
  {
    id: STEPS.ADDRESS,
    text: "Address",
  },
  {
    id: STEPS.ORDER_SUMMARY,
    text: "Price",
  },
];

export const registerOptions = {
  name: {
    required: "Name is required",
    maxLength: { value: 20, message: "Maximum length is 20" },
  },
  mobileNo: {
    required: "Mobile No is required",
    minLength: { value: 10, message: "Minimum length is 10" },
  },
  address: { required: "Address is required" },
  pincode: {
    required: "Pincode is required",
    minLength: { value: 6, message: "Minimum length is 6" },
  },
};
