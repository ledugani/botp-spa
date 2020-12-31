import { useState } from 'react';

export default function useCart() {
	const [cart, setCart] = useState([])

	function addToCart(product) {
		setCart(prev => [...prev, product])
	}

	return {
		cart,
		addToCart,
	};
}