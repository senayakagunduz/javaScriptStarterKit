let student={ismi:"Şenay",numarası:11, okulu:"Atatürk İlkokulu"}
console.log(student);

function save(){
    console.log("saved")
}
save();

function save2(ogrenci){
    console.log("Merhaba" +" "+ ogrenci)
}
save2("Beyza");

let employer={id:1,name:"Veli"}
function save3(employer,puan=10){
    console.log(employer.name + ": "+puan)
}
save3(employer);


function tamKatimi(a,b){
    if(a%b==0){
       
        console.log("Yes")
    }else{
       
        console.log("no");
    }
}
tamKatimi(8,4);

function mutlakDegeri(a,b){
    if(a<0){
        b=a*-1;
    }console.log(b);
}
mutlakDegeri(-5)

function sifirlaYuzArasındamı(a){
    if((0<a) && a<100){
        console.log(a + ": 0-100 arasında bir sayı")
    }else{
        console.log(a + ": 0-100 arasında bir sayı değil")
    }
}
sifirlaYuzArasındamı(101)

function kacBasamaklı(a){
    if(a<10){
        console.log(a+": "+"Bir basamaklı bir sayıdır")
    }else if(a<100){
        console.log(a+":"+"İki basamaklı bir sayıdır")
    }else{
        console.log(a+ ": "+"Üç basamaklı bir sayıdır")
    }
}
kacBasamaklı(11)

for(let i=0;i<=10;i++){
    console.log(i)
}

for(let i=10;i>=1;i=i-1){
    console.log(i)
}

let students2=[student,{id:1,name:"halit"}]
console.log(students2)

let students3=[employer,student,{name:"Beyza",favoriteColor:"purple"}]
console.log(students3)

let students4=[student,{id:2,name:"Meral"},"Ankara",{city:"İstanbul"}]
console.log(students4)

let showProducts=function(id, ...products){
    console.log(id);
    console.log(products);
}
showProducts(10,"Elma","Limon","Muz","Kivi")

function sum(a,b){
    return a+b;
}
console.log(sum(4,2))

function sumAll(...args){
    let sum=0;
   for(let arg of args)
   sum+=arg;
   return sum;
}
console.log(sumAll(1,2))
console.log(sumAll(2,5,6))
console.log(sumAll(2,5,6,9,7))

function showName(firstname,lastname,...titles){ 
    console.log(firstname+" "+lastname)
    console.log(titles[0])
    console.log(titles.length);
}

showName("juliet","Sezar","Marcus","Olive")

let points=[1,4,6,7,3,90,65]
console.log(...points)
console.log(Math.max(...points))

let arr1=[1,4,3]
let arr2=[5,8,9]
console.log(Math.max(1,...arr1,2,...arr2))//spread deniliyor, dışarıdaki arrayleri burada açabiliyoruz

let merged=[0,...arr1,1,...arr2] //Arrayleri birleştirir.
console.log(merged)

let str="Hello" //Helloyu tek tek karakterlere ayırır.SPREAD buna deniyor
console.log([...str])//Köseli parantezi yazmaksak hata veriyor

let string="Şenay"
console.log([...string])


let student5={id:1,name:"Beyza"}
function save(ogrenci,puan=100){
    console.log(ogrenci+ " "+puan)
}
save(student5)

let cocuklar=["Beyza","Ayşe","Özüm","Hifasu"]
console.log(cocuklar);

let studentt={ismi:"Ayşe Meral",numarası:11, okulu:"Atatürk İlkokulu"}
let kids=[studentt,{id:1,name:"Beyza"}] //Array içinde başka objeleri tanımlayabiliyoruz
console.log(kids)

let kids2=[studentt,{id:2,name:"Eslem"},"İstanbul",{city:"Ankara"}]
console.log(kids2);

//let productss=["Saat","Monitör","Masa","Koltuk","Sehpa"]
let showProductss=function(id,...productss){
    console.log(id)
   // console.log(productss)
    console.log(productss[1])
    
}
showProductss(10,"Elma","muz","kivi")

function sumAll(...numbers){
   let sum=0;
    for(let number of numbers){
        sum+=number;
    }
    return sum;
}
console.log(sumAll(3,9,8,7,1))

let pointss=[1,4,9,8,80,90,56,88,99]
console.log(...pointss)
console.log("Dizinin en büyük elemanı: "+Math.max(...points))
console.log("Dizinin en küçük elemanı: "+Math.min(...points))

let populations=[10000,20000,30000] //Bu işleme Destructing deniyor.
let[small,medium,high]=populations;
console.log(small)

function someFunction([small1],number){ // populationsın dizideki ilk elemanını small1 arrayine atadı.
    console.log(small1)
}
someFunction(populations)

let category={id:1,name:"içecek"}
console.log(category.id+":"+category.name)

let {id,name}=category;
console.log(category.id);
console.log(category.name);
console.log(category["name"])

let sepet=[
    {id:1,productName:"Telefon",quantity:1,unitPrice:4000},
    {id:2,productName:"Şarz aleti",quantity:2,unitPrice:50},
    {id:3,productName:"Bardak",quantity:6,unitPrice:20}
]
sepet.push({id:4,productName:"Kulaklık",quantity:2,unitPrice:150})

console.log(sepet)

function addToSepet(cart){
    cart.push({id:5,productName:"Tabak",quantity:6,unitPrice:20})
}
addToSepet(sepet);

console.log(sepet)

sepet.map(product=>console.log(product.productName+":"+product.id))










