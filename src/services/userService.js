


export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService;
    }  
    add(user){
        this.loggerService.log(user);
    }
   
}

