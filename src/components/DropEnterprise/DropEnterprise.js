import React from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './DropEnterprise.css';

export default class DropEnterprise extends React.Component {
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
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					Dropdown
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
}