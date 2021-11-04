import { createContext, useContext } from "react";


export const FormContext = createContext({});
export const UseFormContext = () => useContext(FormContext);