import { useEffect, useState } from 'react';

function Jokes() {
  function getJoke() {
    // setIsLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJoke([...joke, data.setup, data.delivery]);
        // setIsLoading(false);
      });
  }
  const [joke, setJoke] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getJoke();
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJoke}>Get Joke</button>
      <h1>{setJoke.map((setup) => <li>{setup}</li>)}
      </h1>
    </>
  );
}

export default Jokes;
