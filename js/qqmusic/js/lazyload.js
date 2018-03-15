function lazyload(images) {
    let imgs = Array.from(images)
    
    let observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (entry.intersectionRatio > 0){
                loadImage(entry.target,()=>{
                    observer.unobserve(entry.target)
                })
            }
        })
    })

   imgs.forEach(img=>observer.observe(img))
//    let scroll = throttle(function() {          //let scroll = _throttle(function(){
//     console.log(new Date())
//     if (imgs.length === 0) {
//         return window.removeEventListener(`scroll`, scroll)
//     }
//     imgs.forEach(img => {
//         if (inViewport(img)) {
//             loadImage(img)
//         }
//     })
// },300)
//     window.addEventListener(`scroll`, scroll)
//     document.querySelectorAll(`.nav-item`)[1].addEventListener(`click`, showFirstview)

    function throttle(func,wait) {
        let prev,timer
        return function fn() {
            let cur = Date.now()
            let diff = cur - prev
            if(!prev || diff>wait){
                func()
                prev = cur
            }else if(diff<wait){
                clearTimeout(timer)
               timer = setTimeout(fn,wait-diff)
            }
        }
    }
    
    // function showFirstview() {
    //     setTimeout(function () {
            
    //     });
    // }
    
    // function inViewport(img) {
    //     let { top, left, bottom, right } = img.getBoundingClientRect()
    //     let vpWidth = window.innerWidth
    //     let vpHeight = window.innerHeight
    //     return ((top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) && (right > 0 && right < vpWidth && left > 0 && left < vpWidth))
    // }
    function loadImage(img,callback) {
        img.src = img.dataset.src
        img.classList.remove(`lazyload`)
        if(typeof callback ===`function`) callback()
    }
}