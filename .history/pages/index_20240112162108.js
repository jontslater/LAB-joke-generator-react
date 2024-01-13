import React from 'react';
import Jokes from '../components/Jokes';

function Home(title) {
  return (
    <>
      <Jokes title="1" />
      <Jokes title="2" />
      <Jokes title="3" />
    </>
  );
}

export default Home;
