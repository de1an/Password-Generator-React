import React, { useRef, useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import "./new_password.css";

function NewPassword({psw}) {
	const passwordRef = useRef();

	useEffect(() => {
		console.log(psw);
		passwordRef.current.value = psw;
	}, [psw])
	

	const copyPassword = async () => {
		const password = passwordRef.current.value;
		await navigator.clipboard
			.writeText(password)
			.then(() => toast.success('You have copied successfully', {
				position: "bottom-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "dark",
				}))
			.catch((err) => toast.error("You haven't copied.", {
				position: "bottom-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "dark",
				}));
	};

	return (
		<div className="new-password">
			<input type="text" ref={passwordRef} />
			<span onClick={copyPassword}>
				<BiCopy />
			</span>
			<ToastContainer className="popup-msg"/>
		</div>
	);
}

export default NewPassword;
