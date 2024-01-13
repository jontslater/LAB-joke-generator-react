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
            title="FirstCard"
            onClick={() => {
              setActive('SecondCard');
              getJokes(jokes.setup);
            }}
          >Get A Joke
          </button>
        )}
      </nav>
      <div>
        {active === 'SecondCard' && (
        <>
          <button
            type="button"
            title="SecondCard"
            onClick={() => {
              setActive('ThirdCard');
            }}
          >Get Punchline
          </button>
          <h1>{jokes.setup}</h1>
        </>
        )}

      </div>
      <div>
        {active === 'ThirdCard' && (
        <>
          <button
            type="button"
            title="ThirdCard"
            onClick={() => {
              setActive('SecondCard');
              getJokes(jokes.setup);
            }}
          >Get Another Jokes
          </button>
          <h1>{jokes.delivery}</h1>
        </>
        )}
      </div>

    </>
  );
}

export default Jokes;
