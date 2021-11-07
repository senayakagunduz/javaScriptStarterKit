var array=["java","Phyton","C++","C"]
for(let i=0;i<array.length;i++){
    console.log(array[i])
}
array.push("Go")
console.log(array.length)

for(var i=0;i<10;i++){
    console.log("i değeri: " +i)
}
var i=0;
while(i<100){
    console.log("i değeri " + i)
    i+=2;
}

var sayilar=[32,5,1,100,-1,90]


console.log("array elemanları...");
for(var i=0;i<sayilar.length;i++){
    console.log("Eleman: "+sayilar[i]);
}

function selamla(isim){
    console.log("merhaba"+isim)
}
selamla("şenay");
selamla("beyza");

function toplama(a,b,c){
   return a+b+c;
}
var toplam= toplama(3,4,5);
console.log("toplamları: " +toplam);

var calisan={
    isim:"Mustafa Murat",
    soyisim:"Coşkun",
    numara:123456,
    diller:["php","java","c++"],
   isimBilgileri:function(){
       return "İsim: "+this.isim+ " Soyisim"+ this.soyisim
   }

};

console.log(calisan.isim);
console.log(calisan.numara)
console.log(calisan.diller)
console.log(calisan.isimBilgileri())

var ogrenci=new Object();
ogrenci.ismi="Senay"
ogrenci.soyisim="Akagündüz"
ogrenci.isimBilgileri=function(){
    return "isim bilgileri: " + this.ismi+" "+this.soyisim;
} 
console.log(ogrenci.ismi)
console.log(ogrenci.soyisim)
console.log(ogrenci.isimBilgileri())

function Calisanlar(isim,soyisim,numara){
    this.isim=isim
    this.soyisim=soyisim;
    this.numara=numara;
    this.bilgileriGoster=function(){
       return "İsim: " +this.isim+ "\nSoyisim : " + this.soyisim+ "\nNumara" + this.numara 
    }
} 
    var Calisan1=new Calisanlar("Şenay","Akagündüz",1234556);
    var Calisan2=new Calisanlar("Beyzanur","Akagündüz",1234546)
    console.log(Calisan1.bilgileriGoster())
    console.log(Calisan2.bilgileriGoster());


















