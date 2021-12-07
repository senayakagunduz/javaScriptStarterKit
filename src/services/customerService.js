import CustomerValidator from "../CrossCuttinConcern/validation/customerValidator.js";
import DataResult from "../models/result/dataResult.js";
import SuccessResult from "../models/result/successResult.js";
import CustomerRepository from "../repository/customerRepository.js";

export default class CustomerService{

        constructor(loggerService){
            this.customerRepository = new CustomerRepository; // boyle
            this.errors=[]
            this.loggerService=loggerService; 
            this.customerValidator=new CustomerValidator; 
        }

         add(customer){
            const errors=this.customerValidator.validate(customer);
            this.customerRepository.add(customer);
            return new SuccessResult(`${customer} is added.`);   
        }
        list(){
            const customers=this.customerRepository.getAll();
            return new SuccessResult(customers)
        }
        getById(id){
            const wantedCustomer= this.customerRepository.getById(id);
            if(!wantedCustomer)
            return new DataResult("The customer that you are looking for is not here");
        }

        isCustomer(user){
            return this.customerValidator.validate(user);
        }
        getCustomersSorted(){
            const sortedCustomers=this.customerRepository.customers.sort((a, b) => a.firstName.localeCompare(b.firstName));      
            return new SuccessResult(sortedCustomers);
        }
}