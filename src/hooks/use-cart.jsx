import { useState } from 'react';

export default function useCart() {
	const [cartItems, setCartItems] = useState([]);

	function addToCart(product) {
		setCartItems(prev => [...prev, product])
	}

	return {
		cartItems,
		addToCart
	}
}