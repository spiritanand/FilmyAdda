import React from 'react';
import "./VideoCard.scss";
import {Link} from "react-router-dom";

function VideoCard({video}) {
  return (
	<div className = "videoCard">
	  <Link to = {`movie/${video.imdbID}`}>
		<div className = "poster">
		  <img src = {video.Poster}
			   alt = {video.Title}
		  />
		</div>
		<div className = "videoInfo">
		  <h2>{video.Title}</h2>
		  <p>{video.Year}</p>
		</div>
	  </Link>
	</div>
  );
}

export default VideoCard;