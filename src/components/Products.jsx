import { React, useEffect, useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import Cart from "./Cart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const url = import.meta.env.VITE_APP_API_URL;
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  const sendID = (id) => {
    console.log("Id is ", id);
    let new_Array = products.filter(item => item.id === id);
    setFilteredProducts(new_Array);
  };

  return (
    <div>
      <div style={{ float: "left", width: "100%" }}>
        <Search />
      </div>
      <div style={{ float: "left", width: "30%" }}>
        <Filter products={products} sendID={(id) => sendID(id)}/>
      </div>
      <div style={{ float: "left", width: "50%" }}>
        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <div>
                <h4>{product.title}</h4>
                <img src={product.image} alt="Product" width="75" />
                <p>{product.price}</p>
              </div>
            );
          })}
      </div>
      <div style={{ float: "right", width: "25%" }}>
        <Cart />
      </div>
    </div>
  );
}
