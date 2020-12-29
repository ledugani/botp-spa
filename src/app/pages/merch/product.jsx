import React, { useState } from 'react';
import ColorOptions from './color-options';
import QtyOptions from './quantity-options';
import SizeOptions from './size-options';
import './styles.css';

export default function Product({ name, sizes, qtys, colors }) {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const [selectedQty, setSelectedQty] = useState(qtys[0]);
	const [selectedSize, setSelectedSize] = useState(sizes[0]);

	return (
		<div className="product">
			<div className="name">{name}</div>

			<SizeOptions
				sizes={sizes}
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>

			<QtyOptions
				Qtys={qtys}
				selectedQty={selectedQty}
				setSelectedQty={setSelectedQty}
			/>

			<ColorOptions
				colors={colors}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>

			<div className="price">
				Price: ${selectedStyle.price.toFixed(2)}
				{/* limits characters to a number of spaces - 2 for dollars (.00) */}
			</div>

			<img width={400} src={selectedColor.image} alt={name} />
		</div>
	);
}