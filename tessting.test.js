import test from 'node:test'
import assert from 'node:assert'
import { AirportSystem } from './classes/AirportSystem.js'
import { RegularPassenger } from './classes/Passengers/regularPassenger.js'

test(' Not enough money',()=>{
    const airport = new AirportSystem()
    const passenger = new RegularPassenger("avi","1222",0,"analiza",false)
    assert.equal(airport.arrayFligths[0].buyTicketRegular(passenger),false)
})

test('The ticket owner name matches the',()=>{
    const airport = new AirportSystem()
    const passenger = new RegularPassenger("avi","1222",500,"analiza",false)
    const ticket = airport.arrayFligths[0].buyTicketRegular(passenger)
    assert.equal(ticket.ownerName,passenger.name)
})

test('The passenger’s money is reduced by the correct ticket price',()=>{
    const airport = new AirportSystem()
    const passenger = new RegularPassenger("avi","1222",500,"analiza",false)
    const ticket = airport.arrayFligths[0].buyTicketRegular(passenger)
    assert.equal(passenger.amountOfMoney,450)
})