let numA = prompt("Enter one number: ");
let oper = prompt("You can only use offered operator (+, -, *, /)");
let numB = prompt("Enter second number: ");

let res = calc(numA, numB);

alert("Resault is: " + res);

function calc(a, b) {

	if (oper === "+") {
	return parseFloat(a) + parseFloat (b);
	}
	else if (oper === "-") {
	return parseFloat(a) - parseFloat (b);
	}	
	else if (oper === "*") {
	return parseFloat(a) * parseFloat (b);
	}	
	else if (oper === "/") {
	return parseFloat(a) / parseFloat (b);
	}
	else {
		alert("You did not choose valid operator");
	}
	
}





	
