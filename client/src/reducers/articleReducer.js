import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLE_LOADING } from "../actions/types";

const initialState = {
  articles: [],
  loading: false
};

const articleReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES: 
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    
    case ADD_ARTICLE: 
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };

    case DELETE_ARTICLE: 
      return {
        ...state,
        articles: state.articles.filter(article => article._id !== action.payload)
      };

    case ARTICLE_LOADING: 
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default articleReducer;