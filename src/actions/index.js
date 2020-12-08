import Axios from 'axios';

export const REMOVE_DICTIONARY = 'REMOVE_DICTIONARY';
export const ADD_DICTIONARY = 'ADD_DICTIONARY';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  return Axios.post('http://localhost:9000/api/user/login', {
    username,
    password,
  })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const removeDictionary = (id) => {
  return {
    type: REMOVE_DICTIONARY,
    payload: {
      id,
    },
  };
};

export const addDictionary = (content) => {
  const getId = () => `
    _${Math.random().toString(36).substr(2, 9)};
    `;
  return {
    type: ADD_DICTIONARY,
    payload: {
      item: {
        id: getId(),
        ...content,
      },
    },
  };
};
