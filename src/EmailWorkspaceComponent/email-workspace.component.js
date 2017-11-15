/*jshint esversion: 6 */

import React, { Component } from 'react';
import TableComponent from '../TableComponent/table.component.js';
import './email-workspace.component.css';

class EmailWorkspaceComponent extends Component {

	render(){
		return (
			<div id="emailWorkspace">
				<div className="header">
					Email
				</div>
				<div className="container">
					<TableComponent tabs={['Active', 'Templates', 'Archived']} activeTab={this.props.match.params.activeTab}/>
				</div>
			</div>
		)
	}
}

export default EmailWorkspaceComponent;