import { useState } from 'react';

function Jokes() {
  const [jokes, setJokes] = useState('FirstCard');

  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      });
  }

  // useEffect(() => {
  // });

  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button"> </button>
    </>
  );
}

export default Jokes;
