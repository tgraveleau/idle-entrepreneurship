import { Item } from "./Item"

export class Office extends Item {
    
    constructor(name, level, company = null, employees = []) {
        super(name, level)
        this.company = company
        this.employees = employees
    }

    cost() {
        return this.level*100
    }

    earning() {
        return this.employees.reduce((sum, employee) => sum + employee.earning(), 0)
        - this.employees.reduce((sum, employee) => sum + employee.salary, 0)
    }
    
    payroll() {
        return this.employees.reduce((sum, employee) => sum + employee.salary, 0)
    }
    
    profits() {        
        return this.earning() - this.payroll()
    }

    capacity() {
        return this.level*2-1
    }

    addEmployee(employee) {
        this.employees.push(employee)
        employee.office = this
    }
}