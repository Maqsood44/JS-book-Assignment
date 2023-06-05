//TASK 1
document.write(`<br><br>Question No. 1 :`)
var firstName = prompt("Enter first name.")
var lastName = prompt("Enter last name.")
var fullName = firstName + " " + lastName
document.write(`<br>Welcome! ${fullName}`)

// TASK 2
document.write(`<br><br>Question No. 2 :`)
var mobilePhone = prompt("Enter your favorite mobile phone model")
var stringLength = mobilePhone.length
document.write(`<br>My favorite phone is : ${mobilePhone}`)
document.write(`<br>Length of string is : ${stringLength}`)

//TASK 3
document.write(`<br><br>Question No. 3 :`)
var country = "Pakistani"
var index =  country.indexOf("n")
document.write(`<br>String :  ${country}`)
document.write(`<br>Index of 'n' :  ${index}`)

//TASK 4
document.write(`<br><br>Question No. 4 :`)
var string2 = "Hello World"
var lastIndex =  string2.lastIndexOf("l")
document.write(`<br>String :  ${string2}`)
document.write(`<br>Index of 'n' :  ${lastIndex}`)

//TASK 5
document.write(`<br><br>Question No. 5 :`)
var string3 = "Pakistani"
var findChar =  string3.charAt(3)
document.write(`<br>String :  ${string3}`)
document.write(`<br>Character at index 3  :  ${findChar}`)

//TASK 6
document.write(`<br><br>Question No. 6 : Repeating Q 1 using string concat function`)
document.write(`<br><br>Question No. 1 :`)
var firstName = prompt("Enter first name.")
var lastName = prompt("Enter last name.")
var fullName = firstName.concat(" ", lastName)
document.write(`<br>Welcome! ${fullName}`)

//TASK 7
document.write(`<br><br>Question No. 7 :`)
var string4 = "Hyderabad"
document.write(`<br>City :  ${string4}`)
var replaceString = string4.replace("Hyder", 'Islam')
document.write(`<br>After Replacement :  ${replaceString}`)

//TASK 8
document.write(`<br><br>Question No. 8 :`)
var string5 = "Ali and Sami are best friends. They play cricket and football together."
document.write(`<br>Orignal String :<br>  ${string5}`)
var replacingAnd = string5.replace(/and/g, "&")
document.write(`<br>Alter String :<br>  ${replacingAnd}`)

//TASK 9
document.write(`<br><br>Question No. 9 :`)
var string6 = "472"
document.write(`<br>value :  ${string6}<br>Type : ${typeof string6}`)
var toNumber = parseInt(string6)
document.write(`<br>value :  ${string6}<br>Type : ${typeof toNumber}`)

//TASK 10
document.write(`<br><br>Question No. 10 :`)
var string7 = prompt("Entger name of any thing.")
document.write(`<br>user Input : ${string7}`)
document.write(`<br>Upper Case : ${string7.toUpperCase()}`)

//TASK 11
document.write(`<br><br>Question No. 11 :`)
var string7 = prompt("Entger name of any thing.")
document.write(`<br>user Input : ${string7}`)
document.write(`<br>Upper Case : ${string7.charAt(0).toUpperCase()+string7.slice(1) }`)

//TASK 12
document.write(`<br><br>Question No. 12 :`)
var number1 = 35.36
document.write(`<br>Number :  ${number1}`)
var tostring = number1.toString()
var replaceDot =tostring.replace(".", "")
document.write(`<br>Result : ${replaceDot}`)

//TASK 13
document.write(`<br><br>Question No. 13 :`)
var userName = prompt("Enter username")
 if (/[!.,@]/.test(userName))
    alert("Please enter a valid username")
else
    document.write(`<br>Your Username is  ${userName}`)

//TASK 14
document.write(`<br><br>Question No. 14 :`)
var itemArray = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:").toLocaleLowerCase();
var found = false
var indexNumber
for ( i= 0;  i<= itemArray.length; i++){
    if (userInput === itemArray[i].toLocaleLowerCase())
        found = true
            indexNumber = i
        break
}
if (found == true){
    document.write(`<br>${userName} is available at index ${indexNumber} in our bakery.`)
}
else{
    document.write(`<br>We are sorry! ${userName} is not available in our bakery.`)
}

//TASK 15
document.write(`<br><br>Question No. 15 :`)
var password = prompt("Enter a password:");
var hasAlphabet = /[a-zA-Z]/.test(password);
var hasNumber = /[0-9]/.test(password);
var startsWithNumber = /^[0-9]/.test(password);
var isLengthValid = password.length >= 6;
if (hasAlphabet && hasNumber && !startsWithNumber && isLengthValid) {
    document.write(`<br>Entered password : ${password}`)
} else {
    document.write(`<br>Password can not begin with number.`)
    document.write(`<br>Please enter a valid password`)
}

//TASK 16
document.write(`<br><br>Question No. 16 :`)
var university = 'University of Karachi'
var splitArray = university.split("")
document.write(`<br>String : ${university}`)
document.write(`<br>Array`)
for(var i = 0 ; i<=splitArray.length-1;i++){
    document.write(`<br>${splitArray[i]}`)
}

//TASK 17
document.write(`<br><br>Question No. 17 :`)
var string8 = prompt("Enter anything to diplay last character of your input")
document.write(`<br>User input : ${string8}`)
document.write(`<br>Last Character of User input : ${string8.charAt(string8.length-1)}`)

//TASK 18
document.write(`<br><br>Question No. 18 :`)
var sentence = "The quick brown fox jumps over the lazy dog"
var word = "the"
splitSentence = sentence.split(" ")
var count = 0
for (var i = 0; i<= splitSentence.length-1; i++ ){
    if (word === splitSentence[i].toLocaleLowerCase())
        count ++
}
document.write(`<br>Text : ${sentence}`)
document.write(`<br>There are ${count} occurence(s) of word "`)