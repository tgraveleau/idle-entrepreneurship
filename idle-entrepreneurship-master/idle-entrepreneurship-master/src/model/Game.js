export class Game {

    constructor(name = "Idle Entrepreneurship ", money = 0, player = "Player") {
        this.name = name
        this.money = money
        this.player = player
        this.companies = []
    }

    earn() {
        this.money += this.earning()
    }

    earning() {
        // return this.companies.reduce((sum, company) => sum + company.earning(), 0)
        return this.companies.reduce((sum, company) => sum + company.earning(), 0)
    }

    payroll() {
        return this.companies.reduce((sum, company) => sum + company.payroll(), 0)
    }

    profits() {
        return this.companies.reduce((sum, company) => sum + company.profits(), 0)
    }

    canBuyCompany(company) {
        return this.money >= company.cost()
    }
    buyCompany(company) {
        if (this.canBuyCompany(company)) {
            this.money -= company.cost()
            company.inMarket = false
            this.addCompany(company)
        }
    }

    canBuyOffice(office) {
        return this.money >= office.cost()
    }
    buyOffice(office, company) {
        if (this.canBuyOffice(office)) {
            this.money -= office.cost()
            office.inMarket = false
            company.addOffice(office)
        }
    }

    canRecruit(employee, office) {
        return this.earning() >= employee.salary()
        && office.capacity() > office.employees.length
    }
    recruit(employee, office) {
        if (this.canRecruit(employee, office)) {
            employee.inMarket = false
            office.addEmployee(employee)
        }
    }
    
    addCompany(company) {
        this.companies.push(company)
        company.game = this
    }
}