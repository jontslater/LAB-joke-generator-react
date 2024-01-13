import { useState } from 'react';

function Jokes({ title }) {
  const initialValue = 'Get A Joke';
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
      <h1>{jokes.setup}</h1>
    </>
  );
}

export default Jokes;
