class Slider {
    constructor(options = {}) {   //服务器传来的是个对象，这里就要给对象加上属性PS：={}选填
        this.$el = options.el
        this.slides = options.slides
        this.interval = options.interval || 2000   //???!!!
        this.duration = options.duration || 300
        this.render()
        this.index = 1
        this.next()
    }
    render() {   //注意先后顺序，为啥不建议放在构造器里呢，因为要尽量减少自带属性，并且要也注意先后顺序
        this.$el.innerHTML = `<div class="qq-slider-wrap"></div>`
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width = `${100 * (this.slides.length + 2)}%`
        this.$wrap.innerHTML = this.slides.map((slide, index) =>
            `
        <div class="qq-slider-item" data-index="${index}">
        <a href="${slide.link}">
            <img src="${slide.image}">
        </a>
    </div>`
        ).join(``)
        this.$wrap.prepend(this.$wrap.lastElementChild.cloneNode(true))
        this.$wrap.append(this.$wrap.querySelector(`:nth-child(2)`).cloneNode(true))
        this.$wrap.style.transform = `translateX(-${1/(this.slides.length+2)*100}%)`
    }
    // start() {
    //     setInterval(this.next.bind(this), this.interval)  //可怕的操作，复习bind,setinnerval
    // }
    next() {
        setTimeout(() => {
            // console.log(this.index)
            if(this.index == 5){
                this.index = 0
                this.$wrap.style.transform = `translateX(-${1 / (this.slides.length + 2) * this.index * 100}%)`
                this.$wrap.style.transition = `0s`
            }
            setTimeout(()=>{
                this.$wrap.style.transition = `0.${this.duration}s`
                this.$wrap.style.transform = `translateX(-${1 / (this.slides.length + 2) * (this.index+=1) * 100}%)`
                this.next()
            }, this.interval-this.duration);
        },this.interval);
    }
}