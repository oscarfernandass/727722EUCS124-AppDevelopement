import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, category) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex((i) => i.name === item.name && i.category === category);
            if (itemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += 1;
                return updatedItems;
            } else {
                return [...prevItems, { ...item, quantity: 1, category }];
            }
        });
    };

    const value = {
        cartItems,
        addToCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
