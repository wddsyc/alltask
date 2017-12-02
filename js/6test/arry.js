// function filterPositive(arr) {
//     return arr.filter(n => {
//         if (typeof n == `number`) {
//             return n > 0
//         }
//     })
// }
// var arr = [3, -1, 2, '饥人谷', true]
// var newArr = filterPositive(arr)
// console.log(newArr) //[3, 2]
// console.log(arr)

function squareArr(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]*=arr[i]
    }
        return arr
    }
    var arr = [2, 4, 6]
    squareArr(arr)
    console.log(arr)