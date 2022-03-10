import React from "react";
import "./Card.css";



function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="img" className="card__img" />
          <div className="card__info">
            <span className="card__category"></span>
            <h3 className="card__title">{props.title}</h3>

            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="button"> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
