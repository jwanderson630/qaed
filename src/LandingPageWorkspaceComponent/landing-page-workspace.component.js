/*jshint esversion: 6 */

import React, { Component } from 'react';
import TableComponent from '../TableComponent/table.component.js';
import './landing-page-workspace.component.css';
import { Redirect } from 'react-router-dom';

class LandingPageWorkspaceComponent extends Component {

	constructor() {
		super();
		this.state = {
			showTable: false
		}
	}

	render(){
		return (
			<div id="pagesWorkspace">
				<Redirect to="/pages/active"/>
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

export default LandingPageWorkspaceComponent;