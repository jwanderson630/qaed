/*jshint esversion: 6 */

import React, { Component } from 'react';
import TableComponent from '../TableComponent/table.component.js';
import './landing-page-workspace.component.css';
import { Redirect } from 'react-router-dom';
import SlideInTransition from '../Transitions/SlideInTransition/slide-in.transition.js';
import { TransitionGroup } from 'react-transition-group';

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
				<TransitionGroup>
					<SlideInTransition>
						<TableComponent
							tabs={['Active', 'Templates', 'Archived']}
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
								]
							}
						}/>
					</SlideInTransition>
				</TransitionGroup>
			</div>
		)
	}
}

export default LandingPageWorkspaceComponent;