// Add Student Feature
let students=[];

function addStudent(){

let id=document.getElementById("id").value;

let name=document.getElementById("name").value;

let course=document.getElementById("course").value;

students.push({

id,

name,

course

});

alert("Student Added");

}

function displayStudents(){

let data="";

students.forEach(student=>{

data+=`

<p>

${student.id}

${student.name}

${student.course}

</p>

`;

});

document.getElementById("output").innerHTML=data;

}

function searchStudent(){

let id=document.getElementById("id").value;

let student=students.find(s=>s.id===id);

if(student){

document.getElementById("output").innerHTML=

student.id+" "+student.name+" "+student.course;

}

else{

alert("Student Not Found");

}

}

function deleteStudent(){

let id=document.getElementById("id").value;

students=students.filter(s=>s.id!==id);

alert("Deleted");

}