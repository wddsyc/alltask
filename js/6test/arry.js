// function squareArr(arr){
//    return arr.map(a=>(a*a))
// }
// var arr = [2, 4, 6]

// console.log(squareArr(arr))

function filterPositive(arr) {
    var ab = arr.map(a => { if (typeof (a) == "number") { return Math.abs(a) } ;if (typeof (a) !== "number") { return a } });
    return ab
}
console.log(filterPositive([3, -1, 2, '饥人谷', true]))

