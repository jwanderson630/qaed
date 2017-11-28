/*jshint esversion: 6 */

import React, { Component } from 'react';
import TableComponent from '../TableComponent/table.component.js';
import './email-workspace.component.css';
import { Redirect } from 'react-router-dom';

class EmailWorkspaceComponent extends Component {

	constructor() {
		super();
		this.state = {
			showTable: false,
			opacity: 1
		}
	}

	render() {
		return (
			<div id="emailWorkspace" style={{opacity: this.state.opacity}}>
				<Redirect to="/email/active"/>
				<TableComponent
				 tabs={['Active', 'Templates', 'Archived']} 
				 activeTab={this.props.match.params.activeTab || 'Active'}
				 path='/email/'
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

	componentWillUnmount() {
		this.setState({
			opacity: 0
		})
	}
}

export default EmailWorkspaceComponent;