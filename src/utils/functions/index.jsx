import arrayShuffle from "array-shuffle";

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

export const getLowercase = () => {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};

export const getUppercase = () => {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};

export const getNumber = () => {
	return numbers[Math.floor(Math.random() * numbers.length)];
};

export const getSymbol = () => {
	return symbol[Math.floor(Math.random() * symbol.length)];
};

export const generatePass = (options, charLength) => {
	let psw = [];

	for (let i = 0; i < charLength; i++) {
		if (options.includes("LowerCase")) {
			psw.push(getLowercase());
		}
		if (options.includes("UpperCase")) {
			psw.push(getUppercase());
		}
		if (options.includes("Numbers")) {
			psw.push(getNumber());
		}
		if (options.includes("Symbols")) {
			psw.push(getSymbol());
		}
	}

	let password = shuffle(psw, options, charLength);
	return password;
};

const shuffle = (psw, options, num) => {
	let password = arrayShuffle(psw);
	password.length = num;
	let pswrd = password.join("");
	let isCorrect = true;

	for (const item of options) {
		if (item === "LowerCase") {
			if (!/[a-z]/.test(pswrd)) {
				isCorrect = false;
			}
		}
		if (item === "UpperCase") {
			if (!/[A-Z]/.test(pswrd)) {
				isCorrect = false;
			}
		}
		if (item === "Numbers") {
			if (!/[0-9]/.test(pswrd)) {
				isCorrect = false;
			}
		}
		if (item === "Symbols") {
			if (!/[~!@#$%^&*()_+=|]/.test(pswrd)) {
				isCorrect = false;
			}
		}
	}

	return (isCorrect) ? pswrd : shuffle(psw, options, num);
};
