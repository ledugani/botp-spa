import React, { useState } from 'react';

export default function Product({ name, image, sizes, styles, colors }) {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	return (
		<div className="product">
			<div className="name">{name}</div>
			{colors.map((color) => (
				<div className='color' onClick={() => setSelectedColor(color)}>{color.name}</div>
			))}

			<img width={100} src={selectedColor.image} alt={name} />
		</div>
	);
}