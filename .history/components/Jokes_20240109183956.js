import { useEffect, useState } from 'react';

function Jokes() {
  const initialValue = 'Get A Joke';
  const [buttonText, setButtonText] = useState(initialValue);
  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes([...jokes, data.setup, data.delivery]);
      });
  }
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    getJokes();
  }, []);

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
      <h1>{jokes.map((setup) => <p>{setup}</p>)}
      </h1>
    </>
  );
}

export default Jokes;
