/*jshint esversion: 6 */

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './slide-in.transition.css';

const SlideInTransition = ({ children, ...props}) => (
	<CSSTransition
		{...props}
		timeout={500}
		classNames="slide-in"
		appear={true}>
		{children}
	</CSSTransition>
);

export default SlideInTransition