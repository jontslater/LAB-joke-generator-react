import React from 'react';
import Jokes from '../components/Jokes';

function Home(title) {
  return (
    <>
      <Jokes title="1" />
      <Jokes />
      <Jokes />
    </>
  );
}

export default Home;
