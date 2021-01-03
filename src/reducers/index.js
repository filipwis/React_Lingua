import {
  REMOVE_DICTIONARY,
  ADD_DICTIONARY,
  ADD_WORD,
  REMOVE_WORD,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  DICTIONARY_FETCH_REQUEST,
  DICTIONARY_FETCH_SUCCESS,
  DICTIONARY_FETCH_FAILURE,
  WORD_FETCH_REQUEST,
  WORD_FETCH_SUCCESS,
  WORD_FETCH_FAILURE,
} from '../actions';
const initialState = {
  userID: '5fecad52b2911e175096d723',
};
// {
//   words: [
//     {
//       dictID: '1',
//       id: '1',
//       word: 'beer',
//       translation: 'la cerveza',
//       known: false,
//     },
//     {
//       dictID: '1',
//       id: '2',
//       word: 'shampoo',
//       translation: 'el champú',
//       known: true,
//     },
//     {
//       dictID: '1',
//       id: '3',
//       word: 'snow',
//       translation: 'la nieve',
//       known: true,
//     },
//     {
//       dictID: '1',
//       id: '4',
//       word: 'hat',
//       translation: 'el sombrero',
//       known: true,
//     },
//     {
//       dictID: '1',
//       id: '5',
//       word: 'sugar',
//       translation: 'el azúcar',
//       known: true,
//     },
//     {
//       dictID: '1',
//       id: '6',
//       word: 'sun',
//       translation: 'el sol',
//       known: true,
//     },
//     {
//       dictID: '1',
//       id: '7',
//       word: 'moose',
//       translation: 'el alce',
//       known: true,
//     },
//     {
//       dictID: '1',
//       id: '8',
//       word: 'mirror',
//       translation: 'el espejo',
//       known: true,
//     },
//     {
//       dictID: '2',
//       id: '9',
//       word: 'money',
//       translation: 'Pengar',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '10',
//       word: 'me',
//       translation: 'Jag',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '11',
//       word: 'pear',
//       translation: 'Päron',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '12',
//       word: 'flag',
//       translation: 'Flagga',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '13',
//       word: 'dance',
//       translation: 'Dansa',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '14',
//       word: 'wall',
//       translation: 'Vägg',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '15',
//       word: 'ear',
//       translation: 'Öra',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '16',
//       word: 'paper',
//       translation: 'Papper',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '17',
//       word: 'gold',
//       translation: 'Guld',
//       known: false,
//     },
//     {
//       dictID: '2',
//       id: '18',
//       word: 'window',
//       translation: 'Fönster',
//       known: false,
//     },
//     {
//       dictID: '3',
//       id: '19',
//       word: 'pingwin',
//       translation: 'Mörgæs',
//       known: false,
//     },
//     {
//       dictID: '3',
//       id: '20',
//       word: 'zoo',
//       translation: 'Dýragarður',
//       known: false,
//     },
//     {
//       dictID: '3',
//       id: '21',
//       word: 'Raccoon',
//       translation: 'Þvottabjörn',
//       known: false,
//     },
//     {
//       dictID: '3',
//       id: '22',
//       word: 'Planet',
//       translation: 'Reikistjarna',
//       known: false,
//     },
//     {
//       dictID: '3',
//       id: '23',
//       word: 'Echo',
//       translation: 'Mörgæs',
//       known: true,
//     },
//     {
//       dictID: '3',
//       id: '24',
//       word: 'Wedding',
//       translation: 'Brúðkaup',
//       known: true,
//     },
//     {
//       dictID: '3',
//       id: '25',
//       word: 'Hippopotamus',
//       translation: 'Flóðhestur',
//       known: false,
//     },
//     {
//       dictID: '3',
//       id: '26',
//       word: 'Rainbow',
//       translation: 'Regnbogi',
//       known: true,
//     },
//   ],
//   dictionaries: [
//     {
//       id: '1',
//       name: 'Spanish vocabulary',
//       image: 'https://www.flagdetective.com/images/download/spain-state-hi.jpg',
//     },
//     {
//       id: '2',
//       name: 'Swedish vocabulary',
//       image:
//         'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png',
//     },
//     {
//       id: '3',
//       name: 'Islandic vocabulary',
//       image: 'https://cdn.webshopapp.com/shops/94414/files/52384872/flag-of-iceland.jpg',
//     },
//   ],
// };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case DICTIONARY_FETCH_SUCCESS:
      return {
        ...state,
        dictionaries: [...action.payload.data],
      };
    case WORD_FETCH_SUCCESS:
      return {
        ...state,
        words: [...action.payload.data],
      };
    case ADD_DICTIONARY:
      return {
        ...state,
        dictionaries: [...state.dictionaries, action.payload.item],
      };
    case REMOVE_DICTIONARY:
      return {
        ...state,
        dictionaries: [...state.dictionaries.filter((item) => item.id !== action.payload.id)],
      };
    case ADD_WORD:
      return {
        ...state,
        words: [...state.words, action.payload.item],
      };
    case REMOVE_WORD:
      return {
        ...state,
        words: [...state.words.filter((item) => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
