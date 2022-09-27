import React from "react";
import '../css/Ticket.css';

function TicketHeader({ slides }) {
    const slide = slides[0];
    const url = slide.url;

    return (
        <div>
            <div className="ticket-header">
                Ticket <a>/</a> {slide.title}
            </div>
            <div className="ticket-photo">
                <img className="ticket-photo-img" src={url}/>
                <div className="ticket-detail">{slide.date} | {slide.place}</div>
                <div className="ticket-name">{slide.title}</div>
            </div>
        </div>
    );
}

export default TicketHeader;


