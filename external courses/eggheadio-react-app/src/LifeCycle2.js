import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class LifeCycleComponent extends React.Component {	

    update = () => { 
    	//it is not recommended to use ReactDOM.render in your component. Here it is just for educational purposes
    	ReactDOM.render(<LifeCycleComponent val = {this.props.val + 1} />, document.getElementById("root"))
    }	
    
    //Deprecated.
    UNSAFE_componentWillReceiveProps(nextProps){
    	console.log("nextProps*",nextProps)
    }
    
    //if we return false our component never renders. Although our props or state can be changed during this method
    shouldComponentUpdate(nextProps){    	
    	return nextProps.val % 5 === 0;
    }

    render(){
    	console.log("render");
    	return (
    		<>
    			<button  onClick={this.update}>Update</button>
    			<b>{this.props.val}</b>
    		</>
    		)
    }

    //works after every render except inital one.
    componentDidUpdate(prevProps,prevState)	{
    	console.log("prevProps*",prevProps);
    }
}

LifeCycleComponent.defaultProps = {
	val: 0
}
