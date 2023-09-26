import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendID } from "../redux/actions/ProductsAction";

// export default function Filter({ products, sendID }) {
// NO NEED TO GET PRODUCTS AS PROPS NOW AS REDUCER IS USED AND WE CAN ACCESS THE STATE VIA useSelector
export default function Filter() {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  console.log("Filtered : ", products);
  return (
    <div>
      <ul>
        {products &&
          products.map((product) => {
            const { id, category } = product;
            return (
              <li
                key={id}
                onClick={() => dispatch(sendID(id))}
                style={{ cursor: "pointer" }}
              >
                {category}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
