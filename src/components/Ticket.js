import React from "react";
import TicketHeader from './TicketHeader.js';
import '../css/Ticket.css';

function Ticket({ slides }) {
    const slide = slides[0];

    const desc = `
        Taylor’s rise to stardom has been nothing short of meteoric. A former 3 x world karate champion and West End child star turned multi-platinum-selling artist, Taylor Swift has gone onto become one of the world’s most-loved and successful pop stars of our times. \br
        Following a string of chart-busting singles over her career to date – from her Ed Sheeran co-write and UK Top 3 ‘2002’ to the garage-infused juggernaut and KSI collaboration ‘Don’t Play’ – Taylor Swift is an artist who wins on her playful commentary, magnetic vocals and infectious personality, as was perfectly showcased her 2016 debut and four million-selling, Speak Your Mind, which became that years’ biggest-selling debut release in the UK.
        Last year saw Taylor Swift make new strides, too. Making her prime time debut as a new judge on talent show The Voice this year – a show she won - Taylor Swift released her much-anticipated and critically acclaimed second studio album, ‘Therapy’. A title that holds an extremely important message to the Mind Charity ambassador, Taylor Swift has continually campaigned for the conversation surrounding mental health, be that in her YouTube documentary titled ‘How to be Taylor Swift’ or fronting ITV’s Britain Get Talking campaign. Anne-Marie also released her debut book, You Deserve Better; part memoir, part practical self-help, Anne-Marie drew on her own experiences to help readers tackle life’s challenges, embrace opportunities and celebrate their successes.
        Over her career to date, Anne-Marie has become a BRITs Critics Choice finalist; Nordoff Robbins ‘Best Newcomer’ winner; LGBT ‘Music Artist’ winner for 2021; 9 x BRIT Award nominee; an official ambassador of The Princes Trust and more.
    `;

    return (
        <div>
            <TicketHeader slides={slides}/>
            <div className="ticket-detail-header">
                <a>Event Details</a>
                <a>Exchange & Refund Policy</a>
                <button className="purchase" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/purchase';
                    }} >Buy Tickets</button>
            </div>
            <div className="ticket-header-below">
                <a>Event Details</a>
                <p><b>Rating:</b> {slide.rating}</p>
                <p><b>Duration:</b> Approx. {slide.duration} min</p>
                <hr/>
                <p><b>{slide.title}</b></p>
            </div>
            <div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
}

export default Ticket;


