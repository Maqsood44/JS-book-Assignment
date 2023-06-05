// TASK 1
var num1 = +prompt("Enter First number")
var num2 = +prompt("Enter second number")
var result = num1 + num2
document.write(`<br>Question No.1:<br>The Sum of ${num1} and ${num2} is ${result}.`)
// TASK 1
var num1 = +prompt("Enter First number")
var num2 = +prompt("Enter second number")
document.write(`<br><br>Question No.2:<br>The Subtraction of ${num1} and ${num2} is ${num1-num2}.`)
document.write(`<br>The Multiplication of ${num1} and ${num2} is ${num1*num2}.`)
document.write(`<br>The Division of ${num1} and ${num2} is ${num1/num2}.`)
document.write(`<br>The Modolus of ${num1} and ${num2} is ${num1%num2}.`)
// TASK 3
var variableValue 
document.write(`<br><br>Question No.3:<br>The value after variable declaration is ${variableValue}.`)
variableValue = 10
document.write(`<br>Initial value is : ${variableValue}`)
variableValue++
document.write(`<br>Value after increment is : ${variableValue}`)
variableValue +=7
document.write(`<br>Value after addition : ${variableValue}`)
variableValue--
document.write(`<br>Value after decrement is : ${variableValue}`)
variableValue %=3
document.write(`<br>The reminder is : ${variableValue}`)
// TASK 4
var ticketPrice = 600
var ticketsToBuy = 5
document.write(`<br><br>Question No.4:<br>Total cost to buy 5 tickets to a movie is ${ticketPrice*ticketsToBuy}PKR.`)
// TASK 5
var tableNumber = +prompt("Please enter number to display multiplication table.")
var tableLength = +prompt("Please enter length of table to display.")
document.write("<br><br>Question No.5")
for (var i = 1; i <= tableLength; i++) {
    document.write(`<br> ${tableNumber} x ${i} = ${tableNumber *i}`)
}
// TASK 6
var Celsius =25
var afterconvertion = (Celsius*9/5)+32
document.write(`<br><br>Question No. 6:<br> ${Celsius}<sup>o</sup>C is ${afterconvertion}<sup>o</sup>F`)
var Fahrenhe = 70
afterconvertion = (Fahrenhe-32)*5/9
document.write(`<br> ${Fahrenhe}<sup>o</sup>F is ${afterconvertion}<sup>o</sup>C`)
// TASK 7
var item1 = 2000
var item2 = 3000
var item1Quantity = 5
var item2Quantity = 10
var shipingCharges = 200
var total = (item1 * item1Quantity)+(item2 * item2Quantity)+shipingCharges
document.write(`<br><br>Question No. 7<br><h1>Shoping Cart</h1><br>Price of Perfume = ${item1}<br>Quantity of Perfume = ${item1Quantity}<br>Price of Shoes = ${item2}<br>Quantity of Shoes = ${item2Quantity}<br> Shiping Charges = ${shipingCharges}<br><br>Total cost of your order = ${total}`)
// TASK 8
var totalMarks =1150
var obtainMarks =900
var persntage = obtainMarks/totalMarks *100
document.write(`<br><br>Question No. 8<br><h1>Marks Sheet</h1><br>Total Marks = ${totalMarks}<br>Marks obtained = ${obtainMarks}<br>Persentage = ${persntage}`)
// TASK 9
var doller = 10
var saudiRiyal = 25
var pakistaniCourency = (doller *104.80)+(saudiRiyal *28)
document.write(`<br><br>Question No. 9<br><h1>Courency in PKR</h1><br>Total courency in PKR : ${pakistaniCourency}`)
// TAKS 10
var number = 10
var result = ((number + 5)*10)/2
document.write(`<br><br>Question No. 10<br>selected numbe is  : ${number} and result in one experssion is ${result}`)
// //TASK 11 
var ccurrentYear = 2023
birthYear = 1995
var age =ccurrentYear - birthYear
document.write(`<br><br>Question No. 11<br>Current year is  : ${ccurrentYear}<br>Birth year is :  ${birthYear}<br>You are ${age} years old.`)
//TASK 12
var radios = 12
var circumference =2 * 2.142 * radios
var area =3.142 * radios * radios
document.write(`<br><br>Question No. 12<br><h1>The Geometrizer:</h1><br>Radius of a circle = ${radios}<br>circumference of a circle = ${circumference}<br>Area of a circle = ${area}`)
// TASK 13
var favSnacks = "Chocolate chip"
var currentAge = 27
var estdAge = 65
var snacksPerDay =5
var maxSnacks = ((estdAge - currentAge)*365)*snacksPerDay
document.write(`<br><br>Question No. 13<br><h1>The Life Time Supply Calculator</h1><br> Your Favorite Snacks : ${favSnacks}<br>Current Age :  ${currentAge}<br>Extimated Age : ${estdAge}<br>Amount of Scnack per day :  ${snacksPerDay}<br> You will need ${maxSnacks} ${favSnacks} to last you until the ripe old age of  ${estdAge}`)


