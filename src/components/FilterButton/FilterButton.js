import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './FilterButton.css';

export default class FilterButton extends React.Component {
	render() {
		return (
			<button class="btn btn-warning">
				<FontAwesome name='filter' />
				All
			</button>
		);
	}
}