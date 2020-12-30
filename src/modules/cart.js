export function addToCart(product) {
	const cart = getCartItems();
	localStorage.setItem('cart', JSON.stringify([product]));
}

export function getCartItems() {
	const data = localStorage.getItem('cart');
	debugger;
}

export function removeFromCart() {}

export function clearCart() {}