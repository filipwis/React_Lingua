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
          word: 'unobardzo bardzo bardzo bardzo bardzo bardzo długie zdanie',
          translation: 'unobardzo bardzo bardzo bardzo bardzo bardzo długie zdanie',
          known: false,
        },
        {
          id: '2',
          word: 'dos',
          translation: 'dwa',
          known: false,
        },
        {
          id: '3',
          word: 'uno',
          translation: 'jeden',
          known: false,
        },
        {
          id: '4',
          word: 'dos',
          translation: 'dwa',
          known: false,
        },
        {
          id: '5',
          word: 'uno',
          translation: 'jeden',
          known: false,
        },
        {
          id: '6',
          word: 'dos',
          translation: 'dwa',
          known: false,
        },
        {
          id: '7',
          word: 'uno',
          translation: 'jeden',
          known: false,
        },
        {
          id: '8',
          word: 'dos',
          translation: 'dwa',
          known: false,
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
          word: 'da',
          translation: 'nie wiem co to znaczy',
          known: false,
        },
        {
          id: 2,
          word: 'jalapenos',
          translation: 'to nie po szwecku',
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
          word: 'da',
          translation: 'nie wiem co to znaczy',
          known: false,
        },
        {
          id: 2,
          word: 'jalapenos',
          translation: 'to nie po szwecku',
          known: false,
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
