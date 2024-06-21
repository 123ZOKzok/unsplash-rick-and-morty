import axios from 'axios';

const rickAndMortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

export const fetchCharacters = async () => {
  let allCharacters = [];
  let nextPageUrl = '/character';

  try {
    while (nextPageUrl) {
      const response = await rickAndMortyApi.get(nextPageUrl);
      const { results, info } = response.data;
      allCharacters = [...allCharacters, ...results];
      nextPageUrl = info.next;
    }
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }

  return allCharacters;
};

export const fetchCharacterById = (id) => {
  return rickAndMortyApi.get(`/character/${id}`);
};

