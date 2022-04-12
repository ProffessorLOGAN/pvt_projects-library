import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState();
  const [string, setstringName] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setstringName(name);
  };

  return (
    <>
      <div className="content">
        <h1>{string}</h1>
        <input
          type="text"
          placeholder="Enter any String"
          onChange={inputEvent}
          defaultvalue=""
        />
        <button className="btn" onClick={onSubmit}>
          click me
        </button>
      </div>
    </>
  );
}

export default Forms;
