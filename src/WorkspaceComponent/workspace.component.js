import React, { Component } from 'react';
import { 
	BrowserRouter as Router,
	Route
 } from 'react-router-dom';
 import EmailWorkspaceComponent from '../EmailWorkspaceComponent/email-workspace.component.js';
 import ClientWorkspaceComponent from '../ClientWorkspaceComponent/client-workspace.component.js';
 import LandingPageWorkspaceComponent from '../LandingPageWorkspaceComponent/landing-page-workspace.component.js';
 import ClassNames from 'classnames';
 import { Redirect } from 'react-router-dom';
 import './workspace.component.css';

 class WorkspaceComponent extends Component {

 	render() {
 		return (
 			
 			<div className="workspace">
					<Route exact path="/email/:activeTab?" component={EmailWorkspaceComponent}/>
					<Route exact path="/pages/:activeTab?" component={LandingPageWorkspaceComponent}/>
					<Route exact path="/clients/:activeTab?" component={ClientWorkspaceComponent}/>
 			</div>
 		)
 	}

 }

 export default WorkspaceComponent