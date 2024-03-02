import React, { createContext, useReducer } from "react";

export const initialState = {
  make: '',
  model: '',
  year: '',
  bodyStyle: '',
  minPrice: '',
  maxPrice: '',
  priceRange: [0, 100000],
  mileageRange: '',
  interiorColor: '',
  exteriorColor: '',
  engine: '',
};

const InventoryContext = createContext();

const InventoryContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MAKE":
        return { ...state, make: action.payload };
      case "SET_MODEL":
        return { ...state, model: action.payload };
      case "SET_YEAR":
        return { ...state, year: action.payload };
      case "SET_BODY_STYLE":
        return { ...state, bodyStyle: action.payload };
      case "SET_MIN_PRICE":
        return { ...state, minPrice: action.payload };
      case "SET_MAX_PRICE":
        return { ...state, maxPrice: action.payload };
      case "SET_PRICE_RANGE":
        return { ...state, priceRange: action.payload };
      case "SET_MILEAGE_RANGE":
        return { ...state, mileageRange: action.payload };
      case "SET_INTERIOR_COLOR":
        return { ...state, interiorColor: action.payload };
      case "SET_EXTERIOR_COLOR":
        return { ...state, exteriorColor: action.payload };
      case "SET_ENGINE":
        return { ...state, engine: action.payload };
      case "RESET_FILTERS":
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InventoryContext.Provider value={{ state, dispatch }}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext;
export { InventoryContextProvider };
