import React from "react";

const Parent = (props) => {
	console.log("children -> ", props.children);
	//If child is a single value, then props.children will be passed as an object.
	//If we try to use forEach,map ...etc it will raise error. To avoid this we have 2 options that described below
	//props.children.forEach((child) => console.log("*", child));

	//First Option
	React.Children.forEach(props.children, (child) =>
		console.log("option1", child)
	);

	//Second Option
	React.Children.toArray(props.children).forEach((child) =>
		console.log("option2", child)
	);

	return null;
};

export const ParentWrapper = () => {
	return (
		<Parent>
			<div className="classA"></div>
		</Parent>
	);
};
