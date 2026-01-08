import { Ticket } from "./Ticket.js";

export class RegularTicket extends Ticket{
    constructor(price,ownerName){
        super(price,ownerName)
        this.RandomTicketNumber = Math.floor(Math.random()*6000)
    }
}
