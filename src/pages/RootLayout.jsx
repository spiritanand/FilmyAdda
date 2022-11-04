import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

function RootLayout(props) {
  return (
	<>
	  <Navbar></Navbar>
	  <main>
		<Outlet/>
	  </main>
	  <Footer></Footer>
	</>
  );
}

export default RootLayout;