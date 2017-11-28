import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import EmailWorkspaceComponent from '../EmailWorkspaceComponent/email-workspace.component.js';
import ClientWorkspaceComponent from '../ClientWorkspaceComponent/client-workspace.component.js';
import LandingPageWorkspaceComponent from '../LandingPageWorkspaceComponent/landing-page-workspace.component.js';
import HeaderComponent from '../HeaderComponent/header.component.js';

import './workspace.component.css';

 class WorkspaceComponent extends Component {



 	render() {
 		return (
 			<div className="workspace">
 				<Route path="/:header" component={ HeaderComponent } />
				<Route exact path="/email" component={EmailWorkspaceComponent}/>
				<Route exact path="/pages" component={LandingPageWorkspaceComponent}/>
				<Route exact path="/clients" component={ClientWorkspaceComponent}/>
 			</div>
 		)
 	}

 }

 export default WorkspaceComponent