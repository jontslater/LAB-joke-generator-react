import { useState } from 'react';

function Jokes(title) {
  const [jokes, setJokes] = useState('FirstCard');

  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      });
  }

  return (
    <>
      <h1>Jokemaster 3000</h1>
      <div>
        <button type="button" title="1" onClick={(getJokes)}> Get Joke </button>
        {jokes.setup}
      </div>
      <div>
        <button type="button" title="1" onClick={(getJokes)}> Get Joke </button>
        {jokes.delivery}
      </div>
    </>
  );
}

export default Jokes;
