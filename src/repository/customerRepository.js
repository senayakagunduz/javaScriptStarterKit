import { users } from "../data/users.js";

export default class CustomerRepository {
    constructor(){
        this.customers=users.filter(user=>user.type==='customer');
    }
    getAll(){
        return this.customers;
    }
    getById(id){
        return this.customers.find(customer=>customer.id===id);    
    }
    add(newCustomer){
        this.customers.push(newCustomer);
    }
    update(exist_customer){
        const newCustomerIndex=this.customers.findIndex(customer=>customer.id===exist_customer.id);
        this.customers[newCustomerIndex]=exist_customer;
    }
    delete(exist_customer){
        this.customers.delete();
        this.customers = this.customers.filter(customer => customer.id !== exist_customer.id);
        
    }
}