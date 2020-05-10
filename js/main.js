let submitButton = document.querySelector("#cipher-button");
submitButton.addEventListener("click", displayCipher);

const shiftLetter = function(letter, shft) {

	const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
					"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
					"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
					"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	const position = letters.indexOf(letter);
	const shift = Number(shft) % 26;

	if (position >= 0) {
		if (position < 26) {
			if (position + shift > 25) {
				return letters[position + shift - 26];
			}
			else if (position + shift < 0) {
				return letters[position + shift + 26];
			}
		}
		else {
			if (position + shift > 51) {
				return letters[position + shift - 26];
			}
			else if (position + shift < 26) {
				return letters[position + shift + 26];
			}
		}
		return letters[position + shift];
	}
	return letter;
}

function displayCipher() {
	document.querySelector("#cipher-string-text").textContent = caesar();
}

function caesar() {

	let str = document.querySelector("#original-string-text").value;
	let shft = document.querySelector("#shift-value").value;
	let splitStr = str.split("");
	let newStr = [];
	
	for (e in splitStr) {
		newStr.push(shiftLetter(splitStr[e], shft));
	}
	
	return newStr.join("");
}