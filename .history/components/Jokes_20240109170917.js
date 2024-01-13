import { useEffect, useState } from 'react';

function Jokes() {
  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes([...jokes, data.setup, data.delivery]);
      });
    setButtonText('get another joke');
  }
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    getJokes();
  }, []);

  const handleClick = () => {

  };

  const initialValue = 'Get A Joke';
  const [buttonText, setButtonText] = useState(initialValue);
  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button type="button" onClick={getJokes}>{buttonText}</button>
      <h1>{jokes.map((setup) => <p>{setup}</p>)}
      </h1>
    </>
  );
}

export default Jokes;
