import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=575a360ec0e0b03cc0665d802b5198ce';
export const searchMovieTv = async (query, type) => {
    const resp = await axios.get(
      `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
    );
    return resp.data.results;
  };