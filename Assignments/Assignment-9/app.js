// TASK 1
var students = []

// TASK 2
var studentDetail = {
    sname: ""
}

// TASK 3
var stringArray = ["Banana", "Mango", "Apple", "Grapes"]

// TASK 4
var numberArray = [1, 2, 4, 5, 6, 7,]

// TASK 5
var booleanArray = [true, false]

// TASK 6
var mixedArray = ["Pakistan", 14, true]

// TASK 7
var eduPakistan = ["SSC", "HSC", "BCS", 
    "BS", "BCOM", "MS", "M", "Phil", "PhD"]
document.write(`<br><br>Question No. 7 : <br>1) ${eduPakistan[0]}<br>2) ${eduPakistan[1]}<br>3) ${eduPakistan[2]}<br>4) ${eduPakistan[3]}<br>5) ${eduPakistan[4]}<br>6) ${eduPakistan[5]}<br>7) ${eduPakistan[6]}<br>8) ${eduPakistan[7]}<br>9) ${eduPakistan[8]}`)

// TASK 8
document.write(`<br><br>Question No. 8 :`)
var studentsArray = ["Maqsood", "Safiullah", "Ejaz"]
var score = [360,440, 368]
var totalMarks = 500
document.write(`<br>Score of ${studentsArray[0]} is ${score[0]}. Percentage: ${(score[0]/totalMarks)*100}<br>Score of ${studentsArray[1]} is ${score[1]}. Percentage: ${(score[1]/totalMarks)*100}<br>Score of ${studentsArray[2]} is ${score[2]}. Percentage: ${(score[2]/totalMarks)*100}`)

//TASK 9
document.write(`<br><br>Question No. 9 :`)
var colorArray = ["green", "red","yellow"]
var userColor = prompt(`Your have following colors in your array, which color do you want to add at the begining of color array\n${colorArray}`)
colorArray.unshift(userColor)
document.write(`<br><br>a) Updated Array : ${colorArray}`)
userColor = prompt("Which color you want in the end of color array?")
colorArray.push(userColor)
document.write(`<br><br>b) Updated Array : ${colorArray}`)
userColor = prompt("Please add another color at the begining of array")
colorArray.unshift(userColor)
userColor = prompt("Please add another color at the begining of array")
colorArray.unshift(userColor)
document.write(`<br><br>c) Updated Array : ${colorArray}`)
colorArray.shift()
document.write(`<br><br>d) Updated Array : ${colorArray}`)
colorArray.pop()
document.write(`<br><br>e) Updated Array : ${colorArray}`)
var index = +prompt("In which index you want to add color?")
userColor = prompt("Please enter color name")
colorArray.splice(index,0,userColor)
document.write(`<br><br>f) Updated Array : ${colorArray}`)
var index = +prompt("In which index you want to add color?")
colorArray.splice(index,1)
document.write(`<br><br>g) Updated Array : ${colorArray}`)

//TASK 10
document.write(`<br><br>Question No. 10 :`)
var scoreArray = [320, 230, 480, 120]
document.write(`<br>Scores of students : ${scoreArray}`)
scoreArray.sort()
document.write(`<br>Ordered scores of students : ${scoreArray}`)

//TASK 11
document.write(`<br><br>Question No. 11 :`)
var citiesArray = ["Islamabad", "Queta","Peshawar", "Karachi","Multan"]
document.write(`<br>Cities List : ${citiesArray}`)
document.write(`<br>Cities List : ${citiesArray.slice(1,4)}`)

//TASK 12
document.write(`<br><br>Question No. 12 :`)
var unJointArray = ["This", "is", "my", "cat"]
document.write(`<br>Array : ${unJointArray}`)
var convertArray =unJointArray.join(" ")
document.write(`<br>String : ${convertArray}`)

// //TASK 13
document.write(`<br><br>Question No. 13 : FIFO mathod`)
var storeArray = []
document.write(`<br>In Process<br> : ${storeArray[0]= "Monitor"}`)
document.write(`<br> : ${storeArray[1]= "Keyboard"}`)
document.write(`<br> : ${storeArray[2]= "Mouse"}`)
document.write(`<br> : ${storeArray[3]= "Printer"}`)
document.write(`<br>Out<br> : ${storeArray.shift()}`)
document.write(`<br>Out<br> : ${storeArray.shift()}`)
document.write(`<br>Out<br> : ${storeArray.shift()}`)
document.write(`<br>Out<br> : ${storeArray.shift()}`)

//TASK 14
document.write(`<br><br>Question No. 14 : LIFO mathod`)
var storeArray = []
document.write(`<br>In Process<br> : ${storeArray[0]= "Monitor"}`)
document.write(`<br> : ${storeArray[1]= "Keyboard"}`)
document.write(`<br> : ${storeArray[2]= "Mouse"}`)
document.write(`<br> : ${storeArray[3]= "Printer"}`)
document.write(`<br>Out<br> : ${storeArray.pop()}`)
document.write(`<br>Out<br> : ${storeArray.pop()}`)
document.write(`<br>Out<br> : ${storeArray.pop()}`)
document.write(`<br>Out<br> : ${storeArray.pop()}`)

// TASK 15
document.write(`<br><br>Question No. 15 : `)
var Phonemanufacture = ["Nokia", "Apple", "Samsung", "Motorola", "Sony", "Haier"]
document.write(`<select name="Phone" id="phone">
<option value="${Phonemanufacture[0]}">${Phonemanufacture[0]}</option>
<option value="${Phonemanufacture[1]}">${Phonemanufacture[1]}</option>
<option value="${Phonemanufacture[2]}">${Phonemanufacture[2]}</option>
<option value="${Phonemanufacture[3]}">${Phonemanufacture[3]}</option>
<option value="${Phonemanufacture[4]}">${Phonemanufacture[4]}</option>
<option value="${Phonemanufacture[5]}">${Phonemanufacture[5]}</option>
</select>`)