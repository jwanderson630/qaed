/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import SidebarComponent from './SidebarComponent/sidebar.component.js';
import EmailWorkspaceComponent from './EmailWorkspaceComponent/email-workspace.component.js';

import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
        <Router>
          <div id="app">
            <SidebarComponent/>
            <Route exact path="/email/:activeTab" component={EmailWorkspaceComponent}/>
          </div>
        </Router>
      
    );
  }
}

export default App;
