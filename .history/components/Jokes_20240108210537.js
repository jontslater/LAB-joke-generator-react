import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Jokes() {
  const [joke, setJoke] = useState('');

  const handleClick = () => {
    setJoke((prevState) = getJoke);
  };
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJoke}>Get A Joke</button>
      <h2>{joke}</h2>
    </>
  );
}

export default Jokes;
