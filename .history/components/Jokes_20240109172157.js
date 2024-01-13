import { useEffect, useState } from 'react';

function Jokes() {
  function getJoke() {
    fetch([])
      .then((response) => response.json())
      .then((data) => {
        setJoke([...jokes, data.setup, data.delivery]);
        console.warn();
      });
  }
  const [jokes, setJoke] = useState([]);
  useEffect(() => {
    getJoke();
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
          getJoke();
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
