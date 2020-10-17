import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ onCardDelete, onCardLike, onCardClick, card, link, name, likes }) {
  function handleCard() {
    onCardClick(card);
    console.log(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? 'card__delete' : 'card__delete_hidden';
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  console.log(isLiked)
  const cardLikeButtonClassName = isLiked ? 'card__button-like_active' : 'card__button-like'; 
  
  return (
    <li className="cards__list-item">
      <img onClick={handleCard} src={link} alt="" className="card__image" />
      <h2 className="card__caption">{name}</h2>
      <div className="card__like-container">
        <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName}></button>
        <span className="like__counter">{likes}</span>
      </div>

      <button onClick={handleDeleteClick} type="button" className={cardDeleteButtonClassName}></button>
    </li>
  );
}
