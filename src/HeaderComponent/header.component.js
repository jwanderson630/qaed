import React, { Component } from 'react';
import './header.component.css';
import ClassNames from 'classnames';

class HeaderComponent extends Component {

	constructor() {
		super();
		this.state = {
			headerHeight: '75px',
			headerOpacity: 1,
			currentHeader: '',
			animate: false
		}
	}

	render() {
		return (
			<div className="header-container" style={{maxHeight: this.state.headerHeight}}>
				<h1 className={ClassNames("header")} style={{opacity: this.state.headerOpacity}}><span className={ClassNames("header-text", {"animate": this.state.animate})}>{this.state.currentHeader}</span></h1>
			</div>
		)
	}

	componentDidMount() {
		this.setState({
			currentHeader: this.fixHeader(this.props.match.params.header)
		})
	}

	fixHeader(header) {
		return header[0].toUpperCase() + header.substr(1)
	}

	animateHeader(newHeader) {
		this.setState({
			animate: true
		})
		window.setTimeout(() => {
			this.setState({
				currentHeader: this.fixHeader(newHeader)
			})
		}, 350);
		window.setTimeout(() => {
			this.setState({
				animate: false
			})
		}, 700);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.match.params.header !== this.props.match.params.header) {
			this.animateHeader(newProps.match.params.header);
		}
	
	}


}

export default HeaderComponent;