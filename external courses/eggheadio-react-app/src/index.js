import React from "react";
import ReactDOM from "react-dom";
/*
import App from './App';
import App2 from './App2';
import App3 from './App3';
import Text from './CustomPropType';
import Event from "./SyntheticEvents";
import {RefComponent} from "./Refs";
import {LifeCycleWrapper} from "./LifeCycle";
import {LifeCycleComponent} from "./LifeCycle2";
import {FetchData} from "./FetchData";
import { Higher } from "./HigherOrderComponent";
import { JsxCompiler } from "./JsxCompiler";
import { ParentWrapper } from "./ChildrenProps2";
import { ButtonRenderer } from "./CloneElement";*/
import { SliderWrapper } from "./Slider";

ReactDOM.render(
	<React.StrictMode>
		<SliderWrapper />
	</React.StrictMode>,
	document.getElementById("root")
);
