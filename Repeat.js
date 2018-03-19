import React from 'react';

export const Repeat = (props) => {
	const { $, times, key = indexAsKey, children } = props;
	return [...Array(times)].map(
		(el, index) => {
			return (
				<$ key={key(index)} {...props}>
					{children}
				</$>
			);
		}
	);

	function indexAsKey(index) {
		return index;
	}
}