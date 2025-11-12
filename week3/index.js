
// //import module

// const module1 = require("./StudentInfo")


// name=module1.name
// Salary=module1.Salary

// module1.EmployeeInfoArrow('Smith',50000)

// const module2 =require('./Person')


// person = new module2('ALice',22,'alice@icloud.com')
// console.log(person.getPersonInfo())



function EmployeeInfo(name, age)
{

console.log('Hi '+name+'. Your age is '+age)

}


name = 'John'
age = '26'

EmployeeInfo(name,age)

function1 = (name,age) => {

    console.log('Hi '+name+ 'from teh arrow function'+'. Your age is '+age)
}

function1(name,age)