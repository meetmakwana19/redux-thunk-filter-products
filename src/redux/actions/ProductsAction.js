import { actionTypes } from "../types/actionTypes";

// fetch products
// export const setProducts = (products) => {
//     return{
//         type: actionTypes.SET_PRODUCTS,
//         payload: products,
//     }
// }
export const getApiData = (products) => {
  const url = import.meta.env.VITE_APP_API_URL;

  // returning a function for Thunk.
  return async (dispatch, getState) => {
    const response = await fetch(url);
    const data = await response.json();
    // Using dispatch because of Thunk.
    dispatch({
      type: actionTypes.SET_PRODUCTS,
      payload: data,
    });
  };

  // this return object can be Promise without using Thunk as untill the fetching happens till then the action reaches the reducer.
  // return{
  //     type: actionTypes.SET_PRODUCTS,
  //     payload: data,
  // }
};

// send id
export const sendID = (produtID) => {
  return {
    type: actionTypes.SEND_ID,
    payload: produtID,
  };
};
