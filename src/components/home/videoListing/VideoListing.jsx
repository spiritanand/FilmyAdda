import React from 'react';
import "./VideoLisiting.scss";
import {
  ScrollMenu,
} from "react-horizontal-scrolling-menu";
import VideoCard from "../videoCard/VideoCard.jsx";

function VideoListing({
						videos,
						title
					  }) {
  return (
	<>
	  {
		videos
		  ?.length === 0 || !videos
		? (
		  <h3 className = "notFound"
			  style = {{
				fontSize: "3rem",
			  }}
		  >Nothing yet.</h3>
		)
		: (
		  <>
			<div className = "title">
			  <h2>{title}</h2>
			</div>
			<ScrollMenu>
			  <div className = "videoListing">
				{
				  videos?.map(video => <VideoCard key = {video.imdbID}
												 video = {video}
				  ></VideoCard>)}
			  </div>
			</ScrollMenu>
		  </>
		)
	  }
	</>
  );
}

export default VideoListing;
