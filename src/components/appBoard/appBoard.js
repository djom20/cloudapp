import React from 'react';
import ReactDOM from 'react-dom';

import appheader from '../appHeader/appHeader';

import './appBoard.css';

export default class appBoard extends React.Component {
	render() {
		return (
			<div id="appBoard">
				<appheader />
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