import React from "react";

export default function PopupWithForm({ title, name, children, isOpen, onClose }) {
  const className = isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`;
  return (
    <div className={className}>
      <form
        name={name}
        action="#"
        method="POST"
        className={`popup__form popup__form_type_${name}`}
        noValidate
      >
        <h2 className="popup__title">{title}</h2>

        {children}

        <button type="reset" className="popup__button-close" onClick={onClose}></button>
      </form>
    </div>
  );
}
