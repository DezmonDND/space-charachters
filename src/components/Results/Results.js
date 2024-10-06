function Results(props) {
  const { filteredCharacters, handleOpenPopup } = props;

  function handleClick(item) {
    handleOpenPopup(item);
  }

  return (
    <div className="mt-[20px] text-left">
      <h4 className="m-0 mb-[10px]">Найдено</h4>
      <ul className="flex flex-col gap-[10px] max-h-[140px] overflow-y-auto no-scrollbar">
        {filteredCharacters.length !== 0 &&
          filteredCharacters.map((item) => (
            <li
              key={item.name}
              className="border border-white rounded p-[10px] text-xs cursor-pointer"
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
