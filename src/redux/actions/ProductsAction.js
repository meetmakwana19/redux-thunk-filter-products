import { actionTypes } from "../types/actionTypes"

// fetch products
export const setProducts = (products) => {
    return{
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

// send id
export const sendID = (produtID) => {
    return {
        type: actionTypes.SEND_ID,
        payload: produtID
    }
}