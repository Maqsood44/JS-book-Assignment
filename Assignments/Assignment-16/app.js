// // Task 2
function showAlert(){
    alert("Thanks for perchasing")
}

// // Task 3
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// // Task 4
var image = document.getElementById("image")
var originalImg = image.src
function  shownew(){
    image.src= "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
}

function showOriginal(){
    image.src = originalImg
}
// //TASK 5
var count = 0
var counterValue = document.getElementById("counterValue")
function increaseCount(){
    count +=1
    counterValue.textContent = count
}
function decreaseCount(){
    count -=1
    counterValue.textContent = count
}