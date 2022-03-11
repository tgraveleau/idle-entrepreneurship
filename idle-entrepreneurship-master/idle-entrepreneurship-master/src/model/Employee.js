import { Item } from "./Item"

export class Employee extends Item {
    
    constructor(name, level = 1, salary = level) {
        super(name, level)
        this.salary = salary
    }

    cost() {
        return this.level*3+5
    }

    earning() {
        return 2*this.level
    }
    
    profits() {        
        return this.earning() - this.payroll()
    }
}