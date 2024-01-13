import React from 'react';
import Jokes from '../components/Jokes';
import getJoke from '../api/jokeData';

function Home() {
  const counters = ([
    { getJoke },
  ]);
  return (
    <>
      <Jokes />

    </>
  );
}

export default Home;
