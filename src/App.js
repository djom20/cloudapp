import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import loginBox from './components/loginBox/loginBox';
// import notFound from './components/notFound/notFound';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path='/' component={loginBox} />
			</BrowserRouter>
		);
	}
}

export default App;