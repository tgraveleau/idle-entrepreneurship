import { Item } from "./Item"

export class Company extends Item {
    
    constructor(name = "Company", level = 1, offices = []) {
        super(name, level)
        this.offices = offices
    }

    cost() {
        return this.level*1000
    }

    earning() {
        return this.offices.reduce((sum, office) => sum + office.earning(), 0)
    }

    payroll() {
        return this.offices.reduce((sum, office) => sum + office.payroll(), 0)
    }
    
    profits() {        
        return this.earning() - this.payroll()
    }

    addOffice(office) {
        this.offices.push(office)
        office.company = this
    }
}