import React, { Component, useEffect } from "react";

export class Higher extends Component {
	render() {
		return (
			<>
				<Button>Click</Button>
				<hr />
				<LabelHOC>Label</LabelHOC>
			</>
		);
	}
}
//Higher Order Components are used to share common functionalities/behaviour between components
const HOC = (InnerComponent) =>
	class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0,
			};
		}

		update = () => {
			this.setState({
				count: this.state.count + 1,
			});
		};

		render() {
			console.log("HOC render");
			return (
				<InnerComponent
					{...this.props}
					count={this.state.count}
					update={this.update}
				/>
			);
		}
	};

//
const Button = HOC((props) => {
	useEffect(() => {
		console.log("Button rendered");
	}, []);

	return (
		<button onClick={props.update}>
			{props.children} - {props.count}
		</button>
	);
});

//
class Label extends Component {
	componentDidMount() {
		console.log("Label mounted");
	}
	render() {
		const { update, children, count } = this.props;
		return (
			<label onMouseOver={update}>
				{children} - {count}
			</label>
		);
	}
}
const LabelHOC = HOC(Label);
