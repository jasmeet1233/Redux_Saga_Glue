const initialStore = { count: 0, posts: [] };

export const counterReducer = (state = initialStore, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "SUCCESS") {
    return { ...state, posts: action.payload };
  }

  return state;
};
