import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        topRatedTVSeries: null,
        airingTodayTVSeries: null
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies =action.payload
        },
        addTrailerVideo :(state, action) =>{
            state.trailerVideo = action.payload
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies =action.payload
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies =action.payload
        },
        addUpComingMovies : (state,action) =>{
            state.upComingMovies =action.payload
        },
        addTopRatedTVSeries : (state,action) =>{
            state.topRatedTVSeries =action.payload
        },
        addAiringTodayTVSeries : (state,action) =>{
            state.airingTodayTVSeries =action.payload
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addTopRatedTVSeries, addAiringTodayTVSeries} = movieSlice.actions;
export default movieSlice.reducer;