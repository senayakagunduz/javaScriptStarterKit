export class BaseLogger{
    log(data){
        console.log("Default Logger: "+ data)
    }
}
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("ElasticLogger"+ data)
    }
}
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("MongoLogger" +data)
    }
}