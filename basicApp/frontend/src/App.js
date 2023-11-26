import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  function getJokes() {
    axios
      .get("/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="App">
      <ul type="none">
        {jokes.map((value, ind) => (
          <li key={value.id}>
            <h1>{value.id}</h1>
            <h2>{value.question}</h2>
            <p>{value.answer}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
