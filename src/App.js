import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import { browserHistory } from 'react-router';

import LoginBox from './components/LoginBox/LoginBox';
import AppBoard from './components/AppBoard/AppBoard';
import NotFound from './components/NotFound/NotFound';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
// import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter history={browserHistory}>
				<Switch>
					<Route exact path='/' component={AppBoard} />
					{/* <Route exact path='/' component={loginBox} /> */}
					<Route exact path='/dashboard' component={AppBoard} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}