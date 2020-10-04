import React from "react";
import api from "../utils/Api.js";
import avatar from "../images/avatar.jpg";
import Card from "../components/Card";

export default function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
}) {
  const [userName, setUserName] = React.useState("Жак Ив-Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = React.useState({ avatar });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData().then((res) => {
      console.log(res);
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getAllCardsList().then((cardData) => {
      const item = cardData.map((cardEl) => ({
        link: cardEl.link,
        name: cardEl.name,
        likes: cardEl.likes,
        _id: cardEl._id
      }))

      setCards(item)
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay" onClick={handleEditAvatarClick}>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            onClick={handleEditProfileClick}
            type="button"
            className="profile__button profile__button_edit"
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>

        <button
          onClick={handleAddPlaceClick}
          type="button"
          className="profile__button profile__button_add"
        ></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} _id={card._id} name={card.name} link={card.link} likes={card.likes.length} />
          ))}
        </ul>
      </section>
    </main>
  );
}
