export class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCharacters() {
    return fetch(this._baseUrl).then(this._checkError);
  }
}

export const api = new Api({
  baseUrl: "https://rickandmortyapi.com/api/character",
});
