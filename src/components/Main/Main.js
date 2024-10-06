import { useEffect, useState } from "react";
import Results from "../Results/Results";
import SearchForm from "../SearchForm/SearchForm";
import { api } from "../../utils/api";
import Popup from "../Popup/Popup";

function Main() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [values, setValues] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharachter] = useState({});

  function handleOpenPopup(character) {
    setIsOpen(true);
    setSelectedCharachter(character);
  }

  function closePopup() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    api
      .getCharacters()
      .then((res) => {
        setCharacters(res.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCharacters]);

  useEffect(() => {
    if (localStorage.values || localStorage.filteredCharacters) {
      const values = JSON.parse(localStorage.values);
      const filteredCharacters = JSON.parse(localStorage.filteredCharacters);

      setFilteredCharacters(filteredCharacters);
      setValues(values);
    }
  }, []);

  function findCharacters(values) {
    const filteredCharacters = characters.filter((item) => {
      const nameMatch = values.name
        ? item.name.toLowerCase().includes(values.name.toLowerCase())
        : true;
      const statusMatch = values.status ? item.status === values.status : true;
      const typeMatch = values.type ? item.species === values.type : true;
      const episodeMatch = values.episode
        ? item.episode &&
          item.episode.some((ep) => {
            const episodeNumber = ep.split("/").pop();

            return episodeNumber === values.episode;
          })
        : true;

      return nameMatch && statusMatch && typeMatch && episodeMatch;
    });
    localStorage.setItem(
      "filteredCharacters",
      JSON.stringify(filteredCharacters)
    );
    setFilteredCharacters(filteredCharacters);
  }

  return (
    <main className="flex flex-col max-w-[340px] w-full border border-white rounded-lg m-[10px] p-[20px] pt-[15px] pb-[70px]">
      <h1 className="text-2xl font-normal mb-[20px]">Вселенная Рик и Морти</h1>
      <SearchForm
        values={values}
        handleChange={handleChange}
        findCharacters={findCharacters}
      ></SearchForm>
      <Results
        filteredCharacters={filteredCharacters}
        isOpen={isOpen}
        onClose={closePopup}
        handleOpenPopup={handleOpenPopup}
      ></Results>
      <Popup
        isOpen={isOpen}
        onClose={closePopup}
        selectedCharacter={selectedCharacter}
      ></Popup>
    </main>
  );
}

export default Main;
