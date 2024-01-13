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
        {active === 'FirstCard' && (
        <button
          type="button"
          title="1"
          onClick={() => setActive('SecondCard')}
        >one
        </button>
        {jokes.setup}
        )}

        {active === 'SecondCard' && (
        <button
          type="button"
          title="2"
          onClick={() => setActive('ThirdCard')}
        >two
        </button>
        )}
        {active === 'ThirdCard' && (
        <button
          type="button"
          title="3"
          onClick={() => setActive('FirstCard')}
        >three
        </button>
        )}
      </nav>
    </>
  );
}

export default Jokes;
