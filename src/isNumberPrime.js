function isNumberPrime(number){
    if(number<=1){
        return false;
    }
    for(let i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

function primeNumbers(){
    for(let i=0;i<1000;i++){
        if(isNumberPrime(i)){
            console.log(i);
        }
    }
}
primeNumbers()