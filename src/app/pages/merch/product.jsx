import React, { useState } from 'react';
import Options from './options';
import './styles.css';

export default function Product({ name, sizes, qtys, options }) {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	return (
		<div className="product">
			<div className="name">{name}</div>

			<Options
				sizes={sizes}
				selectedSize={selectedOption}
				setSelectedSize={setSelectedOption}
			/>
{/*
			<QtyOptions
				Qtys={qtys}
				selectedQty={selectedQty}
				setSelectedQty={setSelectedQty}
			/>

			<ColorOptions
				colors={colors}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/> */}

			<div className="price">
				Price: ${selectedOption.price.toFixed(2)}
				{/* limits characters to a number of spaces - 2 for dollars (.00) */}
			</div>

			<img width={400} src={selectedOption.image} alt={name} />
		</div>
	);
}

// import React, { useState } from 'react';
// import Options from './options';
// import './styles.css';

// export default function Product({ name, styles, sizes, qtys }) {
// 	const [selectedSize, setSelectedSize] = useState(sizes[0]);
// 	const [selectedStyle, setSelectedStyle] = useState(styles[0]);
// 	const [selectedQuantity, setSelectedQuantity] = useState(qtys[0]);

// 	return (
// 		<div className="product">
// 			<div className="name">{name}</div>

// 			<Options
// 				label='Available Sizes:'
// 				options={sizes}
// 				selectedOption={selectedSize}
// 				setSelectedOption={setSelectedSize}
// 			/>

// 			<Options
// 				label='Quantity:'
// 				options={qtys}
// 				selectedOption={selectedQuantity}
// 				setSelectedOption={setSelectedQuantity}
// 			/>

// 			<Options
// 				label='Available Styles:'
// 				options={styles}
// 				selectedOption={selectedStyle}
// 				setSelectedOption={setSelectedStyle}
// 			/>

// 			<div className="price">
// 				Price: ${(selectedStyle.price * selectedSize.price).toFixed(2)}
// 				{/* limits characters to a number of spaces - 2 for dollars (.00) */}
// 			</div>

// 			<img width={400} src={selectedStyle.image} alt={name} />
// 		</div>
// 	);
// }