import React from 'react';
import Seo from '../../app/seo';
import Cart from '../../app/cart';

export default function CheckoutPage() {
	return (
		<>
			<Seo title='Checkout Items' />
			<h1>
				This is the checkout page!
			</h1>
			<Cart />
		</>
	);
}