import React from 'react';
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

function Error(props) {
  return (
	<>
	  <Navbar></Navbar>
	  <h1 className = "notFound"
		  style = {{
			fontSize: "6rem",
		  }}
	  >
		404,<br/>
		not found.
	  </h1>
	  <Footer></Footer>
	</>
  );
}

export default Error;