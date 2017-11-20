import React, { Component } from 'react';
import './header.component.css';

class HeaderComponent extends Component {

	constructor() {
		super();
		this.state = {
			headerHeight: '75px',
			headerOpacity: 1,
		}
	}

	render() {
		return (
			<div className="header-container" style={{maxHeight: this.state.headerHeight}}>
				<h1 className="header">{this.props.match.params.header[0].toUpperCase() + this.props.match.params.header.substr(1)}</h1>
			</div>
		)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.getHeight.bind(this));
	}

	getHeight() {
		this.setState({
			headerHeight: 75 - window.scrollY >= 0 ? 75 - window.scrollY + "px": 0,
			headerOpacity: 75 - window.scrollY >= 0 ? 75 / window.scrollY: 0,
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll');
	}


}

export default HeaderComponent;