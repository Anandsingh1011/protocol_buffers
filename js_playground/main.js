const fs = require("fs");

const employees = []

employees.push({
    "name": "Anand",
    "salary": 6000,
    "id": 1001
})

const john = {
    "name": "John",
    "salary": 8000,
    "id": 1002
}

employees.push(john);

employees.push({
    "name": "Groff",
    "salary": 10000,
    "id": 1003
})

fs.writeFileSync("jsondata.json", JSON.stringify(employees));