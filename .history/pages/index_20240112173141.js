import React from 'react';
import Jokes from '../components/Jokes';

function Home() {
  const counters = [
    { title: 'counter 1' },
  ];
  return (
    <>
      <Jokes title="1" />
    </>
  );
}

export default Home;
