import React, { useState } from 'react';
// use
// component name must be uppercase
// must be in the function/component body
// cannot cal conditionally

const UseStateBasics = () => {
  // console.log(use('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[0];
  // console.log(value, handler);
  const [text, setText] = useState('random title');

  const handlerClick = () => {
    if (text === 'random title'){
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <>
    <h1>{text}</h1>
    <button className="btn" onClick={handlerClick}>
      change title
    </button>
    </>
  )
};

export default UseStateBasics;
