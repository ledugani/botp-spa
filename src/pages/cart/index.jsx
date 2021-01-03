import React, { useContext } from 'react';
import Seo from '../../app/seo';
import cartContext from '../../app/cart/context';
import { formatCurrency } from '../../modules/currency';

export default function CartPage() {
	const { cartItems, changeQty  } = useContext(cartContext);

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
						cartItems.map(product => (
							<tr>
								<td>{product.name}</td>
								<td>${ product.price }</td>
								<td>
									<input
										type="text"
										value={product.qty}
										onChange={(e) => changeQty(product, e.target.value)}
									/>
								</td>
								<td>{ formatCurrency(product.price * product.qty) }</td>
							</tr>)
						)
					}
				</tbody>

				<hr className='horizontal-rule' />
			</table>
		</>
	);
}