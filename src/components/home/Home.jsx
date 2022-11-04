import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  fetchMovies,
  fetchShows,
  getAllMovies,
  getAllShows
} from "../../features/videos/videosSlice.js";
import VideoListing from "./videoListing/VideoListing.jsx";

function Home(props) {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  
  useEffect(() => {
	dispatch(fetchMovies());
	dispatch(fetchShows());
  }, []);
  
  return (
	<div className = "home">
	  <div className = "banner-img"></div>
	  <VideoListing videos = {movies}
					title = "movies"
	  ></VideoListing>
	  <VideoListing videos = {shows}
					title = "shows"
	  ></VideoListing>
	</div>
  );
}

export default Home;
