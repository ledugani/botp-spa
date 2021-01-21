import React from 'react';
import { Form } from 'react-bootstrap';

export default function Dropdown(props) {

	const dropdownChanged = (e) => {
		props.changed(e.target.value);
	}

	return (
		<Form.Group controlId="exampleForm.ControlSelect1">
			<Form.Label>Select {props.label}</Form.Label>
			<Form.Control
				as="select"
				value={props.selectedValue}
				onChange={dropdownChanged}
			>
				{
					props.options.map((item, idx) => {
						return <option key={idx} value={item.id}>{item.name}</option>
					})
				}
			</Form.Control>
		</Form.Group>
	)
}
