import React, { useState, useEffect } from "react";
// by default runs after every re-render
// domyślnie uruchamiana po każdym renderowaniu
// cleanup function
// funkcja czyszcząca
// second parameter
// drugi parametr

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Massages(${value})`;
    }
  },[value]);

  useEffect(()=>{
    console.log('hello world');
  },[])

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
