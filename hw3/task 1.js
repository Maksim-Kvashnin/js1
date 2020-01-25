let num = 2;
let numArr = [];

while (num <= 100) {
	if (num == 2) {
		numArr.push(2)
	} else {
		let result = 2;
		let i = 2;
		while (num % i !== 0 ){
			i += 1;
			result += 1;
			} 
		if (result == num) {
			numArr.push(result);
		}
	}
	num += 1;
}

console.log(numArr);
