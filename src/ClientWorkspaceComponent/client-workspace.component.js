/*jshint esversion: 6 */

import React, { Component } from 'react';
import TableComponent from '../TableComponent/table.component.js';
import './client-workspace.component.css';
import { Redirect } from 'react-router-dom';

class ClientWorkspaceComponent extends Component {

	constructor() {
		super();
		this.state = {
			showTable: false
		}
	}

	render(){
		return (
			<div id="clientWorkspace">
				<Redirect to="/clients/active"/>
				<TableComponent
				 tabs={['Active', 'Templates', 'Archived']} 
				 activeTab={this.props.match.params.activeTab || 'Active'}
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

export default ClientWorkspaceComponent;