import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: 1
		}
	}
	increase = () => {
		this.setState({
			value: this.state.value + 1
		})
	}
	UNSAFE_componentWillMount(){
		console.log("componentWillMount");
		//You can set state in this unsafe method, but since our component is not rendered yet, we can not
		//access its DOM representation
		this.setState({
			multiplier: 2
		})
		//will return null
		console.log(ReactDOM.findDOMNode(this));
	}


    render(){
    	console.log("render");
    	const {value,multiplier} = this.state;
    	return (
    		<button style= {{width: "50px", height: "30px"}} onClick={this.increase}>{value * multiplier }</button>
    		)
    }

	//works only once after render
    componentDidMount(){
    	console.log("componentDidMount");
    	console.log(ReactDOM.findDOMNode(this));

    	//If you do not clear this interval in umount method, it will leak the memory.
    	// Clean your resources in unmount method
    	this.incr = setInterval(this.increase, 500);
    }
    
    //works every time a prop or state value changes after render. 
    componentDidUpdate(prevProps,prevState){
    	console.log("componentDidUpdate");	
    }

    //clear your resources
    componentWillUnmount(){
    	console.log("componentWillUnMount");
    	clearInterval(this.incr)
    }

}

//our wrapper class to see umount life-cycle method result
export class LifeCycleWrapper extends React.Component{
	
	mount(){
		ReactDOM.render(<MyComponent/>, document.getElementById("a"))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById("a"));
	}

	render(){
		return (
		    <React.StrictMode>
				<button onClick= {this.mount}>Mount</button>
				<button onClick= {this.unmount}>UnMount</button>
				<div id = "a" />
			</React.StrictMode>
		)
	}
}