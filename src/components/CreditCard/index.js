import React, { useState } from "react";
import './index.css'

const CreditCard=()=>{
    const[cardNumber,setCardNumber]=useState('')
    const[cardholderName,setCardHolderName]=useState('')
    const cardholderNameInputUppercase=cardholderName.toUpperCase()

    const onChangeCardNumber=event=>{
        setCardNumber(event.target.value)
    }

    const onChangeCardholderName=event=>{
        setCardHolderName(event.target.value)
    }

    return(
        <div className="main-cont">
            <div className="credit-card">
                <div className="credit-head">
                    <h1 className="heading">CREDIT CARD</h1>
                    <hr className="hr"/>
                </div>
                <div className="card-cont">
                    <div className="card">
                        <p className="number">{cardNumber}</p>
                        <p className="nametext">CARDHOLDER NAME</p>
                        <p className="holderInput">{cardholderNameInputUppercase}</p>
                    </div>
                </div>
            </div>
            <div className="payment-Cont">
                <div className="payment-method-cont">
                    <h1 className="payment-head">Payment Method</h1>
                    <input className="input" type="text" placeholder="Card Number" value={cardNumber} onChange={onChangeCardNumber}/>
                    <input className="input" type="text" placeholder="Cardholder Name" value={cardholderName} onChange={onChangeCardholderName}/>
                </div>
            </div>
        </div>
    )
}

export default CreditCard