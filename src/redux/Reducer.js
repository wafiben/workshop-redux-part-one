const initilaState = [];
const Reducer = (state = initilaState, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default Reducer;