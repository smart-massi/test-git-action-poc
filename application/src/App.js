import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import User from "./User";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Route path="/user/:id" element={<User />} />
			</header>
		</div>
	);
}

export default App;
