import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
  handleEditProfileClick = () => {
    const popupEdit = document.querySelector(".popup_type_edit");
    popupEdit.classList.add("popup_opened");
    console.log(popupEdit);
  };

  handleEditAvatarClick = () => {
    const popupAvatar = document.querySelector(".popup_type_avatar");
    popupAvatar.classList.add("popup_opened");
    console.log(popupAvatar);
  };

  handleAddPlaceClick = () => {
    const popupAdd = document.querySelector(".popup_type_add");
    popupAdd.classList.add("popup_opened");
    console.log(popupAdd);
  };

  return (
    <div className="page">
      <Header />
      <Main
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />

      <div className="popup popup_type_edit">
        <form
          name="edit"
          action="#"
          method="POST"
          className="popup__form popup__form_type_edit"
          
        >
          <h2 className="popup__title">Редактировать профиль</h2>

          <label className="popup__label">
            <input
              type="text"
              name="name"
              className="popup__input popup__input_name"
              
              required
              
              
            />
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
          <button type="reset" className="popup__button-close"></button>
        </form>
      </div>

      <div className="popup popup_type_add">
        <form
          action="#"
          method="POST"
          className="popup__form popup__form_type_add"
          name="add"
          
        >
          <h2 className="popup__title">Новое место</h2>

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
          <button type="button" className="popup__button-close"></button>
        </form>
      </div>

      <div className="popup popup_type_open-image">
        <div className="popup__container">
          <figure className="popup__card-contain">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__caption"></figcaption>
          </figure>

          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <form
          name="avatar"
          action="#"
          method="POST"
          className="popup__form popup__form_type_avatar"
          
        >
          <h2 className="popup__title">Обновить аватар</h2>

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
          <button type="button" className="popup__button-close"></button>
        </form>
      </div>

      <div className="popup popup_type_confirm">
        <form
          name="confirm"
          action="#"
          className="popup__form popup__form_type_confirm"
          
        >
          <h2 className="popup__title">Вы уверены?</h2>

          <button type="submit" value="Да" className="popup__button popup__button-confirm">
            Да
          </button>
          <button type="button" className="popup__button-close"></button>
        </form>
      </div>

      <template id="card-template">
        <li className="cards__list-item">
          <img src="#" alt="" className="card__image" />
          <h2 className="card__caption">awf</h2>
          <div className="card__like-container">
            <button type="button" className="card__button-like"></button>
            <span className="like__counter">0</span>
          </div>

          <button type="button" className="card__delete"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
