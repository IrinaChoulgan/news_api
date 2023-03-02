import { createAction } from '@reduxjs/toolkit';

export const fetchNewsRequest = createAction('news/fetchNewsRequest');
export const fetchNewsSuccess = createAction<Array<News>>(
  'news/fetchNewsSuccess',
);
export const fetchNewsError = createAction('news/fetchNewsError');

export const deleteNewsRequest = createAction<number>('deleteNewsRequest');
export const deleteNewsSuccess = createAction<number>('news/deleteNewsSuccess');
export const deleteNewsError = createAction('news/deleteNewsError');

export const addNewsRequest = createAction<number>('news/addNewsRequest');
export const addNewsSuccess = createAction<News>('news/addNewsSuccess');
export const addNewsError = createAction('news/addNewsError');

interface News {
  id: Number;
  title: string;
}

export default {
  deleteNewsRequest,
  deleteNewsSuccess,
  deleteNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsError,
  addNewsRequest,
  addNewsSuccess,
  addNewsError,
};
