import React, { useContext } from 'react';
import Context from './context';
import { formatCurrency } from '../../modules/currency';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './form';
import './styles.css';

export default function Cart() {
	const { cartItems, changeQty } = useContext(Context);

	function total(cartItems) {
		return cartItems.reduce(function (acc, item) {
			return acc += item.price * item.qty;
		}, 0);
	}

	return (
		<div>
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
						cartItems.length === 0 && "No items in your cart."
					}

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

				<tfoot>
					<tr>
						<td colspan={3} className='total-label'>Total:</td>
						<td className='total'> ${total(cartItems)} </td>
					</tr>
				</tfoot>
			</table>

			{
				cartItems.length > 0 && (
					<>
						<hr />
						<Elements stripe={loadStripe('pk_test_51I5wwPHrM2yHNGgRL7wUPH3hqincdvKDcKWpgqQrYRxhlbbb9pnE3D2BovrdtdXXDtQhkRecK3HQmfvfzjDnapdW000Vo0VGcq')}>
							<CheckoutForm />
						</Elements>
					</>
				)
			}
		</div>
	);
}