import { Flight } from "./Flight.js";

export class AirportSystem{
    constructor(){
        this.arrayFligths = this.addFlighth()
    }

    addFlighth(){
        const flights = []
        for(let i = 1;i<=3;i++){
           flights.push(new Flight("mos-2","1","4444",10,50,100))
        }
        return flights
    }
}