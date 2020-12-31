import React from 'react';
import Seo from '../../app/seo';
import Product from './product';

import products from '../../data/products.json';

export default function MerchPage({  }) {
	return (
		<>
			<Seo title="Merch" />
			<h1>Merch</h1>
			<div className="products">
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</>
	);
}