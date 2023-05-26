import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(
      JSON.parse(localStorage.getItem('cartItems')) || []
    );

    const addItemToCart = item => {
      setCartItems([...cartItems, item]);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
    };

    const removeItemFromCart = ({id}) => {
      setCartItems(cartItems.filter(item => item.id !== id));
      localStorage.setItem(
        'cartItems',
        JSON.stringify(cartItems.filter((cartItem) => cartItem.id !== id))
      );
    };

    const itemsInCartAmmount = () => cartItems.reduce((accumulator, item) => (accumulator += item?.amount), 0);

    const clearCart = () => {
      setCartItems([]);
      localStorage.setItem('cartItems', JSON.stringify([]));
    }

    const isInCart = id => cartItems.some(item => item.id === id);

    const totalPrice = () => cartItems.reduce((accumulator, item) => (accumulator += item.price * item.amount), 0);

    return (
        <CartContext.Provider
          value={{
            cartItems,
            setCartItems,
            addItemToCart,
            removeItemFromCart,
            itemsInCartAmmount,
            clearCart,
            isInCart,
            totalPrice
          }}
        >
          {children}
        </CartContext.Provider>
      );
};