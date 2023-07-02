import React from 'react'
import styled from 'styled-components';


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
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
    
`;

const Success = () => {
  return (
    <Container>
      <Wrapper>
            <Button>SUCCESSFULL!</Button>
            <Title>Your Order is being prepared.</Title>
            <Title>Thanks for choosing us!</Title>

      </Wrapper>
    </Container>
  )
}

export default Success
