import "./Results.css";

function Results(props) {
  const { filteredCharacters } = props;

  return (
    <div className="results">
      <h4 className="results__title">Найдено</h4>
      <ul className="results__items">
        {filteredCharacters.length !== 0 && filteredCharacters.map((item) => (
          <li className="results__element">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
