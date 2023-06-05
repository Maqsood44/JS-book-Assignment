//TASK 1
var emptyArray = [[],[]]

//TASK 2
document.write(`<br><br>Question No. 2 :`)
var newArr = [[0, 1, 2, 3], [1, 0, 1, 2],[2,1,0,1]]
newArr.forEach((element) =>{
    document.write(`<br>${element.join(" ")}`)  
})

//TASK 3
document.write(`<br><br>Question No. 3 :`)
for(var i = 1; i<=10; i++){
    document.write(`<br>${i}`)  
}

//TASK 4
document.write(`<br><br>Question No. 4 :`)
var table = +prompt("Enter Table")
var length = +prompt("Entr length of table")
for(var i = 1; i <= length; i++){
    document.write(`<br>${table} x ${i} = ${table * i}`)
}

//TASK 5
document.write(`<br><br>Question No. 5 :<br>List of Fruits in Array :`)
var frouit = ["Apple", "Banana", "Mango", "Orange", "StrawBerry"]
for (var i = 0; i<= frouit.length; i++){
document.write(`<br>Element at index ${i} is ${frouit[i]}`)
}

//TASK 6
document.write(`<br><br>Question No. 6 :`)
document.write(`<br>a) Counting : `)
// // Counting 1 to 10
for(var i = 1; i <=15; i++){
    document.write(` ${i},`)
}
// // Reverse Counting
document.write(`<br>b)Reverse  : `)
for(var i = 10; i >=0; i--){
    document.write(` ${i},`)
}
// // Even Integer
document.write(`<br>c) Even Number : `)
for(var i = 1; i <=20; i++){
    if (i % 2 === 0)
    document.write(` ${i},`)
}
// // Odd Integer
document.write(`<br>d) Odd Number : `)
for(var i = 1; i <=20; i++){
    if (i % 2 != 0)
    document.write(` ${i},`)
}
// // Series
document.write(`<br>e) Even Number : `)
for(var i = 1; i <=20; i++){
    if (i % 2 === 0)
    document.write(` ${i}k,`)
}

//TASK 7
document.write(`<br><br>Question No. 7 :`)
var bakery = ["cake", "apple Pie", "cookie", "chips", "patties"]
var search = prompt("Please search your product.").toLocaleLowerCase()
if (bakery.includes(search)){
    var index = bakery.indexOf(search)
    document.write(` <strong>${search}</strong> is available at index ${index} in our bakery.`)
}
else{
    document.write(`We are sorry, <strong>${search}</strong> is not  available in our bakery.`)
}

//TASK 8
document.write(`<br><br>Question No. 8 :`)
var numberArray = [24, 53, 78, 91, 12];
var largestNumber = numberArray[0]
for (var i = 1; i <= numberArray.length; i++){
    if(numberArray[i] > largestNumber ) 
    {
        largestNumber = numberArray[i]
    }
}
document.write(`Array items :  ${numberArray}`)
document.write(`The largest number is :  ${largestNumber},`)

//TASK 9
document.write(`<br><br>Question No. 9 :`)
var numberArray =  [24, 53, 78, 91, 12]
var smallestNumber = numberArray[0]
for (var i = 1; i <= numberArray.length; i++){
    if(numberArray[i] < smallestNumber ) 
    {
        smallestNumber = numberArray[i]
    }
}
document.write(`Array items :  ${numberArray}<br>`)
document.write(`The smallest number is :  ${smallestNumber}`)

//TASK 10
document.write(`<br><br>Question No. 10 :`)
var multipleOfFive = []
for (var i =1; i<= 100; i++){
    if (i% 5 === 0){
        multipleOfFive.push(i)
    }
}
document.write(`<br>Multiple of 5 from 1 to 10 are : ${multipleOfFive}`)
