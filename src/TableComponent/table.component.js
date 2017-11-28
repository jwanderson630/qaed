import React, {Component} from 'react';
import './table.component.css';
import ClassNames from 'classnames';
import { Link, Redirect } from 'react-router-dom';

class TableComponent extends Component {


	render() {
		return (
			<div className="table">
				<div className="t-tabs">
					{this.getTabs()}
				</div>
				<div className="t-content">
					<table>
						{this.makeTable()}
					</table>
				</div>
			</div>
		)
	}

	getTabs() {
		return this.props.tabs.map((tab) => {
			return ( 
				<Link to={this.props.path + tab.toLowerCase()}>
					<div className={ClassNames('t-tab', {'active': tab.toLowerCase() === this.props.activeTab.toLowerCase()})}>{tab}</div>
				</Link>
			);
		});
	}

	makeTable() {
		return (
			<tbody>
			<tr className="t-headers">
				{this.props.data.headers.map((header) => {
					return (
						<td className="t-header">{header}</td>
					)
				})}
			</tr>
				{this.props.data.projects.map((project) => {
					return (
						<tr className="t-row">
							{
								this.props.data.headers.map((col) => {
									return (
										<td className="t-cell">
											{project[col]}
										</td>
									)
								})
							}
						</tr>
					)
				})}
			</tbody>
		)
	}
}

export default TableComponent;

