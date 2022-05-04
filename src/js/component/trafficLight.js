import React, { useState, useEffect } from "react";

const Traffic = () => {
	const [color, setColor] = useState();
	return (
		<div className="d-flex justify-content-center">
			<div className="trafficLight">
				<div className="light red mx-auto"></div>
				<div className="light yellow mx-auto"></div>
				<div className="light green mx-auto"></div>
			</div>
		</div>
	);
};
export default Traffic;
