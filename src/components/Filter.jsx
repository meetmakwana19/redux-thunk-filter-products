import { React } from "react"

export default function Filter({ products, sendID }) {
    console.log("Filtered : ", products);
    return (
        <div>
            <ul>
                {
                    products && products.map((product) => {
                        const {id, category} = product;
                        return(
                            <li key={id} onClick={() => sendID(id)} style={{cursor: "pointer"}}>{category}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}