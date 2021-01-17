import React from 'react';
import SignUp from './auth/signup';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './private';

import Dashboard from '../pages/dashboard';
import Login from './auth/login';
import ForgotPassword from './auth/pwreset';

// import CartContext from './cart/context';
// import useCart from '../hooks/use-cart';
import Layout from './layout';
import Homepage from '../pages/homepage';
// import AboutPage from '../pages/about';
import MerchPage from '../pages/merch';
import CartPage from '../pages/cart';

import './styles.css';

export default function App() {
	return (
		<Container
			className='d-flex align-items-center justify-content-center background-color'
			style={{ minHeight: '100vh' }}
		>
			<div
				// className='w-100'
				// style={{ maxWidth: '400px' }}
			>
				<Router>
					<AuthProvider>
						<Layout>
							<Switch>
								<PrivateRoute exact path='/dashboard' component={Dashboard} />

								<PrivateRoute path='/merch' component={MerchPage} />

								<PrivateRoute path='/cart' component={CartPage} />

								<Route exact path='/' component={Homepage} />

								<Route path='/signup' component={SignUp} />

								<Route path='/login' component={Login} />

								<Route path='/forgot-password' component={ForgotPassword} />
							</Switch>
						</Layout>
					</AuthProvider>
				</Router>
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