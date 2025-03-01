import { createContext, Dispatch, SetStateAction } from "react";

const CartContext = createContext({
    productCount: 0,
    name: "utkasrh",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setPrductCount: (): any => {}
});

export default CartContext;
