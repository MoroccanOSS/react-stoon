import React, {
	Component,
	Children,
} from 'react';

export class LifeCycleAware extends Component {

	constructor(props) {
		super(props);
		const { construct, willMount, didMount } = props;
		this.construct = construct;
		this.willMount = willMount;
		this.didMount = didMount;
		this.construct && this.construct();
	}

	componentDidMount() {
		return this.didMount && this.didMount();
	}

	componentWillMount() {
		return this.willMount && this.willMount();
	}
	
	render(props) {
		const { $, children } = this.props;
		return (
			<$ {...this.props}>
				{children}
			</$>
		);
	}
}

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