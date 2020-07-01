import React from "react";

export function ButtonRenderer() {
	return (
		<Buttons>
			<button value="A">A</button>
			<button value="B">B</button>
			<button value="C">C</button>
		</Buttons>
	);
}

class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: "None",
		};
	}

	selectedChanged(selected) {
		this.setState({
			selected,
		});
	}

	cloneElements = (child) =>
		React.cloneElement(child, {
			onClick: this.selectedChanged.bind(this, child.props.value),
		});

	render() {
		//props.children is readonly. You can not directly mutate it, add prop or vice versa. To achieve this
		//we have to clone children then add necessary customization
		const items = React.Children.map(
			this.props.children,
			this.cloneElements
		);
		return (
			<>
				<h2>You have selected {this.state.selected}</h2>
				{items}
			</>
		);
	}
}
