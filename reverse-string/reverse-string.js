var reverseString = function (string) {
	string = Array.from(string.split(""));

	if (string.length == 0) {
		return " ";
	} else {
		return string.reverse().join("");
	}

};

module.exports = reverseString;