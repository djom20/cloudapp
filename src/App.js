import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import { Route } from 'react-router';

import loginBox from './components/loginBox/loginBox';
import notFound from './components/notFound/notFound';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
// import './App.css';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={loginBox} />
					<Route component={notFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;