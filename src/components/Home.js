import React from "react";
import styled from "styled-components";
import michaelpic from '../michaelpic.jpeg'
import {useNavigate} from "react-router";

function Home() {

let navigate = useNavigate();

const startGame = () => {
    navigate('/quote1')
}

    return(
        // <div>
        <Container>
            <Heading>The Office</Heading>
            <Heading2>Quotes</Heading2>
            <Button onClick={startGame}>Play</Button>
        </Container>
        // </div>
    )
}

const Button = styled.button`

  margin-top: 10vh;
  margin-bottom: 44.2vh;
  margin-left: 10vw;
  width: 30vw;
  height: 16vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
text-transform: uppercase;
letter-spacing: 1px;
transition: all .35s;
justify-content: center;
font-size: 2vh;

&:hover {
    border: 3px solid black;
    background: transparent;
    color: black;
    cursor: pointer;
  }

  `;

const Container = styled.div`
background-image: url(${michaelpic});
height: 100%;
width: 100%;
top: 0;
padding: none;
`;

const Heading = styled.h1`
font-size: 100px;
color: black;
margin-left: 10vw;
`;

const Heading2 = styled.h1`
font-size: 100px;
color: black;
margin-left: 10vw;

`;

export default Home