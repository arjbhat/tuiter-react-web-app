import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { createTuitThunk, findTuitsThunk, deleteTuitThunk, updateTuitThunk } from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

const tuitsSlice = createSlice({
  name: 'tuits',
  // initialState: { tuits: tuits },
  initialState,
  extraReducers: {
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = {
          ...state.tuits[tuitNdx],
          ...payload
        }
      },
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
      },
    [deleteTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = state.tuits.filter(t => t._id !== payload)
      },
    [findTuitsThunk.pending]:
      (state) => {
        state.loading = true
        state.tuits = []
      },
    [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = payload
      },
    [findTuitsThunk.rejected]:
      (state, action) => {
        state.loading = false
        state.error = action.error
      }
  },
  reducers: {
    likeTuit(state, action) {
      const tuit = state.tuits.find(tuit => tuit._id === action.payload);
      tuit.liked = !tuit.liked;
      tuit.liked ? tuit.likes++ : tuit.likes--;
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.tuits
        .findIndex(tuit =>
          tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
  }
});

export const { likeTuit, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;