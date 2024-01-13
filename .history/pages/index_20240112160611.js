import React from 'react';
import Jokes from '../components/Jokes';

function Home() {
  const Jokies = [
    { title: 'Jokes' }];

  return (
    <>
      <Jokes />
      <Jokes />
      <Jokes />
    </>
  );
}

export default Home;
