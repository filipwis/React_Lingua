import Axios from 'axios';

export const REMOVE_DICTIONARY_REQUEST = 'REMOVE_DICTIONARY_REQUEST';
export const REMOVE_DICTIONARY_SUCCESS = 'REMOVE_DICTIONARY_SUCCESS';
export const REMOVE_DICTIONARY_FAILURE = 'REMOVE_DICTIONARY_FAILURE';
export const REMOVE_WORD_REQUEST = 'REMOVE_WORD_REQUEST';
export const REMOVE_WORD_SUCCESS = 'REMOVE_WORD_SUCCESS';
export const REMOVE_WORD_FAILURE = 'REMOVE_WORD_FAILURE';
export const ADD_DICTIONARY_REQUEST = 'ADD_DICTIONARY_REQUEST';
export const ADD_DICTIONARY_SUCCESS = 'ADD_DICTIONARY_SUCCESS';
export const ADD_DICTIONARY_FAILURE = 'ADD_DICTIONARY_FAILURE';
export const ADD_WORD_REQUEST = 'ADD_WORD_REQUEST';
export const ADD_WORD_SUCCESS = 'ADD_WORD_SUCCESS';
export const ADD_WORD_FAILURE = 'ADD_WORD_FAILURE';
export const UPDATE_WORD_REQUEST = 'UPDATE_WORD_REQUEST';
export const UPDATE_WORD_SUCCESS = 'UPDATE_WORD_SUCCESS';
export const UPDATE_WORD_FAILURE = 'UPDATE_WORD_FAILURE';
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

export const removeDictionary = (id) => (dispatch) => {
  dispatch({ type: REMOVE_DICTIONARY_REQUEST });
  Axios.all([
    Axios.delete(`http://localhost:9000/api/dictionary/${id}`),
    Axios.delete('http://localhost:9000/api/deleteWord', {
      params: {
        dictID: id,
      },
    }),
  ])
    .then(() => {
      dispatch({
        type: REMOVE_DICTIONARY_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((err) => console.log(err));
};
export const removeWord = (id) => (dispatch) => {
  dispatch({ type: REMOVE_WORD_REQUEST });
  Axios.delete(`http://localhost:9000/api/word/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_WORD_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((err) => console.log(err));
};

export const addDictionary = (dictionaryContent) => (dispatch, getState) => {
  dispatch({ type: ADD_DICTIONARY_REQUEST });
  return Axios.post('http://localhost:9000/api/dictionary', {
    ...dictionaryContent,
    userID: getState().userID,
  })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: ADD_DICTIONARY_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_DICTIONARY_FAILURE });
    });
};

export const addWord = (wordContent, dictID) => (dispatch) => {
  dispatch({ type: ADD_WORD_REQUEST });
  return Axios.post('http://localhost:9000/api/word', {
    ...wordContent,
    dictID,
  })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: ADD_WORD_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_WORD_FAILURE });
    });
};
export const updateWord = (wordContent) => (dispatch) => {
  dispatch({ type: UPDATE_WORD_REQUEST });
  Axios.put(`http://localhost:9000/api/word/${wordContent._id}`, {
    ...wordContent,
  })
    .then(() => {
      console.log(wordContent);
      dispatch({
        type: UPDATE_WORD_SUCCESS,
        payload: {
          id: wordContent._id,
        },
      });
    })
    .catch((err) => console.log(err));
};
