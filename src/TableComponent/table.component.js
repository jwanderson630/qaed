import React, {Component} from 'react';
import './table.component.css';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';

class TableComponent extends Component {


	render() {
		return (
			<div className="table">
				<div className="t-tabs">
					{this.getTabs()}
				</div>
				<div className="t-content">
					TABLE CONTENT
				</div>
			</div>
		)
	}

	getTabs() {
		return this.props.tabs.map((tab) => {
			return ( 
				<Link to={"./" + tab.toLowerCase()}>
					<div className={ClassNames('t-tab', {'active': tab.toLowerCase() === this.props.activeTab.toLowerCase()})}>{tab}</div>
				</Link>
			);
		});
	}
}

export default TableComponent;

