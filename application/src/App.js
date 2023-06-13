import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import User from "./User";
import React from "react";

function App() {
	const UserWrapper = () => {
		const match = React.useMatch(); // i.e. match.params

		return <User match={match} />; // i.e. this.props.match.params
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Route path="/user/:id" element={<UserWrapper />} />
			</header>
		</div>
	);
}

export default App;
