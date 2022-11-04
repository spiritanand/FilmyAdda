import {Suspense} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import MovieDetail from "./components/movieDetail/MovieDetail.jsx";
import Error from "./pages/Error.jsx";
import Loading from "./pages/Loading.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const router = createBrowserRouter(createRoutesFromElements(
	<Route path = "/"
		   element = {<RootLayout/>}
		   errorElement = {<Error/>}
	>
	  <Route index
			 element = {<Home/>}
	  ></Route>
	  <Route path = "/movie/:imdbID"
			 element = {<MovieDetail/>}
	  ></Route>
	</Route>
))

function App() {
  return (
  <Suspense fallback = {<Loading/>}>
	<RouterProvider router = {router}></RouterProvider>
  </Suspense>
  )
}

export default App
