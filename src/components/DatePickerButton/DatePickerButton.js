import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'reactstrap';

import './DatePickerButton.css';

export default class DatePickerButton extends React.Component {
	render() {
		return (
			<Button color="primary">Wed Nov 22 2017</Button>
		);
	}
}