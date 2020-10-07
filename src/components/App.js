import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopup() {
    setSelectedCard(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input
            placeholder="Имя"
            type="text"
            name="name"
            className="popup__input popup__input_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error" id="name-error"></span>
        </label>

        <label className="popup__label">
          <input
            placeholder="Занятие"
            type="text"
            name="about"
            minLength="2"
            maxLength="200"
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
            minLength="1"
            maxLength="30"
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

      <ImagePopup card={selectedCard} onClose={closeAllPopup} />
    </div>
  );
}

export default App;
