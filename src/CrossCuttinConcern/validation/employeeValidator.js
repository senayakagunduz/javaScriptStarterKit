import ErrorResult from "../../models/result/errorResult.js";
import ValidationManager from "./validationManager.js";

export default class EmployeeValidator{
    constructor(){
      this.validationManager=new ValidationManager;
      this.errorResult=new ErrorResult;
      this.errors=[];
      this.validateArray=[];
    }
    validate(user){
        let hasErrors=false
        this.validateArray.push(
        this.validationManager.isRequired(user,"id", "firstName","lastName"),
        this.validationManager.isNumeric(user,"age")
        )
        this.validateArray.forEach(isTrue => {
            if(isTrue){
                console.log(this.validationManager.getErrorResult());
            }
            
        });
        return hasErrors;
    }

    
}