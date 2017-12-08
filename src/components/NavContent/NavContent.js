import React from 'react';
import ReactDOM from 'react-dom';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import ShiftButton from '../ShiftButton/ShiftButton';
import DatePickerButton from '../DatePickerButton/DatePickerButton';
import SearchButton from '../SearchButton/SearchButton';
import FilterButton from '../FilterButton/FilterButton';

import './NavContent.css';

export default class NavContent extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		return (
			<div class="NavContent">
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => { this.toggle('1'); }}>
							Summary
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => { this.toggle('2'); }}>
							Events
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => { this.toggle('3'); }}>
							Reports
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '4' })}
							onClick={() => { this.toggle('4'); }}>
							Packages
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '5' })}
							onClick={() => { this.toggle('5'); }}>
							Lost &amp; Found
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '6' })}
							onClick={() => { this.toggle('6'); }}>
							Pass On
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '7' })}
							onClick={() => { this.toggle('7'); }}>
							Users
						</NavLink>
					</NavItem>
					<NavItem>
						<ShiftButton />
					</NavItem>
					<NavItem>
						<DatePickerButton />
					</NavItem>
					<NavItem>
						<SearchButton />
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<FilterButton />
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="2">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="3">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="4">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="5">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="6">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="7">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>Special Title Treatment</CardTitle>
									<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}