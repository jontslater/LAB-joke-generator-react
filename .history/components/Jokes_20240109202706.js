import { useState, useEffect } from 'react';

function Jokes() {
  const initialValue = 'Get A Joke';
  const [buttonText, setButtonText] = useState(initialValue);
  const [jokes, setJokes] = useState([]);

  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes([data.setup, data.delivery]);
      });
  }
  console.warn(getJokes);
  useEffect(() => {
  });

  const handleClick = () => {
    setButtonText('get punchline');

    setTimeout(() => {
      setButtonText(initialValue);
    }, 3000);
  };

  return (
    <>
      <h1>Jokemaster 3000</h1>
      <button
        type="button"
        onClick={() => {
          getJokes();
          handleClick();
        }}
      >{buttonText}
      </button>
      <h1>{jokes[0]}</h1>
    </>
  );
}

export default Jokes;
