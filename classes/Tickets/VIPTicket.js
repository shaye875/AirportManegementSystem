import { Ticket } from "./Ticket.js";

export class VIPTicket extends Ticket{
    constructor(price,ownerNumber,TicketNumber){
        super(price,ownerNumber)
        this.TicketNumber = TicketNumber
    }
}