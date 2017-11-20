/*jshint esversion: 6 */

import React, { Component } from 'react';
import TableComponent from '../TableComponent/table.component.js';
import './email-workspace.component.css';

class EmailWorkspaceComponent extends Component {

	render(){
		return (
			<div id="emailWorkspace">
				<TableComponent
				 tabs={['Active', 'Templates', 'Archived']} 
				 activeTab={this.props.match.params.activeTab} 
				 data={ {
					headers: ['Project Name', 'Client', 'Last Modified'],
					projects: [
						{
							'Project Name': 'Project 1',
							'Client': 'Client 1',
							'Last Modified': Date.now()
						},
						{
							'Project Name': 'Project 2',
							'Client': 'Client 2',
							'Last Modified': Date.now()
						}
					]}}/>
			</div>
		)
	}
}

export default EmailWorkspaceComponent;