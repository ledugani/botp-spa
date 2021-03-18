import { useState } from 'react';

export default function useArtists() {
	const [artistItems, setArtistItems] = useState([]);

	function addToArtists(product) {
		setArtistItems((prev) => {
			const existing = cartItems.find((item) => item.id === product.id)

			return existing
			? [
					...cartItems.map(item =>
						item.id === product.id
							? {...item, qty: item.qty + 1}
							: item,
					),
				]
			: [...prev, { ...product, qty: 1 }]
		})
	}

	function removeFromArtists(product) {
		setArtistItems((prev) => [
			...prev.filter(item => item.id !== product.id)
		]);
	}

	return {
		artistItems,
		addToArtists,
		removeFromArtists,
	}
}