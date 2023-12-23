import React from 'react';
import { FaStar } from 'react-icons/fa';

// Star is a functional component that renders a star icon
// The star can either be selected (filled) or not selected (empty)
export default function Star(props) {
	return (
		<FaStar
			color={props.selected ? '#FFC300' : '#dddddd'}
			onClick={props.onSelect}
		/>
	);
}
