import React, { Component } from 'react';
import { 
	BrowserRouter as Router,
	Route
 } from 'react-router-dom';
 import EmailWorkspaceComponent from '../EmailWorkspaceComponent/email-workspace.component.js';
 import './workspace.component.css';

 class WorkspaceComponent extends Component {


 	render() {
 		return (
 			<div className="workspace">
 				<Route exact path="/email/:activeTab" component={EmailWorkspaceComponent}/>
 			</div>
 		)
 	}
 }

 export default WorkspaceComponent