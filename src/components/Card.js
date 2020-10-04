import React from "react";

export default function Card({ name, link, likes, _id}) {
  return (
    <li className="cards__list-item">
      <img src={link} alt="" className="card__image" />
      <h2 className="card__caption">{name}</h2>
      <div className="card__like-container">
        <button type="button" className="card__button-like"></button>
        <span className="like__counter">{likes}</span>
      </div>

      <button type="button" className="card__delete"></button>
    </li>
  );
}
