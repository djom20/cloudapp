import React from 'react';
import ReactDOM from 'react-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import DropEnterprise from '../DropEnterprise/DropEnterprise';
import DropProfile from '../DropProfile/DropProfile';

import './AppHeader.css';

export default class AppHeader extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div class="AppHeader">
				<Navbar color="faded" light expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink class="inline" href="/components/">Spanish</NavLink> <span>-</span> <NavLink class="inline" href="https://github.com/reactstrap/reactstrap">English</NavLink>
							</NavItem>
							<NavItem>
								<DropEnterprise />
							</NavItem>
							<NavItem>
								<DropProfile />
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}