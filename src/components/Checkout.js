import React, {useState} from "react";
import { AiOutlineCheckCircle, AiOutlineDown } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { BsCreditCard2Front } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";

import '../css/Checkout.css';

function Checkout({ slides }) {
    
    // Card info
    let ticketAmount = 2;
    let cardNumber = 12345678;
    let cvvNumber = 111;
    let name = "Siti Bainun";
    let expired = "04/25";

    const cardNumberFour = String(cardNumber).slice(-4); 

    // Calculation
    const slide = slides[0];
    const serviceFee = 44.08;
    const processingFee = 2.95;
    const total = (slide.price*ticketAmount) + (serviceFee*ticketAmount) + (processingFee);

    // Texts
    const deliveryOne= "Mobile Entry - Free";
    const deliveryTwo = "Tickets available by Sun Dec 9, 2022";
    const deliveryThree = "These mobile tickets will be transferred directly to you from a trusted seller. We'll email you instructions on how to accept them on the original ticket provider's mobile app";

    const paymentOne = "Use Credit / Debit Card";
    const paymentTwo = "Visa - 9999";

    const payOne = "Or Pay With";
    const payTwo = "By using a digital wallet and continuing past this page, you have read and are accepting the Terms of Use";

    const totalOne = "xfr XFER Proof of at least one dose of COVID-19 vaccination for ages 5 to 11 and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of the Johnson & Johnson vaccine. Masks must be worn.";
    const totalTwo = "";
    const totalThree = "";

    return (
        <>
        <div className="ticket-header-below">
            <a>Checkout</a>
        </div>
        <div className="row">
            <div className="left-box box">
                <div className="top-box box">
                    <h4>Delivery <AiOutlineCheckCircle /></h4>
                    <h6>{deliveryOne}</h6>
                    <p>{deliveryTwo}</p>
                    <p>{deliveryThree}</p>
                </div>
                <div className="low-box box">
                    <h4>Payment <AiOutlineCheckCircle /></h4>
                    <h6>{paymentOne}</h6>
                    <div>
                        <p style={{fontSize: "30px", margin: "0"}}>
                            <input
                                type="radio"
                                name="card-radio"
                                checked="checked"
                            />  <RiVisaFill />
                            <span style={{fontSize: "16px"}}>  VISA - {cardNumberFour}</span>
                        </p>
                        <p className="visa-info">{name} | {expired}</p>
                        <p className="edit-delete">Edit | Delete</p>
                    </div>
                    <p className="blue-link"><span><FiPlus /> <BsCreditCard2Front/> </span> Add new card</p>
                    <hr/>
                    <h6>{payOne}</h6>
                    <p>{payTwo}</p>

                </div>
            </div>
            <div className="right-box box">
                <h4>Total<span style={{float: "right"}}>${total.toFixed(2)} <AiOutlineDown /></span></h4>
                <h6>Tickets</h6>
                <p>Resale Tickets: ${slide.price.toFixed(2)} x {( ticketAmount<1 )? "1" : ticketAmount}<span style={{float: "right"}}>${((slide.price)*ticketAmount).toFixed(2)}</span></p>
                <h6>Notes From Seller</h6>
                <p>{totalOne}</p>
                <h6>Fees</h6>
                <p style={{margin: "0"}}>Service Fee: ${serviceFee.toFixed(2)} x {ticketAmount}<span style={{float: "right"}}>${(serviceFee*ticketAmount).toFixed(2)}</span></p>
                <p>Order Processing Fee: <span style={{float: "right"}}>${processingFee.toFixed(2)}</span></p>
                <h6>Delivery</h6>
                <p>Mobile Entry <span style={{float: "right"}}>Free</span></p>
                <p className="blue-link"><a href="/">Cancel Order</a></p>

                <h6 style={{marginTop: "40px"}}>*All sales are final - No refund</h6>
                <div style={{marginBottom: "20px"}}>
                    <input type="checkbox"/>  I have read and agree to the current <span className="blue-link">Terms of Use</span>
                </div>
                <button className="place-order">Place Order</button>
                <p style={{fontSize: "10px", fontWeight: "bold"}}>*Exceptions may apply, see our Terms of Use</p>


            </div>
            
        </div>
        </>
    );
}

export default Checkout;