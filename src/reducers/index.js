import {
  REMOVE_DICTIONARY,
  ADD_DICTIONARY,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../actions';
const initialState = {
  dictionaries: [
    {
      id: '1',
      name: 'Spanish vocabulary',
      image: 'https://www.flagdetective.com/images/download/spain-state-hi.jpg',
      content: [
        {
          id: '1',
          word: 'beer',
          translation: 'la cerveza',
          known: false,
        },
        {
          id: '2',
          word: 'shampoo',
          translation: 'el champú',
          known: false,
        },
        {
          id: '3',
          word: 'snow',
          translation: 'la nieve',
          known: false,
        },
        {
          id: '4',
          word: 'hat',
          translation: 'el sombrero',
          known: false,
        },
        {
          id: '5',
          word: 'sugar',
          translation: 'el azúcar',
          known: false,
        },
        {
          id: '6',
          word: 'sun',
          translation: 'el sol',
          known: true,
        },
        {
          id: '7',
          word: 'moose',
          translation: 'el alce',
          known: true,
        },
        {
          id: '8',
          word: 'mirror',
          translation: 'el espejo',
          known: true,
        },
      ],
    },
    {
      id: '2',
      name: 'Swedish vocabulary',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png',
      content: [
        {
          id: 1,
          word: 'money',
          translation: 'Pengar',
          known: false,
        },
        {
          id: 2,
          word: 'me',
          translation: 'Jag',
          known: false,
        },
        {
          id: 3,
          word: 'pear',
          translation: 'Päron',
          known: false,
        },
        {
          id: 4,
          word: 'flag',
          translation: 'Flagga',
          known: false,
        },
        {
          id: 5,
          word: 'dance',
          translation: 'Dansa',
          known: false,
        },
        {
          id: 6,
          word: 'wall',
          translation: 'Vägg',
          known: false,
        },
        {
          id: 7,
          word: 'ear',
          translation: 'Öra',
          known: false,
        },
        {
          id: 8,
          word: 'paper',
          translation: 'Papper',
          known: false,
        },
        {
          id: 9,
          word: 'gold',
          translation: 'Guld',
          known: false,
        },
        {
          id: 10,
          word: 'window',
          translation: 'Fönster',
          known: false,
        },
      ],
    },
    {
      id: '3',
      name: 'Islandic vocabulary',
      image: 'https://cdn.webshopapp.com/shops/94414/files/52384872/flag-of-iceland.jpg',
      content: [
        {
          id: 1,
          word: 'pingwin',
          translation: 'Mörgæs',
          known: false,
        },
        {
          id: 2,
          word: 'zoo',
          translation: 'Dýragarður',
          known: false,
        },
        {
          id: 3,
          word: 'Raccoon',
          translation: 'Þvottabjörn',
          known: false,
        },
        {
          id: 4,
          word: 'Planet',
          translation: 'Reikistjarna',
          known: false,
        },
        {
          id: 5,
          word: 'Echo',
          translation: 'Mörgæs',
          known: true,
        },
        {
          id: 6,
          word: 'Wedding',
          translation: 'Brúðkaup',
          known: true,
        },
        {
          id: 7,
          word: 'Hippopotamus',
          translation: 'Flóðhestur',
          known: false,
        },
        {
          id: 8,
          word: 'Rainbow',
          translation: 'Regnbogi',
          known: true,
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_DICTIONARY:
      return {
        dictionaries: [...state.dictionaries, action.payload.item],
      };
    case REMOVE_DICTIONARY:
      return {
        dictionaries: [...state.dictionaries.filter((item) => item.id !== action.payload.id)],
      };
    case 'ADD_CONTENT':
      return {
        ...state,
        dictionaries: [...state.dictionaries, action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
