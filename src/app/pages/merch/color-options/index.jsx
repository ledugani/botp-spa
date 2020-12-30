import React from 'react';

export default function ColorOptions({
	colors,
	selectedColor,
	setSelectedColor
}) {
	return (
		<div className="colors">
				available in:
				{colors.map((color) => (
					<span
						className={`color ${
							selectedColor === color ? 'selected' : null
						}`}
						onClick={() => setSelectedColor(color)}>
						{color.name}
					</span>
				))}
			</div>
	);
}