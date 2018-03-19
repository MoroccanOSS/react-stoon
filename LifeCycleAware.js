import React, {Component} from 'react';

class LifeCycleAware extends Component {

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

export default LifeCycleAware;