import { useContext } from "react";
import CartContext from "../Context/CartContext";

function ProductDetailComponent() {

    const cartContextData = useContext(CartContext)
    // const authContextData = useContext(AuthCOne)

    const {
        productCount,
        setPrductCount
    } = cartContextData

    return (
        <>
            <div style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px"
            }}>
                <div style={{background: "green"}}>
                    <h1>
                        Product Detail Page
                    </h1>
                    <p>product is good product has details</p>
                    <p>Product has image </p>
                    <p>product has specifications</p>

                    <button onClick={() => {
                        setPrductCount(old => old -1)
                    }}>
                        -
                    </button>

                    <p>Product count : {productCount}</p>

                    <button onClick={() => {
                        setPrductCount(old => old +1)

                    }}>
                        +
                    </button>


                </div>


            </div>
        </>
    );
}

export default ProductDetailComponent;