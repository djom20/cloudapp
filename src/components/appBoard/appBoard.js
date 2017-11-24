import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../AppHeader/AppHeader';
import NavContent from '../NavContent/NavContent';

import './AppBoard.css';

export default class AppBoard extends React.Component {
	render() {
		return (
			<div id="AppBoard">
				<AppHeader />
				<NavContent />
			</div>
		);
	}
}