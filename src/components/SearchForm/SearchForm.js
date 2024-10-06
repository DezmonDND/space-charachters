import "./SearchForm.css";

function SearchForm(props) {
  const { values, handleChange, findCharacters } = props;

  function handleSubmit(e) {
    e.preventDefault();
    findCharacters(values);
    localStorage.setItem("values", JSON.stringify(values));
  }

  function pressEnter(e) {
    if (e.key === "Enter") {
      return handleSubmit(e);
    } else {
      return "";
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} onKeyDown={pressEnter}>
      <div className="form__field">
        <label className="form__label" htmlFor="name">
          Имя персонажа
        </label>
        <input
          className="form__input"
          onChange={handleChange}
          name="name"
          value={values.name || ""}
          type="text"
          placeholder="Введите имя персонажа"
        ></input>
      </div>
      <div className="form__select">
        <div className="form__field">
          <label className="form__label" htmlFor="status">
            Жив?
          </label>
          <select
            className="form__select"
            onChange={handleChange}
            value={values.status || ""}
            id="status"
            name="status"
          >
            <option selected disabled hidden></option>
            <option className="form__option" value="Alive">
              Alive
            </option>
            <option className="form__option" value="Dead">
              Dead
            </option>
            <option className="form__option" value="unknown">
              Unknown
            </option>
          </select>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="type">
            Раса
          </label>
          <select
            className="form__select"
            onChange={handleChange}
            value={values.type || ""}
            id="type"
            name="type"
          >
            <option selected disabled hidden></option>
            <option className="form__option" value="Human">
              Human
            </option>
            <option className="form__option" value="Alien">
              Alien
            </option>
          </select>
        </div>
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="episode">
          Эпизод
        </label>
        <input
          className="form__input"
          onChange={handleChange}
          name="episode"
          value={values.episode || ""}
          type="text"
          placeholder="Введите номер эпизода"
        ></input>
      </div>
    </form>
  );
}

export default SearchForm;
