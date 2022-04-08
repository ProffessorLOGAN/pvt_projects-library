import React, { useState } from "react";

function Events() {
  let greet = "Good Morning";
  const [oldgreet, newgreet] = useState(greet);
  const greeting = () => {
    let greet = "Good Night";
    newgreet(greet);
  };
  return (
    <>
      <div className="content" >
        <h3> hello proffessorLOGAN, {oldgreet}</h3>

        <button className="btn" onClick={greeting}>
          Change me
        </button>
      </div>
    </>
  );
}

export default Events;
