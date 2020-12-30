export function addToCart(product) {
	localStorage.setItem('cart', JSON.stringify([product]));
}

export function getCartItems() {
}

export function removeFromCart() {}

export function clearCart() {}