import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = item => {
      setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = ({id}) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };

    const itemsInCartAmmount = () => cartItems.reduce((accumulator, item) => (accumulator += item?.amount), 0);

    const clearCart = () => setCartItems();

    const isInCart = id => cartItems.some(item => item.id === id);

    return (
        <CartContext.Provider
          value={{
            cartItems,
            setCartItems,
            addItemToCart,
            removeItemFromCart,
            itemsInCartAmmount,
            clearCart,
            isInCart
          }}
        >
          {children}
        </CartContext.Provider>
      );
};