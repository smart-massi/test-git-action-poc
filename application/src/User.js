import React from "react";
import { useParams } from "react-router-dom";

// Path: application/src/about.js
// dynamic route
export default function User() {
	const { id } = useParams();
	return (
		<div>
			<h1>User</h1>
			<p>This is id retrieved from the param {id}</p>
		</div>
	);
}
