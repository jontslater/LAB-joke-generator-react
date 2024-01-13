import { useState } from 'react';

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [active, setActive] = useState('FirstCard');

  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      });
  }

  const handleClick = () => { setActive('SecondCard'); };

  return (
    <>
      <h1>Jokemaster 3000</h1>
      <div>
        {active === 'FirstCard' && (
        <button
          type="button"
          title="1"
          onClick={(getJokes)(handleClick)}
        > Get Joke
        </button>
        )}
        {jokes.setup}
      </div>
      <div>
        {active === 'SecondCard' && (
        <button
          type="button"
          title="2"
          onClick={(getJokes)}
        > Get Pun
        </button>
        )}
        {jokes.delivery}
      </div>
    </>
  );
}

export default Jokes;
