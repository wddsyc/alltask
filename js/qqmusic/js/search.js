class Search {
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector(`#seach`)
        this.$input.addEventListenser(`keyup`,this.onKeyUp)
        this.keyword = ``
        this.page =1 
        this.perpage = 20
    }
    onKeyUp(event){
        let keyword = event.target.value.trim()
        if(event.key !== `Enter`)return
        this.search(keyword)
    }
    search(keyword) {
        
    }
}