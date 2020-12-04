const initialState = {
  dictionaries: [
    {
      id: 1,
      name: 'Spanish vocabulary',
      image: 'https://www.flagdetective.com/images/download/spain-state-hi.jpg',
      content: [
        {
          id: 1,
          word: 'uno',
          translation: 'jeden',
          known: false,
        },
        {
          id: 2,
          word: 'dos',
          translation: 'dwa',
          known: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Swedish vocabulary',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61iE2zO0wzL._AC_SL1500_.jpg',
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
      id: 3,
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
  return state;
};

export default rootReducer;
