import { useEffect, useState } from 'react';

function Jokes() {
  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes([...jokes, data.setup, data.delivery]);
      });
  }
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    getJokes();
  }, []);
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJokes}>Get Joke</button>
      <h1>{jokes.map((setup) => <p>{jokes.setup}</p>)}
      </h1>
    </>
  );
}

export default Jokes;
