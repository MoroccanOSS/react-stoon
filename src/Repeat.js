import React from 'react';

export default class Repeat extends React.Component {

	render() {
		const { times, foreach, as, children } = this.props;
		if(times && foreach) {
			console.log('please make sure to specify either times or foreach');
		}
		if(times) {
			return (
				<Repeat.Times $={times} as={as}>
					{children}
				</Repeat.Times>
			);
		} else if(foreach) {
			return (
				<Repeat.Foreach $={foreach} as={as}>
					{children}
				</Repeat.Foreach>
			);
		} else {
			return null;
		}
	}

	static Foreach({ $ = [], as = 'el', children }) {
		return $.map(
			(el) => React.Children.map(
				children,
				(child) => {
					const additionalProps = {};
					additionalProps[as] = el;
					return React.cloneElement(child, additionalProps);
				}
			)
		);
	}

	static Times({ $, as = 'el', children }) {
		const arr = [...Array($)].map((el, index) => index);
		return (
			<Repeat.Foreach $={arr} as={as}>
				{children}
			</Repeat.Foreach>
		);
	}
}
