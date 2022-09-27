import React from "react";
import TicketHeader from './TicketHeader.js';
import DropdownTix from './DropdownTix.js';
import '../css/Ticket.css';
import '../css/Purchase.css';
import '../css/DropdownTix.css';

function Purchase({ slides }) {

    const slide = slides[0];

    const type = "Standard";
    const price = slide.price;

    return (
        <div>
            <TicketHeader slides={slides}/>
            <div className="ticket-header-below">
                <a>Ticket Selection</a>
            </div>
            <div className="thumb-photo">
                <img src={slide.url} />
                <div className="event-detail"> 
                    <table className="purchase-detail">
                        <tr>
                            <th>Ticket Type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tr>
                            <td>{type}</td>
                            <td>${price}</td>
                            <td><DropdownTix /></td>
                        </tr>
                    </table>
                </div>
                <div>
                <button className="purchase" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/billing';
                    }} >Confirm
                </button>
            </div>
            </div>
            
            
        </div>
    );
}

export default Purchase;