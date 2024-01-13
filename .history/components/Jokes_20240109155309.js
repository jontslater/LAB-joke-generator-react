import { useEffect, useState } from 'react';

function Jokes() {
  function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => setJoke(data.setup));
  }
  function Jokes() {
    function deliverJoke() {
      fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
        .then((response) => response.json())
        .then((data) => deliverJoke(data.delivery));
    }
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    getJoke();
  }, []);
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJoke}>Get Joke</button>
      <button type="button" onClick={deliverJoke}>DeliverJoke</button>
      <h1>{joke}</h1>
    </>
  );
}

export default Jokes;
