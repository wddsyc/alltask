第一题最大到最小取个随机数（不包括最小的）
```js
function mtm(min,max){
return Math.floor(Math.random()*(max-min)+min)
}console.log(mtm(2,9))
```
第二题最大到最小取个随机数（包括最小的）
```js
function mtm1(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}console.log(mtm1(2,9))
```

从字符串中取随机的字符

```js
function num(n) {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = "";
    for(let i=1;i<=n;i++){
        let num = Math.floor((str.length+1)*Math.random());
      console.log(num)
        let selec = str[num];
        res +=selec
    }
    return res;
}
console.log(num(6))
```

```js
function getRandIP(){
    let num1=0,num2=0,num3=0,num4=0;
    num1 = Math.floor(Math.random()*256); 
    num2 = Math.floor(Math.random()*256); 
    num3 = Math.floor(Math.random()*256); 
    num4 = Math.floor(Math.random()*256); 
return `${num1}.${num2}.${num3}.${num4}`
  }
  var ip = getRandIP()
  console.log(ip)
```
生成ip
```js
function getRandIP(){
  let ip = [];
  for(let i=0;i<4;i++) {
      ip.push(Math.floor(Math.random()*256))
  }
  return ip.join(`.`)
  }
  var ip = getRandIP()
  console.log(ip)
```
生成十六进制颜色
```js
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
```
## Array任务
### 用 splice函数分别实现push、pop、shift、unshift方法
```js
let arr=[1,2,3,4,5]
arr.push(6)
arr.splice(arr.length,0,7)
console.log(arr)
arr.pop()
arr.splice(arr.length-1,1)
console.log(arr)
arr.shift()
arr.splice(0,1)
console.log(arr)
arr.unshift(2)
arr.splice(0,0,1)
console.log(arr)
```

### 写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作
```js
function squareArr(arr){
for(let i=0;i<arr.length;i++){
    arr[i]*=arr[i]
}
    return arr
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr)
```
### 写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变
```js
function filterPositive(arr) {
    return arr.filter(n => {
        if (typeof n == `number`) {
            return n > 0
        }
    })
}
var arr = [3, -1, 2, '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr)
```
## date