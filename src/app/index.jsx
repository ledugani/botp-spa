import React from 'react';
import SignUp from './auth/signup';
import { Container } from 'react-bootstrap';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import CartContext from './cart/context';
// import useCart from '../hooks/use-cart';
// import Layout from './layout';
// import Homepage from '../pages/homepage';
// import AboutPage from '../pages/about';
// import MerchPage from '../pages/merch';
// import CartPage from '../pages/cart';

import './styles.css';

export default function App() {
	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<div
				className='w-100'
				style={{ maxWidth: '400px' }}
			>
				<SignUp />
			</div>
		</Container>
	)

	// return (
	// 	<CartContext.Provider value={useCart([])}>
	// 		<BrowserRouter>
	// 			<Layout>
	// 				<Switch>
	// 					<Route exact path='/'>
	// 						<Homepage />
	// 					</Route>

	// 					<Route path='/about'>
	// 						<AboutPage />
	// 					</Route>

	// 					<Route path='/merch'>
	// 						<MerchPage />
	// 					</Route>

	// 					<Route path='/cart'>
	// 						<CartPage />
	// 					</Route>
	// 				</Switch>
	// 			</Layout>
	// 		</BrowserRouter>
	// 	</CartContext.Provider>
	// );
}