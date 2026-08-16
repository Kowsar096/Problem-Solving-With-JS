const number = [1, 2, 34, 54, 3];
const player = [{}, {}, {}];

// Array of object

const employees = [
    { name: 'Ashik', designation: 'Content Writer', salary: 25000 },
    { name: 'Sorif', designation: 'Developer', salary: 29000 },
    { name: 'Jamal', designation: 'Digital Marketer', salary: 21000 }
]

console.log(employees); // full array

console.log(employees[1]); // specific array

console.log(employees[1].salary); // specific property value

// using loop

for(const employee of employees){
    // console.log(employee); // full array print

    // console.log(employee.salary); // specific property value
    const person = employee;
    const personInfo = person.name + ':' + person.salary; // name and salary print in one line
    
    console.log(personInfo); 

}


