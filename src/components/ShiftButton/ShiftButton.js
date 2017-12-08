import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'reactstrap';

import './ShiftButton.css';

export default class ShiftButton extends React.Component {
	render() {
		return (
			<Button class="ShiftButton" color="default">Shift: Morning</Button>
		);
	}
}