import React, { ReactNode, useContext, useState } from "react";
import { Address } from "../components/address/address.types";

type AddressProviderProps = {
  children: ReactNode;
};

export type AddressContextType = {
  address: Address | {};
  setAddress: (data: Address) => void;
};

export const AddressContext = React.createContext<
  AddressContextType | undefined
>(undefined);

export const AddressProvider = ({ children }: AddressProviderProps) => {
  const [address, setAddress] = useState<Address | {}>({});

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export function useAddressContext() {
  return useContext(AddressContext);
}
