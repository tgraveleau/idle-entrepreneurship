import { Employee } from "../model/Employee"
import { Office } from "../model/Office"
import { Company } from "../model/Company"

export class GameSaver {

    save() {

    }

    restore(game) {
        let
            employee = new Employee("Steve Jobs", 4),
            office = new Office("Garage"),
            company = new Company("Apple")
        employee.inMarket = false
        office.inMarket = false
        office.addEmployee(employee)
        company.inMarket = false
        company.addOffice(office)
        game.name = "Dev Game"
        game.money = 100
        game.addCompany(company)
        console.log(game)
    }
}