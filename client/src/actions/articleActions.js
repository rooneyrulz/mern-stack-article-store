import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLE_LOADING } from "./types";
import Axios from "axios";

export const getArticles = () => dispatch => {
  dispatch(articleLoading());
  Axios.get('/api/articles').then(res => dispatch({
    type: GET_ARTICLES,
    payload: res.data
  }));
};

export const addArticle = (article) => dispatch => {
  Axios.post('/api/article', article).then(res => dispatch({
    type: ADD_ARTICLE,
    payload: res.data
  }));
};

export const deleteArticle = (id) => dispatch => {
  Axios.delete(`/api/article/${id}`).then(res => dispatch({
    type: DELETE_ARTICLE,
    payload: id
  }));
};

export const articleLoading = () => {
  return {
    type: ARTICLE_LOADING
  };
};