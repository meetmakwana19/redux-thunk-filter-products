import { React, useEffect, useState } from "react";
import Filter from "./Filter";
import Cart from "./Cart";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductsAction";

export default function Products() {
  // not using useState to handle state as now setProducts action is getting used by redux to handle state.
  //   const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);
  const filteredProducts = useSelector((state) => state.productReducer.filteredProducts);
  console.log("Products : ", products);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const url = import.meta.env.VITE_APP_API_URL;
    const response = await fetch(url);
    const data = await response.json();
    // setProducts(data);

    dispatch(setProducts(data));
    // setFilteredProducts(data);
  };

  const sendID = (id) => {
    console.log("Id is ", id);
    let new_Array = products.filter((item) => item.id === id);
    setFilteredProducts(new_Array);
  };

  return (
    <div>
      <div style={{ float: "left", width: "100%" }}>
        <Header />
      </div>
      <div style={{ float: "left", width: "30%" }}>
        {/* <Filter products={products} sendID={(id) => sendID(id)}/> */}

        {/* NO NEED TO SEND PRODUCTS AS PROPS NOW AS REDUCER IS USED AND WE CAN ACCESS THE STATE VIA useSelector */}
        <Filter />
      </div>
      <div style={{ float: "left", width: "50%" }}>
        {
        filteredProducts.length === 0 ? 
        products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <h4>{product.title}</h4>
                <img src={product.image} alt="Product" width="75" />
                <p>{product.price}</p>
              </div>
            );
          }) :
        filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <h4>{product.title}</h4>
                <img src={product.image} alt="Product" width="75" />
                <p>{product.price}</p>
              </div>
            );
          })
          }
      </div>
      <div style={{ float: "right", width: "25%" }}>
        <Cart />
      </div>
    </div>
  );
}
