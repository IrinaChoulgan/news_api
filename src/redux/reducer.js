import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const {
  deleteNewsRequest,
  deleteNewsSuccess,
  deleteNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsError,
  addNewsRequest,
  addNewsSuccess,
  addNewsError
} = actions;

const initState = [];

const items = createReducer(initState, {
  [fetchNewsSuccess]: (_, { payload }) => payload,
  [addNewsSuccess]: (state, { payload }) => [...state, ...payload],
  [deleteNewsSuccess]: (state, { payload }) => state.filter((news) => news.id !== payload)
});
const loading = createReducer(false, {
  [addNewsRequest]: () => true,
  [addNewsSuccess]: () => false,
  [addNewsError]: () => false,
  [deleteNewsRequest]: () => true,
  [deleteNewsSuccess]: () => false,
  [deleteNewsError]: () => false,
  [fetchNewsRequest]: () => true,
  [fetchNewsSuccess]: () => false,
  [fetchNewsError]: () => false
});

export default combineReducers({
  items,
  loading
});
