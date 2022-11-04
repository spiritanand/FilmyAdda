import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import {
  fetchVideoByID,
  fetchVideos
} from "../../utils/apis/fetchVideos.js";

export const fetchMovies = createAsyncThunk("videos/fetchMovies", async (name) => {
  const movieName = name || "Star";
  const type = "movie";
  
  return fetchVideos(movieName, type)
});

export const fetchShows = createAsyncThunk("videos/fetchShows", async (name) => {
  const seriesName = name || "Friends";
  const type = "series";
  
  return fetchVideos(seriesName, type)
});

export const fetchVideoDetail = createAsyncThunk(
  "videos/fetchVideoByID", async (id) => {
	return fetchVideoByID(id);
  })

const initialState = {
  movies       : [],
  shows        : [],
  selectedVideo: {},
};

const videosSlice = createSlice({
  name         : "videos",
  initialState,
  reducers     : {
	addMovies          : (state, action) => {
	  state.movies = action.payload;
	},
	removeSelectedVideo: (state) => {
	  state.selectedVideo = {};
	}
  },
  extraReducers: {
	[fetchMovies.fulfilled]     : (state, action) => {
	  state.movies = action.payload;
	},
	[fetchShows.fulfilled]      : (state, action) => {
	  state.shows = action.payload;
	},
	[fetchVideoDetail.fulfilled]: (state, {payload}) => {
	  state.selectedVideo = payload;
	}
  }
});

export const getAllMovies = state => state.videos.movies;
export const getAllShows = state => state.videos.shows;
export const getSelectedVideo = state => state.videos.selectedVideo;
export const {addMovies, removeSelectedVideo} = videosSlice.actions;
export const videosReducer = videosSlice.reducer;