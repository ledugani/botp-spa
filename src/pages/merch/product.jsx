import React, { useState, useContext } from 'react';
import cartContext from '../../app/cart/context';

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
	const ctx = useContext(cartContext);
	return (
		<div
			key={id}
			className={`product ${hover && 'hover'}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{
				hover &&
				<div
					className='add-to-cart'
					onClick={() =>
						ctx.addToCart({
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