import Axios from 'axios';

export const REMOVE_DICTIONARY = 'REMOVE_DICTIONARY';
export const ADD_DICTIONARY = 'ADD_DICTIONARY';
export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const DICTIONARY_FETCH_REQUEST = 'DICTIONARY_FETCH_REQUEST';
export const DICTIONARY_FETCH_SUCCESS = 'DICTIONARY_FETCH_SUCCESS';
export const DICTIONARY_FETCH_FAILURE = 'DICTIONARY_FETCH_FAILURE';
export const WORD_FETCH_REQUEST = 'WORD_FETCH_REQUEST';
export const WORD_FETCH_SUCCESS = 'WORD_FETCH_SUCCESS';
export const WORD_FETCH_FAILURE = 'WORD_FETCH_FAILURE';

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

export const fetchDictionaries = () => (dispatch, getState) => {
  dispatch({ type: DICTIONARY_FETCH_REQUEST });
  return Axios.get('http://localhost:9000/api/dictionaries', {
    params: {
      userID: getState().userID,
    },
  })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: DICTIONARY_FETCH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DICTIONARY_FETCH_FAILURE });
    });
};

export const fetchWords = (id) => (dispatch) => {
  dispatch({ type: WORD_FETCH_REQUEST });
  return Axios.get('http://localhost:9000/api/words', {
    params: {
      dictID: id,
    },
  })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: WORD_FETCH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: WORD_FETCH_FAILURE });
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

export const addWord = (content) => {
  const getId = () => `
    _${Math.random().toString(36).substr(2, 9)};
    `;
  return {
    type: ADD_WORD,
    payload: {
      item: {
        id: getId(),
        ...content,
      },
    },
  };
};

export const removeWord = (id) => {
  return {
    type: REMOVE_WORD,
    payload: {
      id,
    },
  };
};
