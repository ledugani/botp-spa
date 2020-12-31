import React, { useState } from 'react';
import useCart from '../../../hooks/use-cart';

import './styles.css';

export default function Product({
	id,
	name,
	imageUrl,
	price,
	tags,
	colors
}) {
	const [hover, setHover] = useState(false);
	const { cart, addToCart } = useCart();
	return (
		<div
			className={`product ${hover && 'hover'}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{cart.length}
			{
				hover &&
				<div
					className='add-to-cart'
					onClick={() =>
						addToCart({
							id,
							name,
							price
						})
					}>
					+<div>Add to Cart</div>
				</div>
			}

			<div className="card">
				<img src={imageUrl} alt={name} />
				<div className="name">{name}</div>
				<div className="price">Price: {price}</div>

				<div className="tags">
					Tags: {tags.map((tag) => (
						<span className="tag">{tag}</span>
					))}
				</div>

				<div className="tags">
					Available in: {colors.map((color) => (
						<span className="tag">{color}</span>
					))}
				</div>
			</div>
		</div>
	);
}