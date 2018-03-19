import React from 'react';

export default (props) => {
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
