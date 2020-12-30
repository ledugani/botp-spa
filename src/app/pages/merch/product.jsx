import React, { useState } from 'react';
import ColorOptions from './color-options';
import StyleOptions from './style-options';
import './styles.css';

export default function Product({ name, image, sizes, styles, colors }) {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const [selectedStyle, setSelectedStyle] = useState(styles[0]);

	return (
		<div className="product">
			<div className="name">{name}</div>

			<ColorOptions
				colors={colors}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>

			<StyleOptions
				styles={styles}
				selectedStyle={selectedStyle}
				setSelectedStyle={setSelectedStyle}
			/>

			<img
				width={400}
				src={selectedColor.image}
				alt={name}
			/>
		</div>
	);
}