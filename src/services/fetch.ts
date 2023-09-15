import axios from "axios";

async function getTrendingMovies(time: string) {
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

async function getTrendingTvShows(time: string) {
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

async function getNewReleased(movieOrTv: string) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/${movieOrTv}`,
    params: {
      language: "en-US",
      page: "1",
      sort_by: "primary_release_date.desc",
      // "release_date.gte": "2023-09-01",
      "release_date.lte": "2023-09-01",
      // year: '2023',
      with_original_language: "en",
      with_poster: true,
      "vote_average.gte": "3",
      "vote_count.gte": "100",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getMovieAndTv(movieOrTv: string,  sortBy:string) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/${movieOrTv}`,
    params: {
      language: "en-US",
      page: "1",
      sort_by: sortBy,
      // "release_date.gte": "2023-09-01",
      "release_date.lte": "2023-09-01",
      // year: '2023',
      with_original_language: "en",
      with_poster: true,
      "vote_average.gte": "3",
      "vote_count.gte": "100",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getTrendingMovies, getTrendingTvShows, getNewReleased, getMovieAndTv };
