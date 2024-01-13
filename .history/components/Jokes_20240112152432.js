import { useState } from 'react';

function Jokes() {
  const initialValue = 'Get A Joke';
  const [buttonText, setButtonText] = useState(initialValue);
  const [jokes, setJokes] = useState('FirstCard');

  function getJokes() {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      });
  }

  // useEffect(() => {
  // });

  const handleClick = () => {
    setButtonText('get punchline');
  };

  return (
    <>
      <h1>Jokemaster 3000</h1>
      {jokes === 'FirstCard' }
      <button
        type="button"
        onClick={() => {
          getJokes();
          handleClick();
        }}
      >{buttonText}
      </button>
      <h1>{jokes.setup}</h1>
      <h1>{jokes.delivery}</h1>
    </>
  );
}

export default Jokes;
