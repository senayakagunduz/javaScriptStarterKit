function addToCart(productName="Elma",quantity){
    console.log("sepete eklendi: ürün: "+productName + "adet: " + quantity)
}

//addToCart()
addToCart( 10)
//addToCart("Karpuz")
let sayHello=()=>{
    console.log("Hello world")
}
let sayHello2=function(){
    console.log("Hello world");
}
function addtoCart2(productName,quantity,unitPrice){

}
addtoCart2("Elma",5,10)
addtoCart2("Armut",3,15)

function addtoCart4(x){
    console.log(products)
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Erik",unitPrice:12,quantity:50},
    {productName:"Armut",unitPrice:10,quantity:10}
]
addtoCart4(products)
function add(number1, number2) {
    console.log(number1+number2)
}
add(20,30)
function add2(...numbers) {
    console.log(numbers)
}
add2(20,30)
add(20,30,40)
add(20,30,40,50)

function add2(...numbers) {
    for(let i=0;i<numbers.length;i++){
        total=total+numbers[i]
    }
    console.log(total)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)



function findPrime(...number) {
    for(let i=0;i<number.length;i++){
        if(number<=1){
            console.log("1 is neither prime or composite number.")
        }else if(number>1){
            for(let i=2;i<number;i++){
                if(number%i==0){
                    console.log(number + " is not a prime number.")
                    return;
                }       
            }
        console.log(number + " is a prime number")
        }
    }
}   
findPrime(10,30,1,3,13)





