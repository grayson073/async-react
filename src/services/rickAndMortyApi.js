export const getRickAndMortyCharacters = (page = 1) => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character/?page=${page}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};


// async function getRickAndMortyCharacters() {

// }
