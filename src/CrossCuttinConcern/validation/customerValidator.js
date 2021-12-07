import ValidationManager from "./validationManager.js";


export default class CustomerValidator{
    constructor(){
        this.validationManager=new ValidationManager;
        this.errors=[];
        this.validateArray=[];
    }
    validate(user){
        let hasErrors=false;
        this.validateArray.push(
            this.validationManager.isRequired(user,"id","firstName","lastName"),
            this.validationManager.isNumeric(user,"id","firstName","lastName")
        )
        this.validateArray.forEach(isTrue=>{
            if(isTrue){
                console.log(this.validationManager.getErrorResult())
            }
        })
        return hasErrors;
    }

}