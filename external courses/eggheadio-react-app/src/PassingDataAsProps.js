import React, {useState} from "react";

const App2 = () => {
	const [text,setText] = useState({
		value: "This is default text",
		count: 0
	});

	const updateText = (e) => {
		const value = e.target.value; 
		setText({...text,value});
	}

	return (
		<React.StrictMode>
			<Widget textChanged= {updateText}/>
			<p>{text.value} - {text.count}</p>
		</React.StrictMode>
		)
}

const Widget = ({textChanged}) => {
	return (
		<React.StrictMode>
			<input type="text" onChange= {textChanged}/>			
		</React.StrictMode>
		);
};

export default App2;