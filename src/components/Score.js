import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
// import office from '../office.jpeg'
import home from "../home.png";
import michaelpic from "../michaelpic.png";

function Score({ points, setPoints }) {
  let navigate = useNavigate();

  const home = () => {
    navigate("/");
    setPoints(0);
  };

  return (
    <Container>
      <Header>Your Score:</Header>
      <HeaderNumber>{points}%</HeaderNumber>
      {points === 100 ? (
        <Image
          alt="Image"
          src="https://c.tenor.com/CT8lcFwrpW4AAAAd/michael-scott-celebrate.gif"
        />
      ) : null}
      {points === 80 ? (
        <Image
          alt="Image"
          src="https://media3.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif"
        />
      ) : null}
      {points === 60 ? (
        <Image alt="Image" src="https://i.gifer.com/5zto.gif" />
      ) : null}
      {points === 40 ? (
        <Image
          alt="Image"
          src="https://www.gallerycollection.com/blog/wp-content/uploads/2015/04/2x19-Michael-s-Birthday-Animated-gif-the-office-7891674-325-188.gif"
        />
      ) : null}
      {points === 20 ? (
        <Image
          alt="Image"
          src="https://media1.giphy.com/media/jOpLbiGmHR9S0/200.gif"
        />
      ) : null}
      {points === 0 ? (
        <Image
          alt="Image"
          src="https://media2.giphy.com/media/O1oJ840fg6uOVCqdzJ/giphy.gif"
        />
      ) : null}
      <br></br>
      <Button onClick={home}></Button>
    </Container>
  );
}

const Button = styled.button`
  margin-left: 15vw;
  border-radius: 10px;
  margin-top: 5vh;
  background-image: url(${home});
  background-position: center;
  background-repeat: no - repeat;
  background-size: cover;
  border: none;
  width: 65vw;
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

const Image = styled.img`
  /* margin-left: 12vw; */
  height: auto;
  max-width: 100%;
`;

const Header = styled.h1`
  font-size: 2.5em;
  color: black;
  padding: 30px;
  /* margin-left: 15vw;
  margin-right: 40vw; */
  font-family: helvetica;
  font-weight: bold;
  text-shadow: 5px 5px 5px grey;
`;

const HeaderNumber = styled.h1`
  font-size: 3em;
  color: black;
  /* // padding: 50px; */
  margin-left: 35vw;
  /* margin-right: 40vw; */
  margin-bottom: 10vh;
  font-family: helvetica;
  font-weight: bold;
  text-shadow: 5px 5px 5px grey;
`;

const Container = styled.div`
  top: 0;
  height: 800px;
  width: 100%;
  background-image: url(${michaelpic});
  justify-content: center;
  align-items: center;
`;

export default Score;
