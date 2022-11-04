import React, {useEffect} from 'react';
import {
  BiFilm,
  BsHandThumbsUpFill,
  FaCalendarTimes,
} from "react-icons/all.js";
import {
  FaImdb
} from "react-icons/fa";
import "./MovieDetail.scss";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {useParams} from "react-router-dom";
import {
  fetchVideoDetail,
  getSelectedVideo,
  removeSelectedVideo
} from "../../features/videos/videosSlice.js";

function MovieDetail(props) {
  const {imdbID: id} = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(getSelectedVideo);
  
  useEffect(() => {
	dispatch(fetchVideoDetail(id));
	
	return () => {
	  dispatch(removeSelectedVideo());
	}
  }, [id]);
  
  return (
	<>
	  {detail.Title
	   ? <div className = "movieDetail">
		 <div className = "movieImage">
		   <img src = {detail.Poster}
				alt = {detail.Title}
		   />
		 </div>
		 <div className = "movieDesc">
		   <h2 className = "movieTitle">{detail.Title}</h2>
		   <div className = "movieBrief">
      		<span>
      	<FaImdb></FaImdb>
        <p>{detail.imdbRating}</p>
      		</span>
			 <span>
          <BsHandThumbsUpFill></BsHandThumbsUpFill>
          <p>{detail.imdbVotes}</p>
        </span>
			 <span>
        <BiFilm></BiFilm>
        <p>{detail.Runtime}</p>
      </span>
			 <span>
        <FaCalendarTimes></FaCalendarTimes>
        <p>{detail.Year}</p>
      </span>
		   </div>
		   <div className = "movieData">
			 <div className = "moviePlot">
			   <p>
				 {detail.Plot}
			   </p>
			 </div>
			 <div className = "movieCredits">
			   <dl>
				 <div>
				   <dt>Director(s)</dt>
				   <dd>{detail.Director}</dd>
				 </div>
				 <div>
				   <dt>Starring</dt>
				   <dd>{detail.Actors}</dd>
				 </div>
				 <div>
				   <dt>Genre</dt>
				   <dd>{detail.Genre}</dd>
				 </div>
				 <div>
				   <dt>Award(s)</dt>
				   <dd>{detail.Awards}</dd>
				 </div>
				 <div>
				   <dt>Language(s)</dt>
				   <dd>{detail.Language}</dd>
				 </div>
			   </dl>
			 </div>
		   </div>
		 </div>
	   </div> :
	  <h1 className="notFound">
		Loading...
	   </h1>}
	</>
  
  );
}

export default MovieDetail;