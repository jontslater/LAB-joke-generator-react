import React, { useState } from 'react';
import getJoke from '../api/jokeData';


function Jokes({}) {
  const { joke, setJoke } = useState('');

  const handleClick = () => {
    setJoke((prevState)) = getJoke )
  }
}