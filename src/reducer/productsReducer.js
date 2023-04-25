export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        correctAnswer: action.payload,
      };
    case 'ADD_WRONG_ANSWER':
      const newListWrongAnswer = [...state.listWrongAnswer, action.payload];

      return {
        ...state,
        listWrongAnswer: newListWrongAnswer,
      };

    case 'REFRESH_PRODUCTS':
      return {
        ...state,
        correctAnswer: action.payload,
        listWrongAnswer: [],
      };
    default:
      return state;
  }
};
