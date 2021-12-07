let cart=[
    {id:1,productName:"telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarz cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150}
]

function addToCart(sepet){
    sepet.push({id:7,productName:"Bilgisayar",quantity:1,unitPrice:10000})
}
addToCart(cart);

console.log(cart);

cart.map(product=>{
    console.log(product.id+":"+product.productName+"=>"+product.quantity*product.unitPrice)
})

function addToCartt(sepet){
    sepet.push({id:8,product:"Ruhsat",quantity:1,unitPrice:30})
}
addToCartt(cart)
console.log(cart);

let quantityOver2=cart.filter(product=>product.quantity>2)
console.log(quantityOver2);

let showNamesAndPrice=cart.map(product=>product.productName+":"+product.quantity*product.unitPrice)
console.log(showNamesAndPrice)

let total=cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log("total:"+total)

let sum=cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log("sum:"+sum)
