"use client"; // Ensures this file is treated as a client component
import './globals.css';
import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export default function RootLayout({ children }) {
    const [cartItems, setCartItems] = useState([]);

    /*const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemInCart = prevItems.find((item) => item.id === product.id);
            if (itemInCart) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };
*/

const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
};




    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
            <html lang="en">
                <body>{children}</body>
            </html>
        </CartContext.Provider>
    );
}
