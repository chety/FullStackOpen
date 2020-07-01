import React from 'react';
import PropTypes from "prop-types";

const Text = ({text,occupation}) => {
	return <h3>{text} is {occupation}</h3>
}

//we can define our custom controls for each prop
Text.propTypes = { 
	text: function(props,prop,component){
		if (!props.hasOwnProperty(prop)) {
			return new Error(`${prop} is not provided`);
		}
		if(props[prop].length < 10){
			return new Error(`${prop} must be at least 10 characters`)
		}
    },
    occupation: PropTypes.string.isRequired 
}
Text.defaultProps = {
	occupation: "Computer Scientist"
}

export default Text;