import React from "react";

export default function ImagePopup({ card, onClose }) {
  console.log(card.link, card.name);

  const className = card.link
    ? "popup popup_type_open-image popup_opened"
    : "popup popup_type_open-image";
  return (
    <div className={className}>
      <div className="popup__container">
        <figure className="popup__card-contain">
          <img src={card.link} alt="" className="popup__image" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>

        <button type="button" className="popup__button-close" onClick={onClose}></button>
      </div>
    </div>
  );
}
