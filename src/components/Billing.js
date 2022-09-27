import React, {useState} from "react";
import validator from 'validator';
import { useNavigate } from "react-router-dom";

import '../css/Billing.css';
import '../css/Ticket.css';

function Billing({ slides }) {

    const slide = slides[0];

    let name = "Siti Bainun";
    let email = "abc@gmail.com";
    let cardNo = 1234567812345678;
    let cardName = "Siti Bainun Mustafa"
    let expiryDate = "04/25";

    // Email Validator
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        } else {
        setEmailError('Enter valid Email!')
        }
    }
    // Split by 4
    const [card, setCard] = useState('')
    const handleCardDisplay = () => {
        const rawText = [...card.split(' ').join('')] 
        const creditCard = [] 
        rawText.forEach((t, i) => {
            if (i % 4 === 0) creditCard.push(' ')
            creditCard.push(t)
        })
        return creditCard.join('')
    }

    // Go to Checkout page
    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `/checkout`; 
        navigate(path);
    }

    return (
        <div>
            <div className="ticket-header-below">
                <a>Ticket Selection</a>
            </div>
            <hr />
            
            <div className="ticket-desc">
                <h4>{slide.title}</h4>
                <p>{slide.date} | {slide.place}</p>
                <p>{slide.rating} | {slide.duration} min</p>
            </div>

            <div class="vertical-line"></div>
            <hr />

            <form>
                <label className="form">
                    <p>Name: </p>
                    <input type="text" name="name" size="50" value={name}/>
                    <p>Email: </p>
                    <input type="email" name="email" size="50" value={email} onChange={(e) => validateEmail(e)}/>
                    <p>Card Details: </p>
                    <input 
                        type="text" 
                        name="card-number" 
                        card={card}
                        placeholder="Card Number" 
                        size="50"
                        value={handleCardDisplay()} 
                        onChange={(e) => setCard(e.target.value.replace(/\D/g, ''))}
                    />
                    <div className="form-side">
                        <input type="text" name="expiry-date" size="25" placeholder="Expiry Date (MM/YY)" value={expiryDate} onChange={(e) => setCard(e.target.value.replace(/\D/g, ''))} />
                        <input type="password" name="cvv" size="21" placeholder="CVV" 
                            onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }}/>
                    </div>
                    <input type="text" name="name-card" placeholder="Name on Card" value={cardName} size="50"/>
                </label>
                <div>
                    <input type="submit" value="Submit" className="submit-button" onClick={routeChange}/>
                </div>
                
            </form>


        </div>
            
    );
}

export default Billing;