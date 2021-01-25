import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text,setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
  {/* <h1>{firstValue}</h1>
  <h1>value: {secondValue}</h1> */}
  {/* {if(){console.log('hello')}} */}
  <h1>{text || 'john doe'}</h1>
  {text && <h1>hello world</h1>}
  {!text && <h1>hello world</h1>}
  </>;
};

export default ShortCircuit;
