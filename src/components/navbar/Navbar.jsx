import React, {useState} from 'react';
import {
  BsSearch,
} from "react-icons/all.js";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {
  fetchMovies,
  fetchShows
} from "../../features/videos/videosSlice.js";
import logo from "../../images/logo.png"
import "./Navbar.scss";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  
  function submitHandler(e) {
	e.preventDefault();
	const searchText = search.trim()
							 ?.toLowerCase();
	
	if (!searchText) {
	  alert("Enter valid movie/show");
	  return;
	}
	
	dispatch(fetchMovies(searchText));
	dispatch(fetchShows(searchText));
	
	setSearch("");
  }
  
  return (
	<div className = "nav">
	  <Link to = "/">
		<div className = "logo">
		  <img src = {logo}
			   alt = "film-logo"
		  />
		  <h1>FilmyAdda</h1>
		</div>
	  </Link>
	  <div className = "searchBar">
		<form onSubmit = {submitHandler}>
		  <input type = "text"
				 placeholder = "Binge..."
				 value = {search}
				 onChange = {e => setSearch(e.target.value)}
		  />
		  <button>
			<BsSearch></BsSearch>
		  </button>
		</form>
	  </div>
	</div>
  );
}

export default Navbar;