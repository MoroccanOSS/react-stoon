import React from 'react';

export default class Switch extends React.Component {	
	render() {
		const { target, children = [] } = this.props;
		const defaultCase = children.filter(
			child => (child.type === Switch.Default)
		);
		const cases = children.filter(
			child => ((child.type === Switch.Case) && (child.props.value === target))
		);
		return (cases.length)? cases : defaultCase;
	}

	static Case({ children }) {
		return children;
	}
	static Default({ children }) {
		return children;
	}
}
