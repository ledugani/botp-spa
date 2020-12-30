import React, { useState } from 'react';

import './styles.css';

export default function Product({
	name,
	imageUrl,
	price,
	tags,
	colors
}) {
	return (
		<div className="product">
			<img width={300} src={imageUrl} alt={name} />
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