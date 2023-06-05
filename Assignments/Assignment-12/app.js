//TASK 1
document.write(`<br><br>Questin No. 1 :`)
var pnumber = +prompt("Enter any positive number")
document.write(`<br>Number : ${pnumber}`)
document.write(`<br>Round : ${Math.round(pnumber)}`)
document.write(`<br>Floor : ${Math.floor(pnumber)}`)
document.write(`<br>Ceil : ${Math.ceil(pnumber)}`)

//TASK 2
document.write(`<br><br>Questin No. 2 :`)
var nnumber = +prompt("Enter any nagetive number","-")
document.write(`<br>Number : ${nnumber}`)
document.write(`<br>Round : ${Math.round(nnumber)}`)
document.write(`<br>Floor : ${Math.floor(nnumber)}`)
document.write(`<br>Ceil : ${Math.ceil(nnumber)}`)

//TASK 3
document.write(`<br><br>Questin No. 3 :`)
var number = prompt("Enter any positive number")
number =parseFloat(number)
var absoluteNumber = Math.abs(number)
document.write(`<br>the absolute value of ${number} is ${Math.abs(number)}.`)

//TASK 4
document.write(`<br><br>Questin No. 4 :`)
var dice = Math.ceil(Math.random() * 6)
document.write(`<br>Value of Dice is : ${Math.ceil(Math.ceil(Math.random() * 6))}`)
document.write(`<br>Value of Dice is : ${Math.ceil(Math.ceil(Math.random() * 6))}`)

//TASK 5
document.write(`<br><br>Questin No. 5 :`)
var coin = ["Head", "Tail"]
var coinValue = Math.round(Math.random())
document.write(`<br>Random coin value : ${coin[coinValue]}`)

//TASK 6
document.write(`<br><br>Questin No. 6 :`)
document.write(`<br>Random number between 1 to 100 is : ${Math.round(Math.random()*100)}`)
document.write(`<br>Random number between 1 to 100 is : ${Math.round(Math.random()*100)}`)
document.write(`<br>Random number between 1 to 100 is : ${Math.round(Math.random()*100)}`)

//TASK 7
document.write(`<br><br>Questin No. 7 :`)
var secretNumber = Math.ceil(Math.random() * 10)
var userChoice = +prompt("Enter number from 1 to 10")
console.log(secretNumber);
if (secretNumber === userChoice){
    document.write(`<br>Congratulations! You guess correct number.`)
}
else if (userChoice <= secretNumber){
    document.write(`<br>Secret number is greater then your choice.`)
}
else if (userChoice >= secretNumber){
    document.write(`<br>Secret number is less then your choice.`)
}