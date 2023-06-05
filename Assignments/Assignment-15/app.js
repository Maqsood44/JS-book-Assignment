//TASK 1
document.write(`<br><br>Question No. 1:`)
function power(a, b) {
    document.write(`<p>Power of ${a} and ${b} : ${Math.pow(a, b)} </p>`)
  }
  const result = power(4, 5)

//TASK 2
document.write(`<br><br>Question No. 2:`)
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.write(`<p>${year} is a leap year.</p>`)
    } else {
        document.write(`<p>${year} is not a leap year.</p>`)
    }
  }
  var year = 2023
  isLeapYear(year)

//TASK 3
document.write(`<br><br>Question No. 3:`)
function calculateS(a, b, c) {
    return (a + b + c) / 2
}

function calculateTriangleArea(a, b, c) {
    var s = calculateS(a, b, c)
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area;
}
var a = 3
var b = 4
var c = 5

var area = calculateTriangleArea(a, b, c)
document.write(`<p>Area of Triangle is ${area}</p>`)

//TASK 4
document.write(`<br><br>Question No. 4:`)
function calAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3
  }

  function calPercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3
    var maximumMarks = 100
    return (totalMarks / (maximumMarks * 3)) * 100
  }

  function showResult(subject1, subject2, subject3) {
    var average = calAverage(subject1, subject2, subject3)
    var percentage = calPercentage(subject1, subject2, subject3)
    document.write(`<p>Average : ${ average}</p>`)
    document.write(`<p>Persentage : ${percentage}%</p>`)
  }
  const subject1Marks = 84
  const subject2Marks = 74
  const subject3Marks = 54
  showResult(subject1Marks, subject2Marks, subject3Marks)


//TASK 5
document.write(`<br><br>Question No. 5:`)
  function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
var sentence = "Pakistan";
var character = "i";
var index = customIndexOf(sentence, character);
document.write(`<p>Index of ${character} in ${sentence} : ${ index}</p>`)

//TASK 6
document.write(`<br><br>Question No. 6:`)
function removeVowel(e){
    var vowel = ['a','e','i','o','u'] 
    var result =""
    for(var i =0; i < e.length; i++){
        if (!vowel.includes(e[i].toLowerCase())){
            result += e[i]
        }
    }
    return result
}
var sentence="Hello, how Are you?"
var withouVowels = removeVowel(sentence)
document.write(`<p>Original sentance : ${sentence} </p>`)
document.write(`<p>Sentance remove after vowel : ${withouVowels} </p>`)

//TASK 7
document.write(`<br><br>Question No. 7:`)
function removeVowel(e) {
    var result = ""
    for (var i = 0; i < e.length; i++) {
        switch (e[i].toLowerCase()) {
            case 'a':

                break;
            case 'e':

                break;
            case 'i':

                break;
            case 'o':

                break;
            case 'u':

                break;

            default:
                result += e[i]
        }
    }
    return result
}
var sentence1 = "Pleases read this application and give me gratuity”Such occurrences are ea, ea, ui."
var withouVowels1 = removeVowel(sentence1)
document.write(`<p>Original sentance : ${sentence1} </p>`)
document.write(`<p>Sentance remove after vowel : ${withouVowels1} </p>`)

//TASK 8
document.write(`<br><br>Question No. 8:`)
function kmToMeters(distanceKm) {
    document.write(`<p>:${distanceKm}km = ${distanceKm * 1000}m </p>`)
}
function kmToFeet(distanceKm) {
    var feetPerMeter = 3.28084
    document.write(`<p>:${distanceKm}km = ${distanceKm * 1000 * feetPerMeter}ft </p>`)
}
function kmToInches(distanceKm) {
    var inchesPerFoot = 12
    document.write(`<p>:${distanceKm}km = ${distanceKm * 1000 * 3.28084 * inchesPerFoot}m </p>`)
}
function kmToCentimeters(distanceKm) {
    document.write(`<p>:${distanceKm}km = ${ distanceKm * 1000 * 100}m </p>`)
 }
function printDistanceConversions(distanceKm) {
    kmToMeters(distanceKm)
    kmToFeet(distanceKm)
    kmToInches(distanceKm)
    kmToCentimeters(distanceKm)
}
var distanceKm = +prompt("Pleae enter distance between two cities in km.")
printDistanceConversions(distanceKm)

//TASK 9
document.write(`<br><br>Question No. 9:`)
function overtimePay(overTime) {
    var WorkingHours = 40;
    var overtimeRate = 12.00;
    if (overTime <= WorkingHours) {
        document.write(`<p>Sorry! you have no any over Time hours. </p>`)
    } else {
        var overtimeHours = hoursWorked - WorkingHours
        document.write(`<p>Overtime hours : ${overtimeHours} </p>`)
        document.write(`<p>Amount per hour : ${overtimeRate} Rs. </p>`)
        document.write(`<p>Total overtime amount : ${overtimeHours * overtimeRate} </p>`)
    }
}
var hoursWorked = +prompt("Enter your total working hours")
overtimePay(hoursWorked)

//TASK 10
document.write(`<br><br>Question No. 10:`)
function calculateCurrencyNotes(amountInHundreds) {
    const note100 = 100;
    const note50 = 50;
    const note10 = 10;
    var numNote100 = Math.floor(amountInHundreds / 100)
    document.write(`<p>Number of Rs. 100 notes: ${numNote100}</p>`)
    var riminder = amountInHundreds % 100
    var numNote50 = Math.floor(riminder / 50)
    document.write(`<p>Number of Rs. 50 notes: ${numNote50}</p>`)
    var newRiminder = riminder % 50
    var numNote10 = Math.floor(newRiminder / 10)
    document.write(`<p>Number of Rs. 10 notes: ${numNote10}</p>`)
}
const amountInHundreds = +prompt("Enter amount to withdraw.")
document.write(`<p>Amount to withdraw : ${amountInHundreds}</p>`)
calculateCurrencyNotes(amountInHundreds);