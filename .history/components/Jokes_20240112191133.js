import { useState } from 'react';

function Jokes() {
  const [jokes, setJokes] = useState(null);
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
            onClick={() => {
              setActive('SecondCard');
              getJokes(jokes[0]);
            }}
          >Get A Joke
          </button>
        )}
        <h1>{jokes[0]}</h1>
        {active === 'SecondCard' && (
        <button
          type="button"
          title="2"
          onClick={() => {
            setActive('ThirdCard');
            getJokes(jokes[1]);
          }}
        >Get Punchline
        </button>
        )}
        <h1>{jokes.delivery}</h1>
        {active === 'ThirdCard' && (
        <button
          type="button"
          title="3"
          onClick={() => setActive('FirstCard')}
        >Get Another Jokes
        </button>
        )}
      </nav>
    </>
  );
}

export default Jokes;
