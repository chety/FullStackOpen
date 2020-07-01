import React, {useState} from "react";

const Event = () => {
	const [eventType,setEventType] = useState("----");
    
    function updateEventType(e){
    	setEventType(e.type);
    }

	return (
		<>
		<textarea rows = {10}
				  cols= {30}
				  onChange = {updateEventType}
				  onFocus= {updateEventType} 
				  onBlur= {updateEventType}
				  onCopy = {updateEventType}
				  onCut = {updateEventType}
				  onPaste = {updateEventType}
				  onDoubleClick = {updateEventType} />
		<h3>{eventType}</h3>
		</>
		)
}

export default Event;