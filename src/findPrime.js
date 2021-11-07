function findPrime(...numbers) {
    numbers.forEach(item => {
        if (item < 2) 
            console.log(item + ' is not a prime number')
        else if (item % 2 === 0)
            console.log( item+ ' is not a prime number')
        else 
            console.log(item +' is prime number')
    } 
      
)}
console.log(perfect(1,2,3,4,10,11))


 