import React, {Component} from 'react';
import './table.component.css';
import ClassNames from 'classnames';
import { Link, Redirect } from 'react-router-dom';

class TableComponent extends Component {

	constructor() {
		super();
		this.state = {
			activeTab : '',
		};
	}

	componentDidMount() {
		this.setState({
			activeTab: this.props.tabs[0],
		});
	}

	render() {
		return (
			<div className="table">
				<div className="t-tabs">
					{this.getTabs()}
				</div>
				<div className="t-border">
					<div className="t-indicator" style={{
						left: this.props.tabs.indexOf(this.state.activeTab) * 151 + "px"}}>
					</div>
				</div>
				<div className="t-content">
					<table className="t-table">
						{this.makeTable()}
					</table>
				</div>
			</div>
		)
	}

	tabClick(tab) {
		this.setState({
			activeTab: tab,
		});
	};

	getTabs() {
		return this.props.tabs.map((tab, i) => {
			return ( 
				<div key={tab + i} className={ClassNames('t-tab', {'active': tab === this.state.activeTab})} onClick={() => this.tabClick(tab)}>{tab}</div>
			);
		});
	}

	makeTable() {
		return (
			<tbody>
			<tr className="t-headers">
				{this.props.data.headers.map((header, i) => {
					return (
						<td key={header + i} className="t-header">{header}</td>
					)
				})}
			</tr>
				{this.props.data.projects.map((project, i) => {
					return (
						<tr key={project + i} className="t-row">
							{
								this.props.data.headers.map((col, i) => {
									return (
										<td key={col + i} className="t-cell">
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

