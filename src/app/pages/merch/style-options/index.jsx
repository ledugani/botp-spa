import React from 'react';

export default function StyleOptions({
	styles,
	selectedStyle,
	setSelectedStyle
}) {
	return (
		<div className="colors">
				available styles:
				{styles.map((style) => (
					<span
						className={`style ${
							selectedStyle === style ? 'selected' : null
						}`}
						onClick={() => setSelectedStyle(style)}>
						{style.name}
					</span>
				))}
			</div>
	);
}