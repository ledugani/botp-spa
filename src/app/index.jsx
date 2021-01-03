import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cartContext from './cart/context';
import useCart from '../hooks/use-cart';

import Layout from './layout';
import Homepage from '../pages/homepage';
import AboutPage from '../pages/about';
import MerchPage from '../pages/merch';
import CartPage from '../pages/cart';

import './styles.css';

export default function App() {
	const { cartItems, addToCart } = useCart()
	return (
		<cartContext.Provider value={{
			cartItems,
			addToCart,
		}}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path='/'>
							<Homepage />
						</Route>

						<Route path='/about'>
							<AboutPage />
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
		</cartContext.Provider>
	);
}