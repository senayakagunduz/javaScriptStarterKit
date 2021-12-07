
//import { ElasticLogger } from "../CrossCuttinConcern/logging/logger.js";
import Customer from "../models/customer.js";
import Employee from "../models/employee.js";
//import User from "../models/user.js";
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js";


console.log("User component loaded...");

let customerService=new CustomerService();
let employeeService=new EmployeeService();
//constructor(id, firstName, lastName, city,age,salary)
let user1=new Customer(1,"Beyza","Ak","istanbul",5,"12345");
let user2=new Employee("2","Ayşe","Ak","Ankara",7);
let user3=new Employee(3,"Meral","Ok","Bursa",25);

console.log("<======customers======>")
customerService.add(user1);
console.log(customerService.list());
console.log(customerService.getCustomersSorted());

console.log("<=====employees======>")
employeeService.add(user3);
console.log(employeeService.getAll());
console.log(employeeService.getEmployeesSorted());

/*const customerList = users.filter(user=>isCustomer(user));
const employeeList = users.filter(user=>isEmployee(user));

customerList.forEach(element => {
    console.log(element);
});
employeeList.forEach(element => {
    console.log(element);
});

function isCustomer(user) {
    return customerService.isCustomer(user) ? false : true;
 }

 function isEmployee(user) {
    return employeeService.isEmployee(user) ? false : true;
 }
*/

