import React from 'react';

export default class LifeCycleAware extends React.Component {

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
	
	render() {
		return this.props.children;
	}
}
