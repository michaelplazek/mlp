export function reducer(initialState, handlers) {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    const newState = handler(state, action);
    if (newState === state) {
      return state;
    }

    return { ...state, ...newState };
  };
}

export default { reducer };
