import axios from "axios";

async function getTrendingMovies(time:string) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/movie/${time}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

async function getTrendingTvShows(time:string) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/tv/${time}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export { getTrendingMovies ,getTrendingTvShows};
