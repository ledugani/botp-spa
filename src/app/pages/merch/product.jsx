import React, { useState } from 'react';
import ColorOptions from './color-options';
import './styles.css';

export default function Product({ name, image, sizes, styles, colors }) {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	return (
		<div className="product">
			<div className="name">{name}</div>

			<ColorOptions
				colors={colors}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>

			<img
				width={400}
				src={selectedColor.image}
				alt={name}
			/>
		</div>
	);
}