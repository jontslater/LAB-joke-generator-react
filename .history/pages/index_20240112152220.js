import React from 'react';
import Jokes from '../components/Jokes';

function Home() {
  const [active, setActive] = useState('FirstCard');
  return (
    <>
      {active === 'FirstCard' && <Jokes title="1" />}
      <Jokes title="2" />
    </>
  );
}

export default Home;
