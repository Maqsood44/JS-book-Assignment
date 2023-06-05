//TASK 1
document.write(`<br><br>Question No. 1 :`)
function currentDate(){
    var date =new Date()
    document.write(`<br> ${date}`)
}
currentDate()

//TASK 2
document.write(`<br><br>Question No. 2 :`)
function greeting(fname, lname){
    var string = fname.concat(" ",lname)
    document.write(`<br>Welcome! ${string}`)
}
greeting("Maqsood","Ahmad")

//TASK 3
document.write(`<br><br>Question No. 3 :`)
var num1 = +prompt("Enter 1st number.")
var num2 = +prompt("Enter 2nd number.")
function sum(a, b){
    document.write(`<br>Sum of ${a} & ${b} = ${a+b}`)
}
sum(num1, num2)

//TASK 4
document.write(`<br><br>Question No. 4 :`)
var num1 = +prompt("Enter 1st number.")
var num2 = +prompt("Enter 2nd number.")
var op = prompt("Enter Operater")
function calculator(a,b,c){
    var string = a+c+b
    return eval(string)
}
var calculation = calculator(num1,num2,op)
document.write(`<p>Result : ${calculation}`)

//TASK 5
document.write(`<br><br>Question No. 5 :`)
var arg = +prompt("Enter number")
function squere(a){
    return Math.pow(a,2)
}
document.write(`<br>Squere of ${arg} is ${squere(arg)}`)

//TASK 6
document.write(`<br><br>Question No. 6 :`)
function fact(num) {
    if (num === 0 || num === 1){
        return 1
    }
    else{
        return num * fact(num-1)
    }
}
var factOf = +prompt("Enter numberr to find the factorial")
var factorial = fact(factOf)
document.write(`<p>Factorial of ${factOf} is ${factorial} </p>`)

//TASK 7
document.write(`<br><br>Question No. 7 :`)
function counting(first, last) {
    var count = []
    for (var i = first; i <= last; i++) {
        count.push(i)
    }
    document.write(`<p?>${count}</p?`)
}
var startNumber = +prompt("Enter starting number.")
var endNumber = +prompt("Enter ending number.")
counting(startNumber, endNumber)

//TASK 8
document.write(`<br><br>Question No. 8 :`)
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    const baseSquared = calculateSquare(base);
    const perpendicularSquared = calculateSquare(perpendicular);
    const hypotenuseSquared = baseSquared + perpendicularSquared;
    const hypotenuse = Math.sqrt(hypotenuseSquared);
    return hypotenuse;
}

var perpendicular1 = +prompt("Enter perpendicular")
var base1 = +prompt("Enter base")
var rightTriangle = calculateHypotenuse(base1, perpendicular1)
document.write(`<p>Hypotenuse of perpendicular ${perpendicular1} and base ${base1} is ${rightTriangle}</p?`)

//TASK 9
document.write(`<br><br>Question No. 9 :`)
function rectangle(height, width){
    var area = height * width
    document.write(`<p>Area of rectangle is ${area}`)
}
rectangle(10,59)

//TASK 10
document.write(`<br><br>Question No. 10 :`)
var sentence = "the quick brown fox"
function convertToUpperCase(p1){
    var words = sentence.split(" ")
    var capitalizeFirst = words.map(function(word){
        var firstLeter = word.charAt(0).toUpperCase()
        var newWord = firstLeter.concat(word.slice(1))
        return newWord
    })
    var newSentence = capitalizeFirst.join(" ")
    document.write(`<p>Original sentance : ${p1}`)
    document.write(`<p>Afer capitalized first leter : :${newSentence}`)
}
convertToUpperCase(sentence)

//TASK 11
document.write(`<br><br>Question No. 11 :`)
var sentance = "Web Development Tutorial"
    document.write(`<p>Example sentance : ${sentance}</p>`)
function findLongWord(p1){
    var words = sentance.split(" ")
    var longWord = words[0]
    words.map(function(word){
        if (word.length > longWord.length)
        {
            longWord = word
        }
        return longWord
    })
    document.write(`<p>Long Word : ${longWord}</p>`)
}
findLongWord(sentance)

//TASK 12
document.write(`<br><br>Question No. 12 :`)
const str = 'JSResourceS.com'
const letter = 'o'
function leteroccurrences(string,ltr){
    var count = 0
    for(var i = 0; i <string.length; i++){
        console.log(i)
    if (string[i] === ltr){
        console.log(i)
            count++
        }
    }
    document.write(`<p>Number of occurrences of ${ltr} in ${string}: ${count}</p>`)
}
leteroccurrences(str,letter)

//TASK 13
document.write(`<br><br>Question No. 13 :`)
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    document.write(`<p>The circumference is ${circumference.toFixed(2)}</p>`);
  }
  
  function calcArea(radius) {
    const area = Math.PI * radius * radius;
    document.write(`<p>The area is ${area.toFixed(2)}</p>`);
  }
const radius = 5;
calcCircumference(radius)
calcArea(radius)
  