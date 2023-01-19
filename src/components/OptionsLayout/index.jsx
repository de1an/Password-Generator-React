import React from "react";
import "./options.css";

function OptionsLayout() {
	return (
		<div className="options">
			<div className="option">
				<input type="checkbox" id="UpperCase" defaultChecked={true}/>
				<label htmlFor="UpperCase">Include UpperCase Letters</label>
			</div>
			<div className="option">
				<input type="checkbox" id="LowerCase" defaultChecked={true} />
				<label htmlFor="LowerCase">Include LowerCase Letters</label>
			</div>
			<div className="option">
				<input type="checkbox" id="Numbers" />
				<label htmlFor="Numbers">Include Numbers</label>
			</div>
			<div className="option">
				<input type="checkbox" id="Symbols" />
				<label htmlFor="Symbols">Include Symbols</label>
			</div>
		</div>
	);
}

export default OptionsLayout;
