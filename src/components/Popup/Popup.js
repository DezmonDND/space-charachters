import "./Popup.css";

function Popup(props) {
  const { isOpen, onClose, selectedCharacter } = props;

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} `}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <h2 className="popup__title">Вселенная Рик и Морти</h2>
        <ul className="popup__content">
          <li className="popup__element">{`Персонаж: ${selectedCharacter.name}`}</li>
          <li className="popup__element">{`Статус: ${selectedCharacter.status}`}</li>
          <li className="popup__element">{`Раса: ${selectedCharacter.species}`}</li>
          <li className="popup__element">
            <img
              className="popup__image"
              src={selectedCharacter.image}
              alt={`Аватар ${selectedCharacter.name}`}
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Popup;
