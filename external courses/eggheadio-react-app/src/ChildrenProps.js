import React from "react";

const App3 = () => {
	return <Button>I <Heart/> React</Button>
}


function Button(props){
	return <button>{props.children}</button>
}

class Heart extends React.Component {
	render(){
		return <span style= {{color:"red"}}>&hearts;</span>
	}
}


export default App3;