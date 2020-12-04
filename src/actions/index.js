export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const addItem = (content) => {
  const getId = () => `
    _${Math.random().toString(36).substr(2, 9)};
    `;
  return {
    type: 'ADD_ITEM',
    payload: {
      item: {
        id: getId(),
        ...content,
      },
    },
  };
};
