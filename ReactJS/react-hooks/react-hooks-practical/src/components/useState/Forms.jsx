import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState();
  const [name2, setName2] = useState();
  const [string, setstringName] = useState();
  const [string2, setstringName2] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const inputEvent2 = (event) => {
    setName2(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setstringName(name);
    setstringName2(name2);
  };

  return (
    <>
      <div className="content">
        <form onSubmit={onSubmit}>
          <h1>
           
            Hello {string} {string2}
          </h1>

          <input
            type="text"
            placeholder="Enter your firstname"
            onChange={inputEvent}
            defaultvalue=""
          />
          <input
            type="text"
            placeholder="Enter your lastname"
            onChange={inputEvent2}
            defaultvalue=""
          />
          <button type="submit" className="btn">
            click me
          </button>
        </form>
      </div>
    </>
  );
}

export default Forms;
