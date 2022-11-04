import React from 'react'
import "./scss/Main.scss"
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import App from './App'
import './scss/Main.scss'
import {store} from "./features/store.js";

ReactDOM.createRoot(document.getElementById('root'))
		.render(
		  <React.StrictMode>
			<Provider store = {store}
					  children = {<App/>}
			></Provider>
		  </React.StrictMode>
		)
