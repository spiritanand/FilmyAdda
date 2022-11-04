import React from 'react';
import "./Footer.scss"
import github from "../../images/github.png"

function Footer(props) {
  return (
	<div className = "footer">
	  <h3>Made with ♥️</h3>
	  <a href = "https://github.com/spiritmonster/FilmyAdda">
		<img src = {github}
			 alt = "github-icon"
		/>
	  </a>
	  <h6>Spirit ✌️</h6>
	</div>
  )
}

export default Footer;