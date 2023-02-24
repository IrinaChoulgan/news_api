import actions from './actions';
import axios from 'axios';

const fetchNews = () => (dispatch) => {
  dispatch(actions.fetchNewsRequest());

  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => dispatch(actions.fetchNewsSuccess(data)))
    .catch((error) => dispatch(actions.fetchNewsError(error)));
};

const addNews = (page) => (dispatch) => {
  dispatch(actions.addNewsRequest());

  axios
    .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then(({ data }) => dispatch(actions.addNewsSuccess(data)))
    .catch((error) => dispatch(actions.addNewsError(error)));
};

const deleteNews = (id) => (dispatch) => {
  dispatch(actions.deleteNewsRequest());

  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => dispatch(actions.deleteNewsSuccess(id)))
    .catch((error) => dispatch(actions.deleteNewsError(error)));
};

export default { fetchNews, deleteNews, addNews };
