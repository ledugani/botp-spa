import React, { useContext } from 'react';
import Context from './context';
import { formatCurrency } from '../../modules/currency';

export default function Cart() {
	const { cartItems, changeQty } = useContext(Context);

	return (
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
									onChange={(e) => changeQty(product, parseInt(e.target.value))}
								/>
							</td>
							<td>{ formatCurrency(product.price * product.qty) }</td>
						</tr>)
					)
				}
			</tbody>
		</table>
	);
}