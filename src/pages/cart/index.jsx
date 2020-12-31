import React, { useContext } from 'react';
import Seo from '../../app/seo';
import cartContext from '../../app/cart-context';
import { formatCurrency } from '../../modules/currency';

function withQuantities (products) {
	return products.reduce((acc, product) => {
		const existing = acc.find((p) => product.id === p.id);
		if (existing) {
			acc.slice()
			return [
				...acc.map((p) =>
					p.id === product.id ? { ...p, qty: p.qty + 1 } : p
				),
			];
		} else {
			acc.push({ ...product, qty: 1 });
		}
		return acc;
	}, []);
}

export default function CartPage() {
	const { cart } = useContext(cartContext);
	return (
		<>
			<Seo title='My Cart' />
			<h1>Cart</h1>
			<table width='100%' cellSpacing={0} cellPadding={0}>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
					</tr>
				</thead>

				<tbody>
					{
						withQuantities(cart).map(product => (
							<tr>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.qty}</td>
								<td>{ formatCurrency(product.price * product.qty) }</td>
							</tr>)
						)
					}
				</tbody>
			</table>
		</>
	);
}