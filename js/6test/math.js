// 第一题最大到最小取个随机数（不包括最小的）
// function mtm(min,max){
// return Math.floor(Math.random()*(max-min)+min)
// }console.log(mtm(2,9))
// 第二题最大到最小取个随机数（包括最小的）
// function mtm1(min,max) {
//     return Math.floor(Math.random()*(max-min+1)+min)
// }console.log(mtm1(2,9))
//从字符串中取随机的字符
// function num(n) {
//     const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let res = "";
//     for(let i=1;i<=n;i++){
//         let num = Math.floor((str.length+1)*Math.random());
//       console.log(num)
//         let selec = str[num];
//         res +=selec
//     }
//     return res;
// }
// console.log(num(6))

// function getRandIP(){
//     let num1=0,num2=0,num3=0,num4=0;
//     num1 = Math.floor(Math.random()*256); 
//     num2 = Math.floor(Math.random()*256); 
//     num3 = Math.floor(Math.random()*256); 
//     num4 = Math.floor(Math.random()*256); 
// return `${num1}.${num2}.${num3}.${num4}`
//   }
//   var ip = getRandIP()
//   console.log(ip)

//生成ip
// function getRandIP(){
//   let ip = [];
//   for(let i=0;i<4;i++) {
//       ip.push(Math.floor(Math.random()*256))
//   }
//   return ip.join(`.`)
//   }
//   var ip = getRandIP()
//   console.log(ip)

//生成十六进制颜色
function getRandColor() {
    let color = `0123456789abcdef`;
    let cr = [];
    console.log(color.length);
    console.log(color[15]) ;
    console.log(color[Math.floor(Math.random()*color.length)]); 
    for(let i=0;i<=5;i++){
        cr.push(color[Math.floor(Math.random()*color.length)])
    }
    return `#${cr.join(``)}`;
}
var color = getRandColor()
console.log(color) 