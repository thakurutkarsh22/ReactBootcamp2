import { useContext } from "react";
import CartContext from "../Context/CartContext";

function ProductListingComponent() {
    const cartContextData = useContext(CartContext)
    // const authContextData = useContext(AuthCOne)

    const {
        productCount,
        setPrductCount
    } = cartContextData

    return (
        <>
            <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                <div style={{background: "yellow"}}>
                    <h1>Product Listing page</h1>

                    <button onClick={() => {
                        setPrductCount(old => old -1)
                    }}> - </button>
                    <p>Product Count: {productCount}</p>

                    <button onClick={() => {
                        setPrductCount(old => old +1)

                    }}> + </button>


                </div>

            </div>
        
        </>
    );
}

export default ProductListingComponent;