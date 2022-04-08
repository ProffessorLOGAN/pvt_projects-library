import React, { useState } from "react";

function Time() {
 let vtime = new Date().toLocaleTimeString();
 const[stime,newtime] =useState(vtime);

  const changeTime = () => {
   let vtime = new Date().toLocaleTimeString();
    newtime(vtime);
  };

  return (
    <>
      <div className="content">
        <h1> {stime} </h1>
        <button className="btn" onClick={changeTime}>
          Click me
        </button>
      </div>
    </>
  );
}

export default Time;