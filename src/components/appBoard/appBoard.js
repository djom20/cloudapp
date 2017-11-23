import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../AppHeader/AppHeader';

import './AppBoard.css';

export default class AppBoard extends React.Component {
	render() {
		return (
			<div id="AppBoard">
				<AppHeader />
				<div class="others">
					<h1>others</h1>
				</div>
				<div class="nav">
					<h1>nav</h1>
				</div>
				<div class="content">
					<h1>content</h1>
				</div>
			</div>
		);
	}
}