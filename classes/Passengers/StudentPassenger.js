import { Passenger } from "./Passenger.js";

export class StudentPassenger extends Passenger{
    constructor(name,IDNumber,amountOfMoney,SchoolOrUniversityName){
        super(name, IDNumber,amountOfMoney)
        this.SchoolOrUniversityName = SchoolOrUniversityName
    }
}