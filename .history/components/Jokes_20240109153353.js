import { useEffect, useState } from 'react';

function Jokes() {
  function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => console.warn(data));
  }
  const [joke, setJoke ]useState();
  useEffect(() => { getJoke(); });
  return (
    <>
      <h1>Jokemaster 3000</h1>
    </>
  );
}

export default Jokes;
