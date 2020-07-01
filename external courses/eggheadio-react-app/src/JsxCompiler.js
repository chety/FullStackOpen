import React, { useEffect, useState } from "react";
import "./compiler.css";
export function JsxCompiler() {
	const [error, setError] = useState(null);
	const [output, setOutput] = useState(null);

	function convertToReact(e) {
		const jsxCode = e.target.value;
		try {
			const result = window.Babel.transform(jsxCode, {
				presets: ["es2015", "react"],
			}).code;
			setOutput(result);
			setError("");
		} catch (error) {
			setError(error.message);
		}
	}
	const errVisibility = error ? "block" : "none";
	return (
		<>
			<header style={{ display: errVisibility }}>{error}</header>
			<div class="container">
				<textarea
					defaultValue="/*Enter your Jsx here*/"
					onChange={convertToReact}
				/>
				<pre>{output}</pre>
			</div>
		</>
	);
}
