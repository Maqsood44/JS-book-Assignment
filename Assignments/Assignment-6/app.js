////TASK 1
var number = 15
document.write(`<br><br>Question No. 1<br>Result<br>The value of A is ${number}`)
document.write(`<br>----------------------------------<br><br>`)
++number
document.write(`<br>The value of ++A is ${number}`)
document.write(`<br>Now the value of A is ${number}<br><br>`)
document.write(`<br>The value of A++ is ${number}`)
number++
document.write(`<br>Now the value of A is ${number}<br><br>`)
--number
document.write(`<br>The value of --A is ${number}`)
document.write(`<br>Now the value of A is ${number}<br><br>`)
document.write(`<br>The value of A-- is ${number}`)
number--
document.write(`<br>Now the value of A is ${number}<br><br>`)

// //TASK 2
var a =2
var b=1
var Result
document.write(`<br><br>Question No. 2<br>a = ${a}<br> b = ${b}`)
Result = --a
document.write(`<br>Result after --a is ${Result}<br>`)
Result =--a - --b
document.write(`<br>Result after --a - --b is ${Result}<br>`)
Result = --a - --b + ++b
document.write(`<br>Result after --a - --b + ++b is ${Result}<br>`)
Result = --a - --b + ++b + b--
document.write(`<br>Result after --a - --b + ++b + b-- is ${Result}<br>`)

// //TASK 3
var myName =prompt("Please entere your name.")
document.write(`<br><br>Question No. 3<br>Hello ${myName} welcome to the programming world!`)

// //TASK 5 because 4 is empty task
{var table = +prompt("Please enter a number to generate mulitplication table","5")
document.write("<br><br>Question No. 5")
}for (var i = 1; i <=10;i++){
    document.write(`<br>${table} x ${i} = ${table * i}`)
}

// TASK NO. 6
var subject1 = prompt("Enterr first subject name:"), subject2 = prompt("Enterr second subject name:"), subject3 = prompt("Enterr third subject name:")
var obtain1 = +prompt("Enter obtan marks of first subject"), obtain2 = +prompt("Enter obtan marks of second subject"), obtain3 = +prompt("Enter obtan marks of third subject"), totalMarks = 100
document.write(`<br><br>Question No. 6<br> <table><tr>
    <th>Subject Name</th>
    <th>Total Marks</th>
    <th>Obtan Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <td>${subject1}</td>
    <td>${totalMarks}</td>
    <td>${obtain1}</td>
    <td>${obtain1/100*100}%</td>
</tr>
<tr>
    <td>${subject2}</td>
    <td>${totalMarks}</td>
    <td>${obtain2}</td>
    <td>${obtain2/100*100}%</td>
</tr>
<tr>
    <td>${subject3}</td>
    <td>${totalMarks}</td>
    <td>${obtain3}</td>
    <td>${obtain3/100*100}%</td>
</tr>
<tr>
    <td></td>
    <td>${totalMarks*3}</td>
    <td>${obtain1+obtain2+obtain3}</td>
    <td>${(obtain1+obtain2+obtain3)/(totalMarks*3)*100}%</td>
</tr>
</table>`)

