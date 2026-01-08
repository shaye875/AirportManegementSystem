
import { RegularTicket } from "./Tickets/RegularTicket.js"
import { VIPTicket } from "./Tickets/VIPTicket.js"
import { Passenger } from "./Passengers/Passenger.js"
import { StudentPassenger } from "./Passengers/StudentPassenger.js"
import { RegularPassenger } from "./Passengers/regularPassenger.js"

export class Flight {
    #MaximumNumberOfPassengers
    #RegularTicketPrice
    #VIPTicketPrice
    #TicketsList
    constructor(flightName, Airline, flightNumber, MaximumNumberOfPassengers, RegularTicketPrice, VIPTicketPrice) {
        this.flightName = flightName
        this.Airline = Airline
        this.flightNumber = flightNumber
        this.#MaximumNumberOfPassengers = MaximumNumberOfPassengers
        this.#RegularTicketPrice = RegularTicketPrice
        this.#VIPTicketPrice = VIPTicketPrice
        this.#TicketsList = this.addTicket()
    }

    addTicket() {
        const ticketsList = []
        for (let i = 1; i <= Math.floor(this.#MaximumNumberOfPassengers / 10) * 9; i++) {
            ticketsList.push(new RegularTicket(this.#RegularTicketPrice, undefined))
        }
        for (let i = 1; i <= this.#MaximumNumberOfPassengers - ticketsList.length; i++) {
            ticketsList.push(new VIPTicket(this.#RegularTicketPrice, undefined, Math.floor(Math.random() * 6000)))
        }
        return ticketsList
    }

    buyTicketRegular(passenger) {
        if (!(passenger instanceof Passenger)) {
            throw new Error("only class Passenger")
        }
        for (let ticket of this.#TicketsList) {
            if (ticket instanceof RegularTicket) {
                if (ticket.ownerName === undefined) {

                    if (passenger instanceof RegularPassenger && passenger.KnowsAnAirportEmployee === true) {
                        let price = ticket.price - (Math.floor(ticket.price / 10) * 2)
                        if (passenger.amountOfMoney >= price) {
                            ticket.ownerName = passenger.name
                            passenger.amountOfMoney -= price
                            return ticket
                        } else {
                            return false
                        }
                    } else if (passenger instanceof StudentPassenger) {
                        let price = ticket.price - (Math.floor(ticket.price / 10) * 1)
                        if (passenger.amountOfMoney >= price) {
                            ticket.ownerName = passenger.name
                            passenger.amountOfMoney -= price
                            return ticket
                        } else {
                            return false
                        }
                    }
                    else {
                        if (passenger.amountOfMoney >= ticket.price) {


                            ticket.ownerName = passenger.name
                            passenger.amountOfMoney -= ticket.price
                            return ticket
                        } else {
                            return false
                        }
                    }
                }
            }
        }
    }


    buyTicketVIP(passenger) {
        if (!(passenger instanceof Passenger)) {
            throw new Error("only class Passenger")
        }
        for (let ticket of this.#TicketsList) {
            if (ticket instanceof RegularTicket) {
                if (ticket.ownerName === undefined) {
                    if (passenger.KnowsAnAirportEmployee && passenger.KnowsAnAirportEmployee === true) {
                        let price = ticket.price - (Math.floor(ticket.price / 100) * 15)
                        if (passenger.amountOfMoney >= price) {
                            ticket.ownerName = passenger.name
                            passenger.amountOfMoney -= price
                            return ticket
                        } else {
                            return false
                        }
                    } else {
                        if (passenger.amountOfMoney >= ticket.price) {
                            ticket.ownerName = passenger.name
                            passenger.amountOfMoney -= ticket.price
                            return ticket
                        } else {
                            return false
                        }
                    }
                }
            }
        }
    }

}