import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import NewPassword from "./components/NewPassword";
import PasswordOptions from "./components/PasswordOptions";
import {generatePass} from './utils/functions';

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	const charLength = useSelector((state) => state.charLength);
	const [password, setPassword] = useState('')

	const generate = () => {
		const allCheckboxs = Array.prototype.slice.call(
			document.querySelectorAll('input[type="checkbox"]')
		);
		const checkedFields = allCheckboxs.filter((box) => {
			return box.checked;
		});
			
		if (checkedFields.length < 1) {
			toast.error("You must checked at least one field.", {
				position: "bottom-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "dark",
			});
			return;
		}
		
		const options = checkedFields.map(opt => opt.id);
		setPassword(generatePass(options, charLength));
	};

	

	return (
		<div className="App">
			<div className="password-gen">
				<h1>Password Generator</h1>
				<NewPassword psw={password}/>
				<PasswordOptions />
				<button className="btn" onClick={generate}>
					Generate
				</button>
			</div>
			<ToastContainer style={{ fontSize: 14 }} />
		</div>
	);
}

export default App;
