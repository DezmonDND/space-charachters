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
      <div className="flex flex-col max-w-[340px] w-full bg-black border border-white rounded-lg m-[10px] p-[20px] pt-[15px] text-left">
        <h2 className="text-2xl font-normal mb-[20px]">
          Вселенная Рик и Морти
        </h2>
        <ul>
          <li className="mb-[10px]">{`Персонаж: ${selectedCharacter.name}`}</li>
          <li className="mb-[10px]">{`Статус: ${selectedCharacter.status}`}</li>
          <li className="mb-[10px]">{`Раса: ${selectedCharacter.species}`}</li>
          <li className="mb-[10px]">
            <img
              className="max-w-[300px] w-full object-cover object-center rounded"
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
