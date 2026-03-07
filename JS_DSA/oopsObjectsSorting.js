class Employee {
  constructor(name,salary){
    this.salary=salary
    this.name=name
  }
}
let Employee1=new Employee ("am",2345)
const Employee2=new Employee ("sh",23455)
const Employee3=new Employee ("hi",234555)
const Employee4=new Employee ("iva",2345555)
const Employee5=new Employee ("s",234)
// console.log(Employee)
let arr=[Employee1,Employee2,Employee3,Employee4,Employee5]
console.log(arr)
let comparator1 =(a,b)=>{return b.salary-a.salary}
console.log(arr.sort(comparator1))
let comparator2 =(a,b)=>{return b.name.localeCompare(a.name)}
console.log(arr.sort(comparator2))
// or 
arr = arr.sort(function (a, b) { return a.salary - b.salary})
console.log(arr)



class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

function objCreator(){
  let sharpeners = [];
  for(let i = 0; i < 5; i++){
    const employee = new Employee(`SharpyMe_${''+i}`,1000 + 1000 * i)
    sharpeners.push(employee);
  }
  // console.log(sharpeners.sort((a,b) => { return alphabet(b.name, a.name)}));
  console.log(sharpeners.sort((a,b) => {
    if(a.name < b.name) return 1;
    else if(
      a.name > b.name) return -1;
    else 0;
  }));
}

function alphabet(a,b){
  let length = Math.min(a.length, b.length)
  for(let i = 0; i < length; i++){
    let diff = a.charCodeAt(i) - b.charCodeAt(i);
    if(diff ==0){
      if(i+1 == length) return 0;
      continue;
    }
    else if(diff < 0) return -1;
    else return 1;
  }
}

objCreator();
// chatGPt told me about localeCompare
// console.log(employees.sort((a,b) => {return alphabet(a.name,b.name)}));
// // Sort employees by name
// employees.sort((a, b) => a.name.localeCompare(b.name));

// // Print the sorted list
// console.log("Employees sorted by name:");
// employees.forEach(employee => {
//   console.log(`Name: ${employee.name}, Salary: $${employee.salary}`);
// });


