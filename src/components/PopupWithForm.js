import React from "react";

export default function PopupWithForm({ title, name }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <form
        name={name}
        action="#"
        method="POST"
        className="popup__form popup__form_type_edit"
        novalidate
      >
        <h2 className="popup__title">{title}</h2>

        <label className="popup__label">
          <input
            type="text"
            name="name"
            className="popup__input popup__input_name"
            value=""
            required
            minlength="2"
            maxlength="40"
          />
          <span className="popup__error" id="name-error"></span>
        </label>

        <label className="popup__label">
          <input
            type="text"
            name="about"
            className="popup__input popup__input_profession"
            value=""
            required
            minlength="2"
            maxlength="200"
          />
          <span className="popup__error" id="about-error"></span>
        </label>

        <button type="submit" value="Сохранить" className="popup__button popup__button-profile">
          Сохранить
        </button>
        <button type="reset" className="popup__button-close"></button>
      </form>
    </div>
  );
}
