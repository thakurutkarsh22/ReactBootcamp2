import { useState } from "react";
import GroceryCompoent from "./Components/GroceryCompoent";
import ProductDetailComponent from "./Components/ProductDetailComponent";
import ReuseComponent from "./Components/ReuseComponent";
import CartContext from "./Context/CartContext";

function ContextAPiReactApp() {

    const [productCount, setPrductCount] = useState(0);

    return (
        <>
            <h1>ContextAPiReactApp</h1>

            
            
            <CartContext.Provider value={{productCount, name: "utkarsh", setPrductCount}}>
                <GroceryCompoent />
                <ProductDetailComponent />
                <ReuseComponent />
            </CartContext.Provider>

        </>
    );
}

export default ContextAPiReactApp;

// STEPS 
// 1. Create components and its Hirarchy. (DONE) (SEE DIAGRAM)
// 2. Create a Context
// 3. Connect Components to context through PROVIDER <CartContext.provider> 
// 4. GETTING AND SETTING THE Data through useContext 