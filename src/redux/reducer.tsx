import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import actions from './actions.tsx';

const {
  deleteNewsRequest,
  deleteNewsSuccess,
  deleteNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsError,
  addNewsRequest,
  addNewsSuccess,
  addNewsError,
} = actions;

interface News {
  id: number;
  title: string;
  body: string;
}
interface State {
  items: News[];
  loading: boolean;
}

const initState: News[] = [];

const items = createReducer(initState, {
  [fetchNewsSuccess.type]: (_, action: PayloadAction<News[]>) => action.payload,
  [addNewsSuccess.type]: (state, action: PayloadAction<News[]>) => [
    ...state,
    ...action.payload,
  ],
  [deleteNewsSuccess.type]: (state, action: PayloadAction<News[]>) =>
    state.filter(news => news.id !== action.payload),
});

const loading = createReducer(false, {
  [addNewsRequest.type]: () => true,
  [addNewsSuccess.type]: () => false,
  [addNewsError.type]: () => false,
  [deleteNewsRequest.type]: () => true,
  [deleteNewsSuccess.type]: () => false,
  [deleteNewsError.type]: () => false,
  [fetchNewsRequest.type]: () => true,
  [fetchNewsSuccess.type]: () => false,
  [fetchNewsError.type]: () => false,
});

export default combineReducers<State>({
  items,
  loading,
});
