import React from 'react';

export default function StyleOptions({
	styles,
	selectedStyle,
	setSelectedStyle
}) {
	return (
		<div className='styles options'>
				available styles:
				{styles.map((style) => (
					<span
						className={`option ${
							selectedStyle === style ? 'selected' : null
						}`}
						onClick={() => setSelectedStyle(style)}>
						{style.name}
					</span>
				))}
			</div>
	);
}