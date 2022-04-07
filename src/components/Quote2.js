import React, { useState } from "react";
import styled from "styled-components";
// import office from '../office.jpeg'
import submitbutton from "../submitbutton.png";
import nextquote from "../nextquote.png";
import { useNavigate } from "react-router";
import michaelpic from "../michaelpic.png";

function Quote2({ quote, points, setPoints }) {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [answer, setAnswer] = useState("");

  let navigate = useNavigate();

  const fullname = quote.character.firstname + quote.character.lastname;

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswered(true);
    if (fullname.toLowerCase().includes(answer.toLowerCase())) {
      setCorrect(true);
      setPoints(points + 20);
    }
  };

  const next = () => {
    navigate("/quote3");
  };

  return (
    // <div>
    <Container>
      {!answered ? (
        <div>
          <Quote>"{quote.content}"</Quote>
          <form onSubmit={handleSubmit}>
            <Input
              required
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Who Said It?"
            ></Input>
            <br></br>
            <Button type="submit"></Button>
          </form>
        </div>
      ) : null}
      {!answered ? null : (
        <div>
          {correct ? (
            <Correct>Correct!</Correct>
          ) : (
            <div>
              <Wrong>Wrong!</Wrong>
              <AnswerButton>
                Hold for answer
                <Answer>
                  {quote.character.firstname + " " + quote.character.lastname}
                </Answer>
              </AnswerButton>
            </div>
          )}
          <NextButton onClick={next}></NextButton>
        </div>
      )}
    </Container>
    // </div>
  );
}

const Button = styled.button`
  margin-left: 15vw;
  border-radius: 10px;
  margin-top: 5vh;
  background-image: url(${submitbutton});
  background-position: center;
  background-repeat: no - repeat;
  background-size: cover;
  border: none;
  width: 70vw;
  height: 12vh;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.35s;
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
  background-image: url(${nextquote});
  background-position: center;
  background-repeat: no - repeat;
  background-size: cover;
  border: none;
  width: 63vw;
  height: 10vh;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.35s;
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
  margin-left: 15vw;
  border-radius: 10px;
  width: 70vw;
  height: 25vh;
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
  color: #d4cbc4;
  &:hover {
    border: 3px solid black;
    background: transparent;
    color: transparent;
    // cursor: pointer;
  }
`;

const Answer = styled.h1`
  font-size: 4em;
  color: black;
  font-family: helvetica;
  font-weight: bold;
`;

const Input = styled.input`
  width: 50vw;
  height: 5vh;
  border: none;
  border-bottom: 2px solid #e3e3e3;
  font-size: large;
  margin-left: 20vw;
  outline: none;
  background: transparent;
  &:focus {
    outline: none;
    border-bottom: 2px solid #7f7f7f;
  }
`;

const Quote = styled.h1`
  font-size: 1.5em;
  color: black;
  padding: 30px;
  /* margin-left: 10vw;
  margin-right: 10vw; */
  /* margin-top: 10vw; */
  margin-bottom: 10vw;

  font-family: helvetica;
  font-weight: bold;
`;

const Correct = styled.h1`
  font-size: 4em;
  color: green;
  padding: 40px;
  /* margin-left: 15vw;
  margin-right: 40vw; */
  font-family: helvetica;
  font-weight: bold;
  text-shadow: 5px 5px 5px rgb(0, 65, 5);
`;

const Wrong = styled.h1`
  font-size: 4em;
  color: red;
  padding: 40px;
  /* margin-left: 16.5vw; */
  /* margin-right: 40vw; */
  font-family: helvetica;
  font-weight: bold;
  text-shadow: 5px 5px 5px maroon;
`;

const Container = styled.div`
  top: 0;
  height: 100vh;
  width: 100%;
  background-image: url(${michaelpic});
  background-position: center;
  background-repeat: no - repeat;
  background-size: cover;
`;

export default Quote2;
