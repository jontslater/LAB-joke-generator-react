import { useEffect, useState } from 'react';

function Jokes() {
  function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes([...jokes, data.setup, data.delivery]);
      });
  }
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    getJoke();
  }, []);
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJoke}>Get Joke</button>
      <h1>{jokes.map((setup) => <p>{setup}</p>)}
      </h1>
    </>
  );
}

export default Jokes;
