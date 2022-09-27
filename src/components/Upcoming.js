import React, {useState} from 'react';

import '../css/Upcoming.css';

const Upcoming= ({ product }) => {
    const url = (product.url);

    return (
        <div className="thumbnail">
            <a href="http://localhost:3000/ticket">
                <img className="shadow" src={url} />
            </a>
            
        </div>
    )
};

export default Upcoming;