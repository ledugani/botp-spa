export function addToCart(product) {
	localStorage.setItem('cart', [product]);
}

export function getCartItems() {
}

export function removeFromCart() {}

export function clearCart() {}