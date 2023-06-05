//TASK 1
document.write(`<br><br>Questin No. 1 :`)
var date =new Date()
document.write(`<br>Current Date : ${date}`)

//TASK 2
document.write(`<br><br>Questin No. 3 :`)
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var month = date.getMonth()
alert("Current Month : " + months[month])

//TASK 3
document.write(`<br><br>Questin No. 3 :`)
var days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
var day = date.getDay() 
alert("Current day : " + days[day])

//TASK 4
document.write(`<br><br>Questin No. 4 :`)
if (days[day]=== "Sat" || days[day] ==="Sun"){
    document.write(`<br>It's fun day `)
}
else{
    document.write(`<br>Go to your job. `)
}

//TASK 5
document.write(`<br><br>Questin No. 5 :`)
var todayDate = date.getDate()
if (todayDate < 16){
    document.write(`<br>First fifteen days of month.' `)
}
else{
    document.write(`<br>Last fifteen days of month.' `)
}

//TASK 6
document.write(`<br><br>Questin No. 6 :`)
var newDate = new Date("1,1,1970")
var timeDifference = date - newDate
var milisecunds =Math.floor(timeDifference * 100*60)
var minutes =Math.floor(timeDifference / (100*60))
document.write(`<br>Current Date : ${date}`)
document.write(`<br>Elapsed miliseconds since January, 1, 1970 : ${milisecunds}`)
document.write(`<br>Elapsed miliseconds since January, 1, 1970 : ${minutes}`)

//TASK 7
document.write(`<br><br>Questin No. 7 :`)
var hours = date.getHours()
console.log(hours);
if (hours >= 12){
    document.write(`<br>It's PM' `)
}
else{
    document.write(`<br>It's AM `)
}

//TASK 8
document.write(`<br><br>Questin No. 8 :`)
var lastDate = new Date("2020, 12, 31");
document.write(`<br>Last Date : ${lastDate} `)

//TASK 9
document.write(`<br><br>Questin No. 9 :`)
var firstRamadanDate = new Date('2023,03,23 ');
var timeDifference = date - firstRamadanDate;
var daysPastSinceFirstRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days past since 1st Ramadan: " + daysPastSinceFirstRamadan);

////TASK 10
document.write(`<br><br>Questin No. 10 :`)
document.write(`<br>Current Date : ${date}`)
date.setHours(hours - 1);
document.write(`<br>I hour ago, It was : ${date}`)

////TASK 11
document.write(`<br><br>jQuestin No. 11 :`)
document.write(`<br>Current Date : ${date}`)
date.setFullYear(date.getFullYear() - 100)
document.write(`<br>100 years back it was : ${date}`)

////TASK 12
document.write(`<br><br>jQuestin No. 12 :`)
var birthDate = prompt("Please enter your birth day i form of (MM,DD,YYYY)")
var getDate = new Date(birthDate)
var age = date.getFullYear() - getDate.getFullYear()
document.write(`<br>Your age is ${age}`)
document.write(`<br>Your birth year is ${getDate.getFullYear()}`)

////TASK 14
document.write(`<br><br>jQuestin No. 14 :`)
var customerName = "Maqsood";
var currentMonth = months[month]
var numberOfUnits = 250
var chargesPerUnit = 18.5
var dueDate = new Date("2023-06-10")
var netAmountPayable = numberOfUnits * chargesPerUnit
var latePaymentSurcharge = 100
var grossAmountPayable = netAmountPayable + latePaymentSurcharge
netAmountPayable = netAmountPayable.toFixed(2)
latePaymentSurcharge = latePaymentSurcharge.toFixed(2)
grossAmountPayable = grossAmountPayable.toFixed(2)
document.write("<h2>K-Electric Bill</h2>")
document.write("<p>Customer Name: " + customerName + "</p>")
document.write("<p>Current Month: " + currentMonth + "</p>")
document.write("<p>Number of Units: " + numberOfUnits + "</p>")
document.write("<p>Charges per Unit: $" + chargesPerUnit + "</p>")
document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>")
if (date > dueDate) {
  document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge + "</p>")
  document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>")
}
