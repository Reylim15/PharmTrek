import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import AdminHome from './components/pages/AdminHome';
import StaffHome from './components/pages/StaffHome';
import Login from './components/auth/Login';

function onAuthRequired({ history }) {
	history.push('login');
}

function App() {
	return (
		<Router>
			<Security
				issuer="https://dev-547772.okta.com/oauth2/default"
				client_id="0oaz2yw0DIDcJhX2v4x5"
				redirect_uri={window.location.origin + '/implicit/callback'}
				onAuthRequired={onAuthRequired}
			>
				<div className="App">
					<Navbar />
					<div className="container">
						<Route path="/" exact={true} component={StaffHome} />
						<SecureRoute path="/AdminHome" exact={true} component={AdminHome} />
						<Route
							path="/login"
							render={() => <Login baseUrl="https://dev-547772.okta.com/oauth2/default" />}
						/>
						<Route path="/implicit/callback" component={ImplicitCallback} />
					</div>
				</div>
			</Security>
		</Router>
	);
}

export default App;
