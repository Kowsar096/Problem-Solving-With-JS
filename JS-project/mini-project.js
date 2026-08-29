// mini project

let students =[
    { id: 101, name:'Rahim', age: 20, department: "CSE"},
    { id: 102, name:'Karim', age: 20, department: "EEE"},
    { id: 103, name:'Jamal', age: 20, department: "CSE"},
    { id: 104, name:'kamal', age: 20, department: "TEX"},
];

function addStudent (name, age, dept){
    let newId = students.length > 0 ? students[students.length - 1].id + 1  : 101;
    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department : dept,
    };

    students.push(newStudent);
    console.log("Student added successfully");

}

addStudent('fahim', 25, "AI");
console.log(students);
// get all the student

function getAll(){
    for(const student of students){
        console.log(student);
    }
}

// getAll()

// found student

function findStudent(id){
    let foundStudent = null;

    for (let student of students){
        if (student.id == id){
            foundStudent = student;
            break;
        }
    }

    if(foundStudent){
        console.log("found student: ", foundStudent);

    }

    else{
        console.log("404 not found")
    }
}

findStudent(102);

// delete student

function deleteStudent(id){
    let targetStudent = -1;

    for(let i = 0; i< students.length; i++){
        if (students[i].id == id){
            targetStudent = i;
            break;
        }
    }
    if(targetStudent != -1){
        let deleteStudent = students.splice(targetStudent, 1);
        console.log(`Deleted ${deleteStudent[0].name} id: ${targetStudent} deleted`)

    }

    else{
        console.log("404 not found")
    }
}

deleteStudent(102);
getAll();