import React from 'react';
import Jokes from '../components/Jokes';

function Home() {
  return (
    <>
      <Jokes title="1" />
      <Jokes />
      <Jokes />
    </>
  );
}

export default Home;
