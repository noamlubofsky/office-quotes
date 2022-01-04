import React, {useState} from "react";
import styled from "styled-components";
import office from '../office.jpeg'
import submitbutton from '../submitbutton.png'
import done from '../done.png'
import {useNavigate} from "react-router";


function Quote1({quote, points, setPoints}) {
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [answer, setAnswer] = useState('')

    let navigate = useNavigate();

    const fullname = quote.character.firstname + quote.character.lastname

    const handleSubmit = (e) => {
        e.preventDefault()
        setAnswered(true)
        if(fullname.toLowerCase().includes(answer.toLowerCase())){
            setCorrect(true)
            setPoints(points + 20)
        }        
    }

    const next = () => {
        navigate('/score')
    }

    return(
        // <div>
        <Container>
            {!answered ?
            <div>
            <Quote>"{quote.content}"</Quote>
            <form onSubmit={handleSubmit}>
            <Input required type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}placeholder="Who Said It?"></Input>
            <br></br>
            <Button type="submit"></Button> 
            </form>
            </div> : null}
            {!answered ? null : 
            <div>
                {correct ? <Correct>Correct!</Correct> :
                <div> 
                <Wrong>Wrong!</Wrong>
                <AnswerButton>Hover for answer<Answer>{quote.character.firstname + ' ' + quote.character.lastname}</Answer></AnswerButton>
                </div>
                }
                <NextButton onClick={next}></NextButton>
            </div>
            }
        </Container>
        // </div>
    )
}

const Button = styled.button`

margin-left: 22vw;
border-radius: 10px;
margin-top: 5vh;
background-image: url(${submitbutton});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
border: none;
  width: 16.5vw;
  height: 10vh;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
text-transform: uppercase;
letter-spacing: 1px;
transition: all .35s;
justify-content: center;
// font-size: 2vh;
&:hover {
    // height: 10vh;
    // border: 3px solid black;
    // background: transparent;
    // color: black;
    opacity: 50%;
    cursor: pointer;
  }
  `;

  const NextButton = styled.button`

margin-left: 22vw;
border-radius: 10px;
margin-top: 5vh;
background-image: url(${done});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
border: none;
  width: 16.5vw;
  height: 10vh;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
text-transform: uppercase;
letter-spacing: 1px;
transition: all .35s;
justify-content: center;
// font-size: 2vh;
&:hover {
    // height: 10vh;
    // border: 3px solid black;
    // background: transparent;
    // color: black;
    opacity: 50%;
    cursor: pointer;
  }
  `;

  const AnswerButton = styled.button`

margin-left: 20vw;
border-radius: 10px;
  width: 20vw;
  height: 15vh;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
// text-transform: uppercase;
letter-spacing: 1px;
transition: all 1s;
justify-content: center;
font-size: 2vh;
background-color: black;
color: #D4CBC4;
&:hover {
    border: 3px solid black;
    background: transparent;
    color: transparent;
    // cursor: pointer;
  }
  `;

  const Answer = styled.h1`
font-size: 40px;
color: black;
font-family: helvetica;
font-weight: bold;
`;


const Input = styled.input`
    width: 20vw;
    height: 5vh;
    border: none;
    border-bottom: 2px solid #E3E3E3;
font-size: large;
margin-left: 20vw;
outline: none;
&:focus {
    outline: none;
    border-bottom: 2px solid #7F7F7F;
}
`;

const Quote = styled.h1`
font-size: 40px;
color: black;
padding: 50px;
margin-left: 10vw;
margin-right: 40vw;
font-family: helvetica;
font-weight: bold;
`;



const Correct = styled.h1`
font-size: 80px;
color: green;
padding: 50px;
margin-left: 15vw;
margin-right: 40vw;
font-family: helvetica;
font-weight: bold;
text-shadow: 5px 5px 5px rgb(0, 65, 5);

`;

const Wrong = styled.h1`
font-size: 80px;
color: red;
padding: 50px;
margin-left: 16.5vw;
margin-right: 40vw;
font-family: helvetica;
font-weight: bold;
text-shadow: 5px 5px 5px maroon;
`;

const Container = styled.div`
top: 0;
background-image: url(${office});
height: 800px;
width: 100%;
background-position: center;
background-repeat: no - repeat;
background-size: cover;
`;

export default Quote1