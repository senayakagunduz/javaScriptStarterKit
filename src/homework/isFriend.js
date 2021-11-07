
function isFriend(x, y) {
    var max = Math.max(x, y)
    var sum1 = 0
    var sum2 = 0
    for (let i = 1; i < max; i++) {
        if (x != i && x % i == 0)
            sum1 = sum1 + i
        if (y != i && y % i == 0) 
            sum2 = sum2 + i}
    if (sum1 == y && sum2 == x) 
        console.log(x + " and " + y + " are friend numbers")
    else 
        console.log(x + " and " + y + " are not friend numbers")
    
}
console.log(isFriend(220, 284))