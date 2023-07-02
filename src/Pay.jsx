import React, { useState } from 'react'
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react";
import axios from 'axios';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;

`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
    
`;

const KEY = "pk_test_51NOvUCSChy0Q2f7jxIkrTwU5h8zZX7qGnTTgVadbCbl9uhfuGicVB1HHqxIRqfveshXMIgfQprVa6XyE20vtZl0100Afw4zCHT";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token)=>{
        setStripeToken(token);
    };

    useEffecr(()=>{
        const makeRequest = async ()=>{
            try{
               const res = await axios.post("http://localhost:3001/api/checkout/payment",{
                tokenId:stripeToken.id,
                amount: 2000,
               });
               console.log(res.data);
            }catch(err){
                console.log(err);
            }
        }
        stripeToken && makeRequest
    },[stripeToken])

  return (
    <Container>
      <Wrapper>
        <Title>Payment In Process</Title>

            <StripeCheckout name="Lama Shop" image="" billingAddress shippingAddress description="Big Data Stuff" amount={1000000} currency="USD" token={onToken} stripeKey={KEY}>
                <Button>Pay Now</Button>
            </StripeCheckout>
            

      </Wrapper>
    </Container>
  )
}

export default Pay
