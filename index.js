import React, {
	Component,
	Children,
} from 'react';

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

export class Switch extends Component {	
	render() {
		const props  = this.props;
		const { $, target, children = [] } = props;
		const Cases = React.Children.map(
			children,
			child => React.cloneElement(child, { target: target })
		);
		return (
			<$ {...props}>
				{Cases}
			</$>
		);
	}

	static Case(props) {
		const { $, value, target, children } = props;
		if(target === value) {
			return (
				<$ {...props}>
					{children}
				</$>
			);
		} else {
			return null;
		}
	}
}