(function(){
let $result = document.querySelector('.result');
let $xs = document.querySelector('.xs');
let $number = document.querySelectorAll('.btn.number');
let $ac = document.querySelector('.ac');
let $shanChu = document.querySelector('.shanchu');
let $pingfang = document.querySelector('.pingfang');
let $chu = document.querySelector('.chu');
let $cheng = document.querySelector('.cheng');
let $jian = document.querySelector('.jian');
let $jia = document.querySelector('.jia');
let $equal = document.querySelector('.equal');
let $dot = document.querySelector('.dot')

var jieGuo = {               //变量放在对象里组织方便
    result :`0`,
};

function jieguo(result){
    $result.innerText = result;
    if ($result.offsetWidth > 288) {
        textresult.style.fontSize = 576/hiddenspan.offsetWidth + 'rem';
      }
}jieguo(jieGuo.result);
 
//事件只能绑定在一个元素上面因此需要for of遍历
for (let $numbers of $number) {
    $numbers.addEventListener('click',event=>{
       var number = event.target.dataset.number;
        if(jieGuo.result==='0'){
            jieGuo.result=number;
        }
        else jieGuo.result+=number;
        jieguo(jieGuo.result)
    })  
};  

$ac.addEventListener('click',()=>{
    jieGuo.result='0';
    jieguo(jieGuo.result);
})

$shanChu.addEventListener('click',()=>{
    if(jieGuo.result.length===1){
        jieGuo.result='0';
    }
    else jieGuo.result = jieGuo.result.slice(0,jieGuo.result.length-1);
    jieguo(jieGuo.result);
})

$pingfang.addEventListener('click',()=>{
    jieGuo.result*=jieGuo.result;
    jieguo(jieGuo.result);
})

$chu.addEventListener('click',()=>{
    if(jieGuo.result==='0'||jieGuo.result.split('').reverse().join('').indexOf('/')===0){
    }else jieGuo.result+='/';
    jieguo(jieGuo.result);
})

$cheng.addEventListener('click',()=>{
    if(jieGuo.result==='0'||jieGuo.result.split('').reverse().join('').indexOf('*')===0){
    }else jieGuo.result+='*';
    jieguo(jieGuo.result);
})

$jian.addEventListener('click',()=>{
    if(jieGuo.result==='0'||jieGuo.result.split('').reverse().join('').indexOf('-')===0){
    }else jieGuo.result+='-';
    jieguo(jieGuo.result);
})

$jia.addEventListener('click',()=>{
    if(jieGuo.result==='0'||jieGuo.result.split('').reverse().join('').indexOf('+')===0){
    }else jieGuo.result+='+';
    jieguo(jieGuo.result);
})

$equal.addEventListener('click',()=>{
    jieGuo.result = String(eval(jieGuo.result));
    jieguo(jieGuo.result)
})

$dot.addEventListener('click',()=>{
    if(jieGuo.result.indexOf('.')!==-1){
    }
    else jieGuo.result+='.';
    jieguo(jieGuo.result)
})

})()