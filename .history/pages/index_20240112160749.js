import React from 'react';
import Jokes from '../components/Jokes';

function Home() {
  const Jokies = [
    { title: 'Jokes1' },
    { title: 'Jokes2' },
    { title: 'Jokes3' }];

  return (
    <>
      <Jokes title="Jokes1" />
      <Jokes title="Jokes2" />
      <Jokes title="Jokes2" />
    </>
  );
}

export default Home;
