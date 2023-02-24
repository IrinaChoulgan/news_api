import { createAction } from '@reduxjs/toolkit';

export const fetchNewsRequest = createAction('news/fetchNewsRequest');
export const fetchNewsSuccess = createAction('news/fetchNewsSuccess');
export const fetchNewsError = createAction('news/fetchNewsError');

export const deleteNewsRequest = createAction('deleteNewsRequest');
export const deleteNewsSuccess = createAction('news/deleteNewsSuccess');
export const deleteNewsError = createAction('news/deleteNewsError');

export const addNewsRequest = createAction('news/addNewsRequest');
export const addNewsSuccess = createAction('news/addNewsSuccess');
export const addNewsError = createAction('news/addNewsError');

export default {
  deleteNewsRequest,
  deleteNewsSuccess,
  deleteNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsError,
  addNewsRequest,
  addNewsSuccess,
  addNewsError
};
