//!task1
let arr1 = [1, 2, 3, 4];
//!task2
let arr2;
arr2 = [1, 2, 3];
arr2 = ["a", "b", "c"];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
//!task3 
let num;
num = 1;
num = true;
//!task4
function handling(x1, x2) {
    if (x2 !== undefined && x1 !== undefined)
        return x1 + x2;
    if (x1 !== undefined)
        return x1;
    return 0;
}
handling();
class Employee {
    constructor(employeeData) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this.username = employeeData.username;
        this.email = employeeData.email;
        this.address = employeeData.address;
    }
    viewAddress() {
        console.log("Manager Address:");
        console.log(this.address);
    }
}
const employeeData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
};
const employee = new Employee(employeeData);
console.log(employee.username); // Output: Bret
//!task6 
class Manager extends Employee {
    constructor(managerData) {
        super(managerData);
    }
}
const managerData = {
    id: 2,
    name: "ahmed",
    username: "ahmedreda",
    email: "ahmed@gmail.com",
    address: {
        street: "123 abo bakr",
        suite: "101",
        city: "Cairo City",
        zipcode: "12345",
        geo: {
            lat: "40",
            lng: "53",
        },
    },
};
const manager = new Manager(managerData);
manager.viewAddress();
