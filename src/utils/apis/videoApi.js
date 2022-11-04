import axios from "axios";

const baseURL = `https://www.omdbapi.com/`;
export default axios.create({
  baseURL,
})

export const apiKeyQuery = `&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;