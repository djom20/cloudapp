import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'reactstrap';

import './ShiftButton.css';

export default class ShiftButton extends React.Component {
	render() {
		return (
			<Button color="primary">Shift: Morning</Button>
		);
	}
}