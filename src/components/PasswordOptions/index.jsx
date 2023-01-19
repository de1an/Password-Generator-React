import React from "react";
import { useSelector } from 'react-redux';
import InputRange from "../InputRange";
import OptionsLayout from "../OptionsLayout";
import "./password_opts.css";

function PasswordOptions() {
	const charLength = useSelector((state) => state.charLength);

	return (
		<div className="password-options">
			<div className="ch-length">
				<p>Character Length</p>
				<span>{charLength}</span>
			</div>
			<InputRange/>
			<OptionsLayout />
		</div>
	);
}

export default PasswordOptions;
