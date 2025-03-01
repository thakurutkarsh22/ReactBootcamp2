import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Cart() {

    const cartContextData = useContext(CartContext)
    // const authContextData = useContext(AuthCOne)

    const {
        name,
        productCount,
        setPrductCount
    } = cartContextData



    return (
        <>
            <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
                <div style={{background: "yellow"}}>

                    <h1>
                        CART
                    </h1>

                    <button onClick={() => {
                        setPrductCount(old => old - 1)
                    }}>
                        -
                    </button>

                    <p>
                        Product COunt: {productCount} {name}
                    </p>

                    <button onClick={() => {
                        setPrductCount(old => old + 1)
                    }}>
                        +
                    </button>


                </div>


            </div>
        
        </>
    );


}

export default Cart