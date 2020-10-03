import React from "react";

export default function Main({
  url,
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay" onClick={handleEditAvatarClick}>
          <img src={url} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">fawf</h1>
          <button
            onClick={handleEditProfileClick}
            type="button"
            className="profile__button profile__button_edit"
          ></button>
          <p className="profile__subtitle"></p>
        </div>

        <button
          onClick={handleAddPlaceClick}
          type="button"
          className="profile__button profile__button_add"
        ></button>
      </section>

      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}
