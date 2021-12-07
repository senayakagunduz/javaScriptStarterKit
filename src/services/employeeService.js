import EmployeeValidator from "../CrossCuttinConcern/validation/EmployeeValidator.js";
import ErrorResult from "../models/result/errorResult.js";
import SuccessResult from "../models/result/successResult.js";
import EmployeeRepository from "../repository/employeeRepository.js";

export default class EmployeeService{
    constructor(loggerService){
        this.employeeRepository=new EmployeeRepository;
        this.loggerService=loggerService;
        this.employeeValidator=new EmployeeValidator;
        this.errors=[];
    }
    getAll(){
        const employees=this.employeeRepository.getAll();
        return new SuccessResult(employees);
    }
    add(employee){
       const errors=this.employeeValidator.validate(employee);
       this.employeeRepository.add(employee);
       return new SuccessResult(`${employee} is added.`);
    }
    getById(id){
        const employee=this.employeeRepository.getById(id);
        if(!employee){
            return new ErrorResult("employee is absent")
        }
        return new SuccessResult(`${employee.id} :id account is here`)
    }
    isEmployee(user){
        return this.employeeValidator.validate(user);
    }
    getEmployeesSorted(){
        const sortedEmployees=this.employeeRepository.employees.sort((a,b) => a.firstName.localeCompare(b.firstName)); 
        return new SuccessResult(sortedEmployees);
    } 
    /*load() {
        for (const user of users) {
           if(!this.checkEmployeeValidityForErrors(user)){
                    this.employees.push(user)}  
            else{
                this.errors.push(new DataError("Wrong message type",user))
            }  
        }
    }*/
    
} 