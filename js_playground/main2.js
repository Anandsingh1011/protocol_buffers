const Schema = require("./employees_pb");
const fs = require("fs")

const anand = new Schema.Employee();
anand.setId(1001);
anand.setName("Anand");
anand.setSalary(6000);

const john = new Schema.Employee();
john.setId(1002);
john.setName("John");
john.setSalary(8000);

const groff = new Schema.Employee();
groff.setId(1003);
groff.setName("Groff");
groff.setSalary(10000);


const employees = new Schema.Employees();
employees.addEmployees(anand);
employees.addEmployees(john);
employees.addEmployees(groff);
const bytes = employees.serializeBinary();
console.log("binary " + bytes)
fs.writeFileSync("employeesBinary", bytes)


const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString())