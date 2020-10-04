import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import api from "../utils/Api";

function App({ onEditProfile, onAddPlace, onEditAvatar, closeAllPopup }) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  

  onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  closeAllPopup = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        handleEditAvatarClick={onEditAvatar}
        handleEditProfileClick={onEditProfile}
        handleAddPlaceClick={onAddPlace}
      />
      <Footer />

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input type="text" name="name" className="popup__input popup__input_name" required />
          <span className="popup__error" id="name-error"></span>
        </label>

        <label className="popup__label">
          <input
            type="text"
            name="about"
            className="popup__input popup__input_profession"
            required
          />
          <span className="popup__error" id="about-error"></span>
        </label>

        <button type="submit" value="Сохранить" className="popup__button popup__button-profile">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"add"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input
            type="text"
            name="name"
            className="popup__input popup__input_title"
            placeholder="Название"
            required
          />
          <span className="popup__error" id="name-error"></span>
        </label>

        <label className="popup__label">
          <input
            type="url"
            name="link"
            className="popup__input popup__input_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="link-error"></span>
        </label>

        <button type="submit" value="Создать" className="popup__button popup__button-card">
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input
            type="url"
            name="avatar"
            className="popup__input popup__input_link"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__error" id="avatar-error"></span>
        </label>

        <button type="submit" value="Сохранить" className="popup__button popup__button-avatar">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name={"confirm"} title={"Вы уверены?"} onClose={closeAllPopup}>
        <button type="submit" value="Да" className="popup__button popup__button-confirm">
          Да
        </button>
      </PopupWithForm>

      <ImagePopup />
    </div>
  );
}

export default App;
