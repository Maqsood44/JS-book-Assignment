// // TASK 1
function displayFormData(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const Data = `
      <h2>Form Data:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
    document.getElementById('formData').innerHTML = Data;
    // document.getElementById('signupForm').reset();
}

// // TASK 2
function toggleDetails(button) {
    const item = button.parentNode;
    const fullDetails = document.getElementById('full-details');

    if (fullDetails.style.display === 'none') {
        fullDetails.style.display = 'block';
        button.textContent = 'Read less';
    } else {
        fullDetails.style.display = 'none';
        button.textContent = 'Read more';
    }
}

// //TASK 3
let students = [];
function addStudent(event) {
    event.preventDefault();
    const student = {
        sname: document.getElementById('sname').value,
        age: document.getElementById('age').value,
        grade: document.getElementById('grade').value
    }
    students.push(student)
    showDate()
    document.getElementById('studentForm').reset()
}

function showDate() {
    var html = ''
    const studentTableBody = document.getElementById('studentTableBody')
    students.forEach((elm, index) =>{
        html +=`<tr>
        <td>${elm.sname}</td>
        <td>${elm.age}</td>
        <td>${elm.grade}</td>
        <td>
            <button id="${index}" class="btn btn-danger" onclick="deleteRow(this.id)">Delete</button>
            <button id="${index}" class="btn btn-success" onclick="updateRow(this.id)">update</button>
        </td>
    </tr>`
    })
    studentTableBody.innerHTML=html
}
showDate()

function deleteRow(e){
    students.splice(e,1)
    showDate()
}

function updateRow(e){
    var update = document.getElementById(e)
    update.parentElement.parentElement.innerHTML = ` 
    <td><input type="text" class="form-control" value="${students[e].sname}" id="sname${e}" ></td>
    <td><input type="number" class="form-control" value="${students[e].age}" id="age${e}" ></td>
    <td><input type="text" class="form-control" value="${students[e].grade}" id="grade${e}" ></td>
    <td><button type="button" id="${e}" onclick="update(this.id)" class="btn btn-primary">Update</button></td>`    
}

function update(e){
    var row = {
        sname : document.getElementById(`sname${e}`).value,
        age : document.getElementById(`age${e}`).value,
        grade : document.getElementById(`grade${e}`).value
    }
    students[e] = row
    showDate()
}


