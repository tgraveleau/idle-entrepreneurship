export class Item {
    
    constructor(name = "", level = 1, inMarket = true) {
        this.name = name
        this.level = level
        this.inMarket = inMarket
    }

    upgrade() {
        this.level++
    }
}