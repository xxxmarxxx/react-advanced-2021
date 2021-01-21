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
    document.title = `New Massages(${value})`;
  });
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
