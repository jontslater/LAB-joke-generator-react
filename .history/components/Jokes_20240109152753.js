function Jokes() {
  function loadJoke() {
    fetch('')
      .then((response) => response.json())
      .then((data) => console.warn(data));
  }
  return (
    <>
      <h1>Jokemaster 3000</h1>
    </>
  );
}

export default Jokes;
