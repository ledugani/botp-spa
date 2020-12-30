import React, { useState } from 'react';

import './styles.css';

export default function Product({
	name,
	imageUrl,
	price,
	tags,
	colors
}) {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="product"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
				{hover && 'hover'}
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
	);
}