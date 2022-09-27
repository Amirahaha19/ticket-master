import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import '../css/DropdownTix.css';

function DropdownTix() {

    const maxTicket = 8;
    const text = true;

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-toggle">
                    Please Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {[...Array(maxTicket)].map((maxTicket, index) => ( 
                        index===0 ? (<Dropdown.Item>{index+1} Ticket </Dropdown.Item>) :
                        <Dropdown.Item value={index} onClick onChange>
                            {index+1} Tickets 
                        </Dropdown.Item>          
                    ))}
                </Dropdown.Menu>
                {text ? "" : "selected"}
            </Dropdown>
        </div>
    );
}

export default DropdownTix;