import React, {useState, useRef} from "react";
import ReactDOM from "react-dom";

export const RefComponent1 = () => {
	const [input,setInput] = useState({one:null,two: null});

	//access target elements via element parameter
	function inputChanged(e){
		setInput({...input,[e.target.name]: e.target.value});
	}

	return (
		<React.StrictMode>
			<input type="text" name= "one" onChange = {inputChanged} />
			<p>{input.one}</p>
			<hr/>
			<input type="text" name="two" onChange = {inputChanged} />
			<p>{input.two}</p>
		</React.StrictMode>

		)
}

class Input extends React.Component{
	constructor(props){
		   super(props);		
	}
	render(){
	   return <input ref="inputRef" type="text" onChange = {this.props.textChanged} />		
	}
}

export class RefComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: null,
			surname: null,
			department: null,
		}
	}

	//access target elements via react ref
	inputChanged = () => {
		console.log(this.departmentRef);
		this.setState({
			name: this.refs.nameRef.value, //it is a member of this.refs object member
			surname: this.surnameRef.value, //surnameRef is defined as node. Thus we can access directly
			department: this.departmentRef.refs.inputRef.value,
		})
	}

	render(){
		 const {name,surname,department} = this.state;
	return (
		<React.StrictMode>
			<input type="text" name="first" ref= "nameRef" onChange = {this.inputChanged} placeholder= "Name..." />
			<p>Name: {name}</p>
			<hr/>
			<input type="text" ref={node => this.surnameRef = node} onChange = {this.inputChanged} placeholder= "Surname..." />
			<p>Surname: {surname}</p>
			<hr/>
			<Input ref={component => this.departmentRef = component} textChanged = {this.inputChanged} />
			<p>Department: {department}</p>
		</React.StrictMode>

		)
	}
}


