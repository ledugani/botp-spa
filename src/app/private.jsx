import React from 'react';
import CartContext from './cart/context';
import useCart from '../hooks/use-cart';
import Layout from './layout';
import Dashboard from '../pages/dashboard';
import MerchPage from '../pages/merch';
import CartPage from '../pages/cart';

export default function Private() {
	return (
		<CartContext.Provider value={useCart([])}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path='/'>
							<Dashboard />
						</Route>

						<Route path='/merch'>
							<MerchPage />
						</Route>

						<Route path='/cart'>
							<CartPage />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</CartContext.Provider>
	)
}