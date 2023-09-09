import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export function useCartContext() {
    return useContext(CartContext);
}
function CartProvider({ children }) {
    const [cartList, setCartList] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const updateCartItemQuantity = (itemId, quantity) => {
        const updatedCart = cartList.map((item) => {
            if (item.id === itemId) {
                const newQuantity = item.cantidad + quantity;
                return { ...item, cantidad: newQuantity };
            }
            return item;
        });
        setCartList(updatedCart);

        const totalQuantity = updatedCart.reduce((total, item) => total + item.cantidad, 0);
        setCartQuantity(totalQuantity);
    };


    const addCartList = (item) => {

        const existingItem = cartList.find((cartItem) => cartItem.nombre === item.nombre);

        if (existingItem) {

            const updatedCartList = cartList.map((cartItem) =>
                cartItem.nombre === item.nombre
                    ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
                    : cartItem
            );
            setCartList(updatedCartList);
        } else {

            setCartList([...cartList, item]);
        }


        setCartQuantity(cartQuantity + item.cantidad);
    };
    const removeCartList = (itemId) => {
        const removedItem = cartList.find((item) => item.id === itemId);
        if (removedItem) {
            setCartList(cartList.filter((item) => item.id !== itemId));
            setCartQuantity(cartQuantity - removedItem.cantidad);
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            cartQuantity,
            addCartList,
            removeCartList,
            updateCartItemQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
