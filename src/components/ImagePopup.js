import React from "react";

export default function ImagePopup() {
    return (
        <div className="popup popup_type_open-image">
        <div className="popup__container">
          <figure className="popup__card-contain">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__caption"></figcaption>
          </figure>

          <button type="button" className="popup__button-close"></button>
        </div>
      </div>
    )
}