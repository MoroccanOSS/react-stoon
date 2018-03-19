import React from 'react';

export default Show = (props) => {
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