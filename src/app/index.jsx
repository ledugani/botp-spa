import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";
import MerchPage from "./pages/merch";

export default function App() {
	return (
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
					</Switch>
				</Layout>
			</BrowserRouter>
		);
}