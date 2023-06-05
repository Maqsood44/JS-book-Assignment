// TASK 1
var cityName = prompt("Please enter your city").toLocaleLowerCase()
if (cityName === "karach"){
    document.write(`<br><br>Quuestion No. 1 :<br>Welcome to the city of lights.`)
}

// TASK 2
var gender = prompt("Enter you gender").toLocaleLowerCase()
if (gender === "male"){
    document.write(`<br><br>Quuestion No. 2 :<br>Good Morning Sir.`)
}
else{
    document.write(`<br><br>Quuestion No. 2 :<br>Good Morning Ma'am.`)
}

//TASK 3
var color = +prompt("What is the color of traffic lights?\n1 for GREEN\n 2 for YELLOW\n 3 for RED")
if (color === 1) {
    document.write(`<br><br>Quuestion No. 3 :<br>Move Now`)
}
else if (color == 2) {
    document.write(`<br><br>Quuestion No. 3 :<br>Ready To Move`)
}
else {
    document.write(`<br<br>>Quuestion No. 3 :<br>Must Stop`)
}

// TASK 4
var fuel = +prompt("How many liters of fuel are remaining in your car")
if (fuel < 0.25) {
    document.write(`<br><br>Quuestion No. 4 :<br>Please refill the fuel in your car`)
}

// TASK 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//TASK 6
var obt1 =+prompt("Enter obtain marks of first paper"),obt2 =+prompt("Enter obtain marks of second paper"),obt3 =+prompt("Enter obtain marks of third paper"), total =300
var obtainMarks =obt1+obt2+obt3
var percentage =Math.round((obtainMarks/total)*100),remarks,grade
if (percentage >= 80){
    grade ="A+"
    remarks = "Excellent"
}
if (percentage >= 70){
    grade ="A"
    remarks = "Good"
}
if (percentage >= 60){
    grade ="B"
    remarks = "You need to improve"
}
if (percentage < 60){
    grade = "Fail"
    remarks = "Sorry"
}
document.write(`<br><br>Question No. 6<br><h1>Marks Sheet</h1><br>Total Marks : ${total}<br>Marks Obtained : ${obtainMarks}<br>Percenatge : ${percentage}<br>Grade : ${grade}<br>Remarks :  ${remarks}`)

// TASK 7
var guessNumber = 6
var usereGuess = +prompt("Guess the number from 1 to 10.")
 if (usereGuess === guessNumber)
 {
    document.write(`<br><br>Quuestion No. 7 :<br>“Bingo! Correct answer`)
 }
 if (usereGuess === guessNumber+1)
 {
    document.write(`<br><br>Quuestion No. 7 :<br>Close enough to the correct answer`)
 }

// TASK 8
var number = +prompt("Please enter any number.")
if (number % 3 === 0){
    document.write(`<br><br>Quuestion No. 8 :<br>${number} is divisible by by 3`)
}
else{
    document.write(`<br><br>Quuestion No. 8 :<br>${number} is not divisible by by 3`)
}

// TASK 9
var givenNumber = +prompt("Please enter any number to check that the number is even or odd.")
if (givenNumber % 2 === 0){
    document.write(`<br><br>Quuestion No. 9 :<br>${givenNumber} is EVEN number`)
}
else{
    document.write(`<br><br>Quuestion No. 9 :<br>${givenNumber} is ODD number`)
}

// TASK 10
var t = +prompt("Please enter current temprature of your sity")
if ( t > 40 ){
    document.write(`<br><br>Quuestion No. 10 :<br>It is too hot outside.`)
}
else if ( t > 30 ){
    document.write(`<br><br>Quuestion No. 10 :<br>The Weather today is Normal.`)
}
else if ( t > 20 ){
    document.write(`<br><br>Quuestion No. 10 :<br>Today's Weather is cool.`)
}
else{
    document.write(`<br><br>Quuestion No. 10 :<br>OMG! Today's weather is so Cool. `)
}

// //TASK 11
var firstNUmber = +prompt("Enter first number.")
var secondNumber = +prompt("Enter second number.")
var op = prompt("Enter any Operator (+, -, /, *, %")
if ( op === "+" ){
    document.write(`<br><br>Quuestion No. 11 :<br>Addition of ${firstNUmber} and ${secondNumber} = ${firstNUmber + secondNumber}`)
}
if ( op === "-" ){
    document.write(`<br><br>Quuestion No. 11 :<br>Subtraction of ${firstNUmber} and ${secondNumber} = ${firstNUmber - secondNumber}`)
}
else if ( op === "/" ){
    document.write(`<br><br>Quuestion No. 11 :<br>Division of ${firstNUmber} and ${secondNumber} = ${firstNUmber / secondNumber}`)
}
else if ( op === "*" ){
    document.write(`<br><br>Quuestion No. 11 :<br>Multiplication of ${firstNUmber} and ${secondNumber} = ${firstNUmber * secondNumber}`)
}
else if ( op === "%" ){
    document.write(`<br><br>Quuestion No. 11 :<br>Moadolus of ${firstNUmber} and ${secondNumber} = ${firstNUmber % secondNumber}`)
}


