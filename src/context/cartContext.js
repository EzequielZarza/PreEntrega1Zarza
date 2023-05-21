import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = item => {
      setCartItems([...cartItems, item]);
    }

    const removeItemFromCart = ({id}) => {
      const itemIdToDelete = cartItems.findIndex(unwantedItem => unwantedItem.id === id);
      let remainingItems = [...cartItems];
      remainingItems.splice(itemIdToDelete, 1);
      setCartItems(remainingItems);
    }

    const itemsInCartAmmount = () => cartItems.length;

    return (
        <CartContext.Provider
          value={{
            cartItems,
            setCartItems,
            addItemToCart,
            removeItemFromCart,
            itemsInCartAmmount
          }}
        >
          {children}
        </CartContext.Provider>
      );
};