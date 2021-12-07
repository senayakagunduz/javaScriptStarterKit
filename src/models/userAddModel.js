import User from "./user";

export default class UserAddmodel extends User{
    constructor(id, firstName, lastName, city,age,type){
        super(id,firstName,lastName,city,type)
    }
}