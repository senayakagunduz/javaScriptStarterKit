
function isPerfect(number){
var temp=0
for(let i=1;i<=number/2;i++){
    if(number%i==0)
        temp+=i
}
if(temp===number && temp!==0)
    console.log(number+ " is perfect number")
else
    console.log(number+ " is not perfect number")
    
}
isPerfect(28)
    