import { AirportSystem } from "./classes/AirportSystem.js"
import { RegularPassenger } from "./classes/Passengers/regularPassenger.js"
import { StudentPassenger } from "./classes/Passengers/StudentPassenger.js"

const airport = new AirportSystem()
const regularPassenger = new RegularPassenger("d","t",200,"j",false)
const studentPassenger = new StudentPassenger("avi","i",100,"analiza")

console.log(airport.arrayFligths[0].buyTicketRegular(regularPassenger));
console.log(regularPassenger.amountOfMoney);

console.log(airport.arrayFligths[0].buyTicketVIP(studentPassenger))
console.log(studentPassenger.amountOfMoney);

