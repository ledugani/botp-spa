export function addToCart(product) {
	let existingItems = JSON.parse(localStorage.getItem("allItems"));
	if (existingItems == null) {
		existingItems = []
	};

	localStorage.setItem('currentItem', JSON.stringify(product));

	existingItems.push(product);
	localStorage.setItem('allItems', JSON.stringify(existingItems));
}

export function getCartItems() {
	const data = localStorage.getItem('cart');
}

export function removeFromCart() {}

export function clearCart() {}