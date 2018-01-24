let DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (x) {

	x = x.split("");

	for (let i = 0; i < x.length; i++) {
		if (x[i].includes("G")) {
			x[i] = "C";
		} else if (x[i].includes("C")) {
			x[i] = "G";
		} else if (x[i].includes("T")) {
			x[i] = "A";
		} else if (x[i].includes("A")) {
			x[i] = "U";
		} else {
			throw new Error("Invalid input");
		}
	}

	return x.join("");
}


module.exports = DnaTranscriber;