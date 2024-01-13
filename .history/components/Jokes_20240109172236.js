import { useEffect, useState } from 'react';

function Jokes() {
  function getJokes() {
    fetch([])
      .then((response) => response.json())
      .then((data) => {
        setJokes([...jokes, data.setup, data.delivery]);
        console.warn();
      });
  }
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    getJokes();
  }, []);

  const handleClick = () => {
    setButtonText('get punchline');
  };

  const initialValue = 'Get A Joke';
  const [buttonText, setButtonText] = useState(initialValue);
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
