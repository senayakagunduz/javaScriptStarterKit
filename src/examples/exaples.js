const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((item, index, arr) => {
    console.log('a[' + index + ']=', item);
})

const numberss = [1, 2, 3, 4, 5]
let sum = 0;
numberss.forEach(item => {
    sum += item;
})
console.log(sum)

const letters = ['a', 'b', 'a', 'b', 'c']
let count = {};
letters.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1
    }
});
console.log(count);

const cars = ["volvo", "BMW", "Audi", "Mercedes"]
cars.forEach(item => {
    console.log(cars[1])

})

const vehicles = new Array("bus", "train", "truck");
console.log(vehicles)

const infos = { firstname: "şenay", lastname: "AKAGÜNDÜZ", phoneNumber: "05396637014" }
console.log(infos)

const fruits = ["apple", "banana", "plump", "watermelon"];
let uzunluk = fruits.length;
console.log(uzunluk);

const meyveler = ["apple", "banana", "plump", "watermelon"]
let text = "<ul>";
meyveler.forEach(myFunction)
text += "</ul>";
function myFunction(value) {
    console.log(text += "<li>" + value + "</li>")
}


console.log(findPrime(7,5,2,4))

function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
        let  kontrol = false

        for (let x = 2; x < numbers[i]; x++) {
                if(numbers[i]%x==0)
                    kontrol=true
                         
        }
        if(kontrol==false)
            console.log(numbers[i])
}
}
findPrime(5,8,12,13)


