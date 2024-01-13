import React from 'react';
import Jokes from '../components/Jokes';
import getJoke from '../api/jokeData';

function Home() {
  const counters = [
    { getJoke },
  ];
  return (
    <>
      {counters.map((counter) => (<Jokes key={counter.title} title={counter.title} />))}

    </>
  );
}

export default Home;
