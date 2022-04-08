import React, { useState } from "react";

function Usestatehook() {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="content">
        <h1> {count} </h1>
        <button className="btn" onClick={IncNum}>
          Click me
        </button>
      </div>
    </>
  );
}

export default Usestatehook;