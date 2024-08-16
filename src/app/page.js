"use client";
import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { CartContext } from './layout';
import { useRouter } from 'next/navigation';

export default function Home() {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/product.json');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAddToCartAndRedirect = (product) => {
        addToCart(product);
        router.push('/cart'); // Redirect to cart page after adding to cart
    };

    return (
        <div className="container">
            <h1 className="h1-page">Product Listing</h1>
            <div className="grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={handleAddToCartAndRedirect}
                    />
                ))}
            </div>
        </div>
    );
}
