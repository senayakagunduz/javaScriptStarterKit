import { users } from "../data/users.js";

export default class EmployeeRepository{
    constructor(){
        this.employees=users.filter(employee=>employee.type==='employee');
    }
    getAll(){
        return this.employees;
    }
    getById(){
      return this.employees.find(employee=>employee.id==='id')  
    }
    add(newEmployee){
        this.employees.push(newEmployee);
    }
    update(newEmployee){
       const employeeIndex=this.employees.findIndex(employee=>employee.id===newEmployee.id)
    }
    delete(newEmployee){
        const employeeIndex=this.employees.findIndex(employee=>employee.id===newEmployee.id)
       // this.employees.delete(employeeIndex);
    }

}