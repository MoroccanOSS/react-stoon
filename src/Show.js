import React from 'react';

export default (props) => {
	const { $, if: visible, children } = props;
	if(visible) {
		return (
			<$ {...props}>
				{children}
			</$>
		);
	} else {
		return null;
	}
}