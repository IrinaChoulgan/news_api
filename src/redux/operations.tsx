// @ts-ignore
import actions from './actions.tsx';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

const fetchNews = () => (dispatch: Dispatch) => {
  dispatch(actions.fetchNewsRequest());

  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => dispatch(actions.fetchNewsSuccess(data)))
    .catch((error: Error) => dispatch(actions.fetchNewsError(error)));
};

const addNews = (page: number) => (dispatch: Dispatch) => {
  dispatch(actions.addNewsRequest());

  axios
    .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then(({ data }) => dispatch(actions.addNewsSuccess(data)))
    .catch((error: Error) => dispatch(actions.addNewsError(error)));
};

const deleteNews = (id: number) => (dispatch: Dispatch) => {
  dispatch(actions.deleteNewsRequest());

  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => dispatch(actions.deleteNewsSuccess(id)))
    .catch((error: Error) => dispatch(actions.deleteNewsError(error)));
};

export default { fetchNews, deleteNews, addNews };
