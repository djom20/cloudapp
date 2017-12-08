import React from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './DropProfile.css';

export default class DropProfile extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<Dropdown class="DropProfile" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					<img class="img-circle" src="https://www.gravatar.com/avatar/5a6482a701c73c212b5103285a975b48?d=https%3A%2F%2Fi.imgur.com%2F1nSFik0.png" />
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>Log out</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
}