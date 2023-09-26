import { actionTypes } from "../types/actionTypes";

const productState = {
  products: [],
  filteredProducts: [],
};

export const productReducer = (state = productState, action) => {
    console.log("Action : ", action);
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      // state is the old one = productState 
      return { ...state, products: action.payload };
    case actionTypes.SEND_ID:
      let produtID = action.payload
      let new_array = state.products.filter((item) => item.id === produtID)
      return{ ...state, filteredProducts: new_array}
    default:
      return state;
  }
};
