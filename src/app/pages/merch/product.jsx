import React, { useState } from 'react';

import Options from './options';

import './styles.css';

export default function Product({ name, image, sizes, styles, colors }) {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const [selectedStyle, setSelectedStyle] = useState(styles[0]);
	const [selectedSize, setSelectedSize] = useState(sizes[0]);


	return (
		<div className="product">
			<div className="name">{name}</div>

			<Options
				label='Available Sizes: '
				options={sizes}
				selectedOption={selectedSize}
				setSelectedOption={setSelectedSize}
			/>

			<Options
				label='Available Colors: '
				options={colors}
				selectedOption={selectedColor}
				setSelectedOption={setSelectedColor}
			/>

			<Options
				label='Available Styles: '
				options={styles}
				sel0ectedOption={selectedStyle}
				setSelectedOption={setSelectedStyle}
			/>

			<div className="price">
				Price: {(selectedStyle.price * selectedSize.price).toFixed(2)}
			</div>

			<img
				width={400}
				src={selectedColor.image}
				alt={name}
			/>
		</div>
	);
}