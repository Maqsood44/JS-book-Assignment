// i. Get element of id "main-content" and assign them in a variable.
var mainContent = document.getElementById("main-content")

// ii. Display all child elements of "main-content" element.
var children = mainContent.childNodes
console.log(children)
 // You can modify this to display the children in the desired format on the webpage.

// iii. Get all elements of class "render" and show their innerHTML in the browser.
var renderElement = document.getElementById('rendereElement')
var renderElements = document.getElementsByClassName("render")
var html = ''
for (var i = 0; i < renderElements.length; i++){
    html += i 
}
console.log(html)
renderElement.innerHTML= html

// iv. Fill input value whose element id is "first-name" using JavaScript.
var firstName = document.getElementById("first-name")
firstName.value = "Maqsood"

// v. Repeat part iv for id "last-name" and "email" in JS.
var lastName =document.getElementById('last-name')
var emailInput = document.getElementById("email")

lastName.value = "Ahmad"
emailInput.value = "s.maqsood44@gmail.com"

// //TASK 2
// i. What is node type of element having id “form-content”.
var formContent = document.getElementById("form-content")
console.log(formContent.nodeType)

// ii.  Show the node type of the element with the id "lastName" and its child node:
var lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType);
console.log(lastNameElement.childNodes[0].nodeType);

// iii. Update the child node of the element with the id "lastName":
var lastNameElement = document.getElementById("lastName");
lastNameElement.childNodes[0].nodeValue = "New Last Name";

// iv. Get the first and last child of the element with the id "main-content":
var mainContentElement = document.getElementById("main-content");
var firstChild = mainContentElement.firstChild;
var lastChild = mainContentElement.lastChild;
console.log(firstChild);
console.log(lastChild);

// v. Get the next and previous siblings of the element with the id "lastName":
var lastNameElement = document.getElementById("lastName");
var nextSibling = lastNameElement.nextSibling;
var previousSibling = lastNameElement.previousSibling;
console.log(nextSibling);
console.log(previousSibling);

// vi. Get the parent node and node type of the element with the id "email":
var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
console.log(parentNode);
console.log(emailElement.nodeType
