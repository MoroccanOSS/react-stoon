import React from 'react';

export default class LifeCycleAware extends React.Component {

	constructor(props) {
		super(props);
		const { construct, willMount, didMount, willUnmount } = props;
		this.construct = construct;
		this.willMount = willMount;
		this.didMount = didMount;
		this.willUnmount = willUnmount;

		this.construct && this.construct();
	}

	componentDidMount() {
		return this.didMount && this.didMount();
	}

	componentWillMount() {
		return this.willMount && this.willMount();
	}
	
	componentWillUnmount() {
		return this.willUnmount && this.willUnmount();
	}
	
	render() {
		return this.props.children;
	}
}
