import { useState } from 'react';

function Jokes() {
  const [jokes, setJokes] = useState([getJokes]);
  const [active, setActive] = useState('FirstCard');

  function getJokes({ title }) {
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
        )}
        {/* <h1>{jokes.setup}</h1>
        <h1>hi</h1>
        {active === 'SecondCard' && (
        <button
          type="button"
          title="2"
          onClick={() => setActive('ThirdCard')}
        >two
        </button>
        )}
        <h1>{jokes.delivery}</h1>
        {active === 'ThirdCard' && (
        <button
          type="button"
          title="3"
          onClick={() => setActive('FirstCard')}
        >three
        </button>
        )} */}
      </nav>
    </>
  );
}

export default Jokes;
