import React from 'react';
import Jokes from '../components/Jokes';

function Home() {
  const counters = [
    { title: 'counter 1' },
  ];
  return (
    <>
      {counters.map((counter) => (<Jokes key={counter.title} title={counter.title} />))}

    </>
  );
}

export default Home;
