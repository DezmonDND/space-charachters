import "./Results.css";

function Results(props) {
  const { filteredCharacters, handleOpenPopup } = props;

  function handleClick(item) {
    handleOpenPopup(item);
  }

  return (
    <div className="results">
      <h4 className="results__title">Найдено</h4>
      <ul className="results__items">
        {filteredCharacters.length !== 0 &&
          filteredCharacters.map((item) => (
            <li
              key={item.name}
              className="results__element"
              onClick={() => handleClick(item)}
            >
              {`${item.name}, ${item.gender}, ${item.species}, ${item.status}`}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Results;
