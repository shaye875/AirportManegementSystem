import { Passenger } from "./Passenger.js";

export class RegularPassenger extends Passenger{
    constructor(name,IDNumber,amountOfMoney, Workplace,KnowsAnAirportEmployee){
        super(name,IDNumber,amountOfMoney)
        this.Workplace = Workplace
        this.KnowsAnAirportEmployee = KnowsAnAirportEmployee
    }
}