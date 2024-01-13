import { useEffect, useState } from 'react';

function Jokes() {
  function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => setJoke(data.setup));
  }
  const [joke, setJoke] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getJoke();
  }, []);

  if (isLoading) {

  }
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJoke}>Get Joke</button>
      <h1>{joke}</h1>
    </>
  );
}

export default Jokes;
