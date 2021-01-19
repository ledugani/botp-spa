import React from 'react';
import SignUp from './auth/signup';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './private';
import Dashboard from '../pages/dashboard';
import Login from './auth/login';
import ForgotPassword from './auth/pwreset';
import Layout from './layout';
import Homepage from '../pages/homepage';
import AboutPage from '../pages/about';
import MerchPage from '../pages/merch';
import CartPage from '../pages/cart';

import './styles.css';

export default function App() {
	return (
		<Router>
			<AuthProvider>
				<Layout>
					<Switch>
						<PrivateRoute exact path='/dashboard' component={Dashboard} />

						<PrivateRoute path='/merch' component={MerchPage} />

						<PrivateRoute path='/cart' component={CartPage} />

						<Route exact path='/' component={Homepage} />

						<Route path='/about' component={AboutPage} />

						<Route path='/signup' component={SignUp} />

						<Route path='/login' component={Login} />

						<Route path='/forgot-password' component={ForgotPassword} />
					</Switch>
				</Layout>
			</AuthProvider>
		</Router>
	)
}