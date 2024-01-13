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

  return (
    <>
      <h1>Jokemaster 3000</h1>
      <nav>
        <button
          type="button"
          title="1"
          onClick={() => setActive('FirstCard')}
        >one
        </button>
        {jokes.setup}
        <button
          type="button"
          title="2"
          onClick={() => setActive('secondCard')}
        >two
        </button>
        <button type="button" onClick={() => setActive('thirdCard')}>three</button>
      </nav>
    </>
  );
}

export default Jokes;
