import { useEffect, useState } from 'react';

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

  useEffect(() => {
    getJokes();
  }, []);

  const handleClick = () => {
    setButtonText('get punchline');
    setJokes((prevState) => prevState + 1);

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
      <h1>{jokes[1]}</h1>
    </>
  );
}

export default Jokes;
