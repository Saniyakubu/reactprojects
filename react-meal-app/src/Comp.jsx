import React from 'react';
import { useContext } from 'react';
import { textContext } from './App';

const Comp = () => {
  const data = useContext(textContext);
  console.log(data);
  return <div></div>;
};

export default Comp;
