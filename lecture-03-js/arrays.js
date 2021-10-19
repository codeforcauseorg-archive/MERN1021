let a = [10, 20, 30, 30 , 4, 5, 2, 5]
// let arr = new Array(10)
// arr[3] = 34
// console.log(arr)


// a.push(59)
// console.log(a);

// console.log(a.pop())
// console.log(a)


// a.unshift(2)
// console.log(a)
// console.log(a.shift())
// console.log(a)

// console.log(a.indexOf(20))

// console.log(a.slice(2, 5))
// console.log(a.slice())

// console.log(a.splice(2, 2))
// console.log(a)

// a.splice(2, 0, 100, 200)
// console.log(a)

// a.splice(2, 2, 100, 200)
// console.log(a)

// let arr = a.map(function(val){
//     return val*2
// })

// console.log(arr)

let filter = a.filter(function(val){
    return val%2!=0
})

console.log(filter)
