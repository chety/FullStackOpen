import React, { useState } from "react";

function Slider({ valueChanged, value }) {
	return (
		<input
			type="range"
			min={0}
			max={255}
			step={5}
			onChange={valueChanged}
			value={value}
		/>
	);
}

export function SliderWrapper() {
	const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

	const onHandleValueChanged = (color) => (e) => {
		setColor({ ...color, [color]: e.target.value });
	};
	const colors = ["red", "green", "blue"];
	return (
		<>
			{colors.map((clr) => {
				const value = color[clr];
				return (
					<>
						<label htmlFor={clr}>Color: {value}</label>
						<Slider
							id={clr}
							valueChanged={onHandleValueChanged(clr)}
							value={value}
						/>
					</>
				);
			})}
		</>
	);
}
