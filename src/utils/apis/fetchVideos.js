import videoApi, {apiKeyQuery} from "./videoApi.js";

export const fetchVideos = async (name, type) => {
  try {
	const res = await videoApi.get(`?s=${name}&type=${type}${apiKeyQuery}`);
	
	return res.data.Search;
  } catch (err) {
	throw err;
  }
}

export const fetchVideoByID = async (id) => {
  try {
	const res = await videoApi.get(`?i=${id}&plot${apiKeyQuery}`);
	
	return res.data;
  } catch (err) {
	throw err;
  }
}