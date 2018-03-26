import React from 'react';

export default (props) => {
	const { if: visible, children } = props;
	return (visible)? children : null;
}