'use client'

import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderProps{
    childeren: React.ReactNode

}

const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    return ( 
        <CartContextProvider>{children}</CartContextProvider>
     );
}
 
export default CartProvider;