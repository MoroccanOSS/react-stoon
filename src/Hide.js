import React from 'react';

export default (props) => {
	const { if: invisible, children } = props;
	return (invisible)?  null : children;
}