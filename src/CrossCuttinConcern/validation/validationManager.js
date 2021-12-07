import DataError from "../../models/result/dataError.js";
export default class ValidationManager{
    constructor(){
         this.errors=[]
    }
    isRequired(entity,...filters){
        let hasErrors=false
        for(let field of filters){
            if(!entity[field] || entity[field]==""){
                hasErrors=true;
                this.errors.push(new DataError(`Validation problem. ${field} is required`,entity));
            }
        }
        return hasErrors;
    }
    isNumeric(entity,...filters){
        let hasErrors=false
        for(let field of filters){
            if(Number.isNaN(Number.parseInt(entity[field])||(entity[field])==="undefined")){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem.${field} is required`,entity));
            }
        }
        return hasErrors;
    }
    getErrorResult(){
        return this.errors;
    }
}