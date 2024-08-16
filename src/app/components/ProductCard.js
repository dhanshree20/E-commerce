"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product, addToCart }) {
    const router = useRouter();

    const handleAddToCart = () => {
        addToCart(product);
        router.push('/cart'); // Redirect to cart page after adding to cart
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}
