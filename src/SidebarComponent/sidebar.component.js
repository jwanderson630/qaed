/*jshint esversion: 6 */

import React, { Component } from 'react';
import ClassNames from 'classnames';
import './sidebar.component.css';
import { Link } from 'react-router-dom';

class SidebarComponent extends Component {

	constructor() {
		super();
		this.state = {
			navExpand: false,
		};
	}

	render() {
		return(
		<div className={ClassNames("sidebar",{'expand': this.state.navExpand})}>
				<div className='side-navs'>
					<div className="toggle" onClick={() => this.expandNav()}>
						<div className="nav-title">Menu</div>
						<div className="toggle-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d={this.state.navExpand ? "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" : "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"}/></svg></div>
					</div>
					<div className="s-nav">
						<Link to='/clients/active' className="s-btn">
							<div className="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="#fff"  d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-10 13.597v.403h-10v-.417c-.004-1.112.044-1.747 1.324-2.043 1.403-.324 2.787-.613 2.122-1.841-1.973-3.637-.563-5.699 1.554-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841 1.284.297 1.328.936 1.323 2.057zm6-9.597h-4v2h4v-2zm0 4h-4v2h4v-2zm0 4h-4v2h4v-2z"/>
								</svg>
							</div>
							<div className="btn-label">Clients</div>
							<div className="btn-drop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></div>
						</Link>
						<div className="s-label">Clients</div>
					</div>
					<div className="s-nav">
						<Link to='/email/active' className="s-btn">
							<div className="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path  fill="#fff" d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
								</svg>
							</div>
							<div className="btn-label">Email</div>
							<div className="btn-drop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></div>
						</Link>
						<div className="s-label">Email</div>
					</div>
					<div className="s-nav">
						<Link to='/pages/active' className="s-btn">
							<div className="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="#fff"  d="M4 4v20h20v-20h-20zm18 18h-16v-13h16v13zm-3-3h-10v-1h10v1zm0-3h-10v-1h10v1zm0-3h-10v-1h10v1zm2-11h-19v19h-2v-21h21v2z"/>
								</svg>
							</div>
							<div className="btn-label">Landing Pages</div>
							<div className="btn-drop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></div>
						</Link>
						<div className="s-label">Landing Pages</div>
					</div>
				</div>
			</div>
		);
	}

	expandNav() {
		this.setState((prevState) => {
			return {navExpand: !prevState.navExpand};
		})
	}
}

export default SidebarComponent