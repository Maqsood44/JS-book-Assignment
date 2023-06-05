//TASK 1
var char = prompt("Enter any input to check wheither input is number, uppercase or lowercase.")
document.write("<br><br>Question No. 1 :")
console.log(typeof char)
if (typeof char === "string" && char.length === 1) {
    var ASCII_code = char.charCodeAt(0)
    console.log(ASCII_code)
    if (ASCII_code >= 48 && ASCII_code <= 57) {
        document.write(`<br>${char} is a number.`)
    }
    else  if (ASCII_code >= 65 && ASCII_code <= 90) {
        document.write(`<br>${char} is an uppercase charecter.`)
    }
    else  if (ASCII_code >= 97 && ASCII_code <= 122) {
        document.write(`<br>${char} is a lowercase charecter.`)
    }
}

//TASK 2 
const int1 = +prompt("Enter first number.")
const int2 = +prompt("Enter second number.")
document.write("<br><br>Question No. 2 :")
if (int1 > int2)
{
    document.write(`<br>${int1} is greater then ${int2}.`)
}
else if (int1 < int2){
    document.write(`<br>${int1} is less then ${int2}.`)
}
else if (int1 === int2){
    document.write(`<br>Both are equal number.`)
}
else{
    document.write(`<br>Invild inputs`)    
}

//TASK 3
var inputNumber = +prompt("Enter any integer to check negative positive. inputer")
document.write("<br><br>Question No. 3 :")

if (inputNumber < 0) {
    document.write(`<br>${inputNumber} is a Negative number.`)
}
else if (inputNumber === 0){
    document.write(`<br>${inputNumber} is common number.`)
}
else {
    document.write(`<br>${inputNumber} is a Positive number.`)
}

//TASK 4
var checkVowel = prompt("Enter only one cheracter to for vowel and cansunent chacking").toLocaleLowerCase()
document.write("<br><br>Question No. 4 :")
if (checkVowel == "a" || checkVowel == "e" || checkVowel == "i" || checkVowel == "o" || checkVowel == "u") {
    document.write(`<br>${checkVowel} is a vowel letter. `)
}
else {
    document.write(`<br>${checkVowel} is a cansunent letter. `)
}

//TASK 5
document.write("<br><br>Question No. 5 :")
var currectPassword = "12345678"
var userPassword = prompt("Please enter your password", "")
if (userPassword != "") {
    if (userPassword === currectPassword) {
        document.write("<br>Correct! The password you entered matches the original password")
    }
    else {
        document.write("<br>Incorrect password")
    }
}
else {
    document.write("<br>Please enter your password")
}

// TASK 6
document.write("<br><br>Question No. 6 is for to find and fix error in given code.")
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// TASK 7   
document.write("<br><br>Question No. 7 :")
var time = +prompt("Enter current hour like in 24 format.")
if (time >= 00 && time <= 12) {
    document.write("<br>Good Morning")
}
else if (time >= 12 && time <= 17) {
    document.write("<br>Good Afternoon")
}
else if (time >= 17 && time <= 21) {
    document.write("<br>Good Evening")
}
else if (time >= 21 && time <= 24) {
    document.write("<br>Good Night")
}
else {
    document.write("<br>Sorry you enter a wrong time.")
}
