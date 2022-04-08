import React, { useState } from "react";

function Digitaltime() {
 let vtime = new Date().toLocaleTimeString();
 const[stime,newtime] =useState(vtime);

  const changeTime = () => {
   let vtime = new Date().toLocaleTimeString();
    newtime(vtime);
  };

  setInterval(changeTime,1000);

  return (
    <>
      <div className="content">
        <h1> {stime} </h1>
       
      </div>
    </>
  );
}

export default Digitaltime;