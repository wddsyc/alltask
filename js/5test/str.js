//拼接html
// var prod = {
//     name: '女装',
//     styles: ['短款', '冬季', '春装']
// };
// function getTpl(data){
// let html =`<dl class="product"><dt>${prod.name}</dt><dd>${prod.styles[0]}</dd><dd>${prod.styles[1]}</dd><dd>${prod.styles[2]}</dd></dl>`
// console.log(html)
// };
// var result = getTpl(prod); 
//双斜杠
// var str = `hello\\饥人谷`;
// console.log(str)
// //\n怎么在字符串显示
// var str = 'jirengu\nruoyu';
// console.log(str.length)
var a=`4564567891235578955`;
var result=a.split(``).map(str=>+str);
result.reduce((acc,cur,arr)=>acc)
console.log(result)