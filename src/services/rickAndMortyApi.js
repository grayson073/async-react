// export const getRickAndMortyCharacters = (page = 1) => {
//   return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character/?page=${page}`, {
//     headers: {
//       origin: null
//     }
//   })
//     .then(res => res.json())
//     .then(json => ({
//       totalPages: json.info.pages,
//       results: json.results
//     }));
// };


export const getRickAndMortyCharacters = async(page = 1) => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character/?page=${page}`, {
    headers: {
      origin: null
    }
  });

  const json = await response.json();
  return {
    totalPages: json.info.pages,
    results: json.results
  };
};
