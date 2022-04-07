import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quote1 from "./components/Quote1";
import Quote2 from "./components/Quote2";
import Quote3 from "./components/Quote3";
import Quote4 from "./components/Quote4";
import Quote5 from "./components/Quote5";
import Score from "./components/Score";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.officeapi.dev/api/quotes/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.data);
      });
    setLoading(false);
  }, []);

  const shuffledArray = quotes.sort((a, b) => 0.5 - Math.random());
  const gameQuotes = shuffledArray.slice(0, 5);

  console.log(gameQuotes);

  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route
            path="/quote1"
            element={
              <Quote1
                quote={gameQuotes[0]}
                points={points}
                setPoints={setPoints}
              />
            }
          />
          <Route
            path="/quote2"
            element={
              <Quote2
                quote={gameQuotes[1]}
                points={points}
                setPoints={setPoints}
              />
            }
          />
          <Route
            path="/quote3"
            element={
              <Quote3
                quote={gameQuotes[2]}
                points={points}
                setPoints={setPoints}
              />
            }
          />
          <Route
            path="/quote4"
            element={
              <Quote4
                quote={gameQuotes[3]}
                points={points}
                setPoints={setPoints}
              />
            }
          />
          <Route
            path="/quote5"
            element={
              <Quote5
                quote={gameQuotes[4]}
                points={points}
                setPoints={setPoints}
              />
            }
          />
          <Route
            path="/score"
            element={<Score points={points} setPoints={setPoints} />}
          />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
