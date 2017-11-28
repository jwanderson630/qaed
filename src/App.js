/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import SidebarComponent from './SidebarComponent/sidebar.component.js';
import WorkspaceComponent from './WorkspaceComponent/workspace.component.js';

import {
  BrowserRouter as Router,
} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
        <Router>
          <div id="app">
            <div className="sidebar">
              <SidebarComponent />
            </div>
            <div className="main">
              <WorkspaceComponent path="/workspace" />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
