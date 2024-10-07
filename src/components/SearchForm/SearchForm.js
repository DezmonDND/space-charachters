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
    <form
      className="flex flex-col gap-[12px] text-left"
      onSubmit={handleSubmit}
      onKeyDown={pressEnter}
    >
      <div className="flex flex-col gap-[5px] w-full">
        <label htmlFor="name">Имя персонажа</label>
        <input
          className="min-h-[28px] bg-black text-white border rounded px-[5px]"
          onChange={handleChange}
          name="name"
          value={values.name || ""}
          type="text"
          placeholder="Введите имя персонажа"
        ></input>
      </div>
      <div className="flex flex-col  gap-[10px] cursor-pointer sm:flex-row">
        <div className="flex flex-col gap-[5px] w-full">
          <label htmlFor="status">Жив?</label>
          <select
            className="flex gap-[10px] min-h-[25px] bg-black border rounded cursor-pointer text-white select-arrow"
            onChange={handleChange}
            value={values.status || ""}
            id="status"
            name="status"
          >
            <option selected disabled hidden></option>
            <option className="min-h-5 bg-black" value="Alive">
              Alive
            </option>
            <option className="min-h-5 bg-black" value="Dead">
              Dead
            </option>
            <option className="min-h-5 bg-black" value="unknown">
              Unknown
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-[5px] w-full">
          <label htmlFor="type">Раса</label>
          <select
            className="flex gap-[10px] min-h-[25px] bg-black border rounded cursor-pointer text-white select-arrow"
            onChange={handleChange}
            value={values.type || ""}
            id="type"
            name="type"
          >
            <option selected disabled hidden></option>
            <option className="min-h-5 bg-black" value="Human">
              Human
            </option>
            <option className="min-h-5 bg-black" value="Alien">
              Alien
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-[5px] w-full">
        <label htmlFor="episode">Эпизод</label>
        <input
          className="min-h-[28px] bg-black text-white border rounded px-[5px]"
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
