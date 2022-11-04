import {configureStore} from "@reduxjs/toolkit";
import {videosReducer} from "./videos/videosSlice.js";

export const store = configureStore({
  reducer: {
	videos: videosReducer,
  },
})