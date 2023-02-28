var strangername = prompt("How shall I call you, stranger?")
var NumberOne = prompt(strangername + ", give me number for X from 1 to 9");
var NumberTwo = prompt(strangername + ", give me number for Y from 1 to 9");
var Tenge = prompt(strangername + ", tell me how much tenge you have and I will convert it to dollars (assuming that exchange rate is 465)")

console.log (strangername + ", happy to see you here!")

if (NumberOne > NumberTwo) {
    console.log ("The number X is greater than Y")
}
else if (NumberOne == NumberTwo) {
    console.log ("The numbers X and Y are equal")
}
else if (NumberTwo > NumberOne) {
    console.log ("The number Y is greater than X")
}

let BankAccount = Tenge / 465;

console.log (strangername + ", you have " + BankAccount + " dollars on your Bank Account!")

